import { Investment, GlossaryTerm, LearningArticle, Source } from "../types";

export interface AssistantResponse {
  answer: string;
  isGrounded: boolean;
  guardrailTriggered?: boolean;
  guardrailMessage?: string;
  relatedInvestments: { name: string; slug: string; returnType: string }[];
  relatedGlossary: { term: string; slug: string }[];
  citedSources: { organization: string; title: string; url: string }[];
  asOfNote: string;
}

const PROHIBITED_PATTERNS = [
  /which stock (should i buy|to buy|is best|gives 100%|will double)/i,
  /give me (a stock tip|buy recommendation|crypto tip|trading call)/i,
  /is (.+) guaranteed to double/i,
  /guaranteed 20%|guaranteed 15%/i,
  /how much will i make if i invest in (.+) tomorrow/i,
  /tell me the best stock/i,
];

export function askInvestAtlas(
  prompt: string,
  investments: Investment[],
  glossary: GlossaryTerm[],
  articles: LearningArticle[],
  sources: Source[]
): AssistantResponse {
  const p = prompt.trim();
  const pLower = p.toLowerCase();

  // Guardrail check
  for (const pattern of PROHIBITED_PATTERNS) {
    if (pattern.test(pLower)) {
      return {
        answer:
          "InvestAtlas India is an objective educational platform and cannot provide stock tips, trading calls, buy/sell recommendations, or guaranteed return forecasts. We can, however, explain how different investment classes work, their underlying risk characteristics, and how to evaluate them using official data.",
        isGrounded: true,
        guardrailTriggered: true,
        guardrailMessage: "Advisory / Recommendation Request Refused as per Educational Neutrality Policy.",
        relatedInvestments: [],
        relatedGlossary: [
          { term: "Risk & Return", slug: "risk" },
          { term: "Diversification", slug: "diversification" },
        ],
        citedSources: [],
        asOfNote: "Educational Neutrality Policy — InvestAtlas India",
      };
    }
  }

  // Find matching investments
  const matchedInvestments = investments.filter(
    (inv) =>
      pLower.includes(inv.name.toLowerCase()) ||
      pLower.includes(inv.slug.toLowerCase()) ||
      inv.aliases.some((alias) => pLower.includes(alias.toLowerCase()))
  );

  // Find matching glossary terms
  const matchedTerms = glossary.filter(
    (t) =>
      pLower.includes(t.term.toLowerCase()) ||
      t.aliases.some((a) => pLower.includes(a.toLowerCase()))
  );

  // Intent 1: "Explain X simply" or "Explain X like I'm 18"
  if (matchedInvestments.length > 0 && (pLower.includes("explain") || pLower.includes("what is") || pLower.includes("how does") || pLower.includes("simple"))) {
    const inv = matchedInvestments[0];
    const cited = sources.filter((s) => inv.sourceIds.includes(s.id));

    return {
      answer: `### Simple Explanation of ${inv.name}\n\n${inv.beginnerExplanation}\n\n**How it works:**\n${inv.mechanismSteps
        .slice(0, 4)
        .map((step, idx) => `${idx + 1}. ${step}`)
        .join("\n")}\n\n**Key Characteristics:**\n- **Return Mechanism:** ${inv.returnInfo.returnType.replace("_", " ").toUpperCase()} (${inv.returnInfo.description})\n- **Risk Level:** ${inv.riskLevel.replace(/_/g, " ").toUpperCase()}\n- **Minimum Investment:** ${inv.minimumAmountText}\n- **Lock-in:** ${inv.lockInPeriod || "None"}\n- **Liquidity:** ${inv.liquidityDescription}\n\n**Tax Overview:** ${inv.taxationSummary}`,
      isGrounded: true,
      relatedInvestments: [{ name: inv.name, slug: inv.slug, returnType: inv.returnInfo.returnType }],
      relatedGlossary: matchedTerms.slice(0, 3).map((t) => ({ term: t.term, slug: t.slug })),
      citedSources: cited.map((s) => ({ organization: s.organization, title: s.title, url: s.url })),
      asOfNote: `Data verified from official sources as of ${inv.lastVerifiedAt || "latest statutory notification"}.`,
    };
  }

  // Intent 2: "Compare X and Y" or "Difference between X and Y"
  if (matchedInvestments.length >= 2 || (pLower.includes("vs") || pLower.includes("difference") || pLower.includes("compare"))) {
    const invList = matchedInvestments.length >= 2 ? matchedInvestments.slice(0, 2) : investments.slice(0, 2);
    const inv1 = invList[0];
    const inv2 = invList[1];

    return {
      answer: `### Comparing ${inv1.name} and ${inv2.name}\n\nHere is a factual comparison across key dimensions:\n\n1. **Return Mechanism:**\n   - **${inv1.name}:** ${inv1.returnInfo.returnType.replace("_", " ").toUpperCase()} (${inv1.returnInfo.description})\n   - **${inv2.name}:** ${inv2.returnInfo.returnType.replace("_", " ").toUpperCase()} (${inv2.returnInfo.description})\n\n2. **Risk & Safety:**\n   - **${inv1.name}:** ${inv1.riskLevel.replace(/_/g, " ").toUpperCase()} — ${inv1.riskDescription}\n   - **${inv2.name}:** ${inv2.riskLevel.replace(/_/g, " ").toUpperCase()} — ${inv2.riskDescription}\n\n3. **Lock-in & Liquidity:**\n   - **${inv1.name}:** Lock-in: ${inv1.lockInPeriod || "None"} (${inv1.liquidityLevel} liquidity)\n   - **${inv2.name}:** Lock-in: ${inv2.lockInPeriod || "None"} (${inv2.liquidityLevel} liquidity)\n\n4. **Tax Summary:**\n   - **${inv1.name}:** ${inv1.taxationSummary}\n   - **${inv2.name}:** ${inv2.taxationSummary}\n\n*Note: Neither option is universally "better". The right option depends on your specific time horizon, liquidity need, and risk tolerance.*`,
      isGrounded: true,
      relatedInvestments: invList.map((i) => ({ name: i.name, slug: i.slug, returnType: i.returnInfo.returnType })),
      relatedGlossary: matchedTerms.slice(0, 3).map((t) => ({ term: t.term, slug: t.slug })),
      citedSources: sources.slice(0, 2).map((s) => ({ organization: s.organization, title: s.title, url: s.url })),
      asOfNote: "Comparison generated deterministically from official platform seed data.",
    };
  }

  // Intent 3: Glossary term inquiry
  if (matchedTerms.length > 0) {
    const term = matchedTerms[0];
    return {
      answer: `### Understanding "${term.term}"\n\n**Simple Definition:**\n${term.simpleDefinition}\n\n${term.technicalDefinition ? `**Technical Context:**\n${term.technicalDefinition}\n\n` : ""}${term.example ? `**Practical Example:**\n${term.example}` : ""}`,
      isGrounded: true,
      relatedInvestments: matchedInvestments.slice(0, 2).map((i) => ({ name: i.name, slug: i.slug, returnType: i.returnInfo.returnType })),
      relatedGlossary: matchedTerms.map((t) => ({ term: t.term, slug: t.slug })),
      citedSources: sources.slice(0, 1).map((s) => ({ organization: s.organization, title: s.title, url: s.url })),
      asOfNote: "Standardized financial education curriculum.",
    };
  }

  // Fallback: General beginner inquiry
  return {
    answer: `### InvestAtlas Educational Assistant\n\nI can help you understand any investment option in India using verified official data.\n\n**You can ask me questions like:**\n- "Explain PPF like I am 18."\n- "What is the difference between Mutual Funds and ETFs?"\n- "What does lock-in mean?"\n- "Why can a stock lose money?"\n- "How is Fixed Deposit interest taxed in India?"\n\n*Remember: InvestAtlas India is purely educational and does not provide financial advice, rankings, or recommendations.*`,
    isGrounded: true,
    relatedInvestments: investments.slice(0, 3).map((i) => ({ name: i.name, slug: i.slug, returnType: i.returnInfo.returnType })),
    relatedGlossary: glossary.slice(0, 3).map((t) => ({ term: t.term, slug: t.slug })),
    citedSources: sources.slice(0, 2).map((s) => ({ organization: s.organization, title: s.title, url: s.url })),
    asOfNote: "Grounded educational assistant.",
  };
}
