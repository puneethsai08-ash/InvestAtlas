import { Investment, InvestmentCategory, GlossaryTerm, LearningArticle, Source, AuditLog } from "../types";
import { INITIAL_CATEGORIES } from "./categories";
import { INITIAL_SOURCES } from "./sources";
import { INVESTMENTS as ALL_SEED_INVESTMENTS } from "./investments";
import { INITIAL_GLOSSARY } from "./glossary";
import { INITIAL_LEARNING } from "./learning";
import { INITIAL_AUDIT_LOGS } from "@/lib/services/auditService";

class DataStore {
  private investments: Investment[] = [...ALL_SEED_INVESTMENTS];
  private categories: InvestmentCategory[] = [...INITIAL_CATEGORIES];
  private sources: Source[] = [...INITIAL_SOURCES];
  private glossary: GlossaryTerm[] = [...INITIAL_GLOSSARY];
  private learning: LearningArticle[] = [...INITIAL_LEARNING];
  private auditLogs: AuditLog[] = [...INITIAL_AUDIT_LOGS];

  // Getters
  public getInvestments(filterStatus?: boolean): Investment[] {
    if (filterStatus) {
      return this.investments.filter((i) => i.status === "published");
    }
    return [...this.investments];
  }

  public getInvestmentBySlug(slug: string): Investment | undefined {
    if (!slug) return undefined;
    return this.investments.find((i) => i?.slug && i.slug.toLowerCase() === slug.toLowerCase());
  }

  public getInvestmentsByCategory(categoryId: string): Investment[] {
    return this.investments.filter((i) => i.categoryId === categoryId);
  }

  public getCategories(): InvestmentCategory[] {
    return [...this.categories].sort((a, b) => a.displayOrder - b.displayOrder);
  }

  public getAllCategories(): InvestmentCategory[] {
    return this.getCategories();
  }

  public getAllInvestments(publishedOnly = false): Investment[] {
    return this.getInvestments(publishedOnly);
  }

  public getAllGlossary(): GlossaryTerm[] {
    return this.getGlossary();
  }

  public getAllLearningArticles(): LearningArticle[] {
    return this.getLearningArticles();
  }

  public getAllAuditLogs(): AuditLog[] {
    return this.getAuditLogs();
  }

  public getCategoryBySlug(slug: string): InvestmentCategory | undefined {
    if (!slug) return undefined;
    return this.categories.find((c) => c?.slug && c.slug.toLowerCase() === slug.toLowerCase());
  }

  public getSources(): Source[] {
    return [...this.sources];
  }

  public getSourceById(id: string): Source | undefined {
    return this.sources.find((s) => s.id === id);
  }

  public getSourcesForInvestment(investment: Investment): Source[] {
    return this.sources.filter((s) => investment.sourceIds.includes(s.id));
  }

  public getGlossary(): GlossaryTerm[] {
    return [...this.glossary].sort((a, b) => a.term.localeCompare(b.term));
  }

  public getGlossaryBySlug(slug: string): GlossaryTerm | undefined {
    if (!slug) return undefined;
    return this.glossary.find((g) => g?.slug && g.slug.toLowerCase() === slug.toLowerCase());
  }

  public getLearningArticles(): LearningArticle[] {
    return [...this.learning].sort((a, b) => a.sequence - b.sequence);
  }

  public getLearningArticleBySlug(slug: string): LearningArticle | undefined {
    if (!slug) return undefined;
    return this.learning.find((l) => l?.slug && l.slug.toLowerCase() === slug.toLowerCase());
  }

  public getAuditLogs(): AuditLog[] {
    return [...this.auditLogs].sort(
      (a, b) => new Date(b.changedAt).getTime() - new Date(a.changedAt).getTime()
    );
  }

  // Admin Mutations with Audit Trail
  public updateInvestment(
    slug: string,
    updates: Partial<Investment>,
    changedBy: string,
    reason: string
  ): Investment | null {
    const index = this.investments.findIndex((i) => i.slug === slug);
    if (index === -1) return null;

    const old = this.investments[index];
    const updated: Investment = {
      ...old,
      ...updates,
    };

    this.investments[index] = updated;

    // Log the change
    const newLog: AuditLog = {
      id: `audit-${Date.now()}`,
      recordId: slug,
      recordType: "investment",
      field: Object.keys(updates).join(", "),
      oldValue: JSON.stringify(
        Object.fromEntries(
          Object.keys(updates).map((k) => [k, (old as unknown as Record<string, unknown>)[k]])
        )
      ),
      newValue: JSON.stringify(updates),
      changedBy: changedBy || "Admin User",
      changedAt: new Date().toISOString(),
      reason: reason || "Data review and verification",
    };

    this.auditLogs.unshift(newLog);
    return updated;
  }

  public toggleSourceStatus(sourceId: string): boolean {
    const source = this.sources.find((s) => s.id === sourceId);
    if (!source) return false;
    source.active = !source.active;
    return source.active;
  }
}

// Global Singleton
export const db = new DataStore();
