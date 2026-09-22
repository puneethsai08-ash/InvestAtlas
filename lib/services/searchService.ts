import { Investment, InvestmentCategory, GlossaryTerm, LearningArticle, SearchResultItem } from "../types";

export interface SearchOptions {
  query: string;
  categoryFilter?: string;
  riskFilter?: string;
  limit?: number;
}

export function searchAll(
  query: string,
  investments: Investment[],
  categories: InvestmentCategory[],
  glossary: GlossaryTerm[],
  articles: LearningArticle[],
  limit = 12
): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: (SearchResultItem & { score: number })[] = [];

  // 1. Search Investments
  for (const inv of investments) {
    let score = 0;
    const nameLower = inv.name.toLowerCase();
    const slugLower = inv.slug.toLowerCase();
    const aliasesLower = inv.aliases.map((a) => a.toLowerCase());

    if (nameLower === q) score += 100;
    else if (nameLower.startsWith(q)) score += 80;
    else if (nameLower.includes(q)) score += 60;

    if (aliasesLower.some((a) => a === q)) score += 95;
    else if (aliasesLower.some((a) => a.includes(q))) score += 50;

    if (inv.shortDescription.toLowerCase().includes(q)) score += 30;
    if (inv.beginnerExplanation.toLowerCase().includes(q)) score += 20;

    // Check tags / keywords
    if (inv.taxationSummary.toLowerCase().includes(q)) score += 15;
    if (inv.administeringAuthority.toLowerCase().includes(q)) score += 15;

    if (score > 0) {
      results.push({
        id: inv.id,
        slug: inv.slug,
        title: inv.name,
        subtitle: inv.shortDescription,
        type: "investment",
        badge: inv.riskLevel.replace(/_/g, " ").toUpperCase(),
        url: `/investment/${inv.slug}`,
        score,
      });
    }
  }

  // 2. Search Categories
  for (const cat of categories) {
    let score = 0;
    const nameLower = cat.name.toLowerCase();
    if (nameLower === q) score += 90;
    else if (nameLower.startsWith(q)) score += 70;
    else if (nameLower.includes(q)) score += 50;
    if (cat.shortDescription.toLowerCase().includes(q)) score += 25;

    if (score > 0) {
      results.push({
        id: cat.id,
        slug: cat.slug,
        title: cat.name,
        subtitle: cat.shortDescription,
        type: "category",
        badge: "Category",
        url: `/category/${cat.slug}`,
        score,
      });
    }
  }

  // 3. Search Glossary
  for (const term of glossary) {
    let score = 0;
    const termLower = term.term.toLowerCase();
    if (termLower === q) score += 95;
    else if (termLower.startsWith(q)) score += 75;
    else if (termLower.includes(q)) score += 55;
    if (term.aliases?.some((a) => a.toLowerCase().includes(q))) score += 40;
    if (term.simpleDefinition.toLowerCase().includes(q)) score += 20;

    if (score > 0) {
      results.push({
        id: term.id,
        slug: term.slug,
        title: term.term,
        subtitle: term.simpleDefinition,
        type: "glossary",
        badge: `Glossary (${term.difficulty})`,
        url: `/glossary/${term.slug}`,
        score,
      });
    }
  }

  // 4. Search Learning Articles
  for (const art of articles) {
    let score = 0;
    const titleLower = art.title.toLowerCase();
    if (titleLower === q) score += 85;
    else if (titleLower.startsWith(q)) score += 65;
    else if (titleLower.includes(q)) score += 45;
    if (art.summary.toLowerCase().includes(q)) score += 20;

    if (score > 0) {
      results.push({
        id: art.id,
        slug: art.slug,
        title: art.title,
        subtitle: art.summary,
        type: "learn",
        badge: `Lesson ${art.sequence}`,
        url: `/learn/${art.slug}`,
        score,
      });
    }
  }

  // Sort by highest score first, then take limit
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map(({ score, ...item }) => item);
}
