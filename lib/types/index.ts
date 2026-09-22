export type RiskLevel =
  | "low"
  | "low_to_moderate"
  | "moderate"
  | "moderate_to_high"
  | "high"
  | "very_high"
  | "not_applicable";

export type LiquidityLevel =
  | "high"
  | "moderate"
  | "low"
  | "very_low"
  | "product_dependent";

export type ReturnType =
  | "fixed"
  | "declared_rate"
  | "market_linked"
  | "coupon"
  | "yield"
  | "variable"
  | "other";

export type ContentStatus = "draft" | "review" | "published" | "archived";

export interface Source {
  id: string;
  organization: string;
  title: string;
  url: string;
  sourceType: "government" | "regulator" | "official_provider" | "exchange" | "research" | "other";
  publicationDate?: string;
  accessedDate: string;
  documentReference?: string;
  reliabilityNote?: string;
  active: boolean;
}

export interface InvestmentCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  beginnerDescription: string;
  iconName: string;
  displayOrder: number;
  status: ContentStatus;
  keyUseCases: string[];
  majorRisks: string[];
  regulatoryAuthority: string;
}

export interface ReturnInformation {
  returnType: ReturnType;
  rateDisplay?: string;
  asOfDate?: string;
  isGuaranteed: boolean;
  isIllustrative: boolean;
  description: string;
  benchmark?: string;
  sourceId?: string;
}

export interface PracticalExample {
  title: string;
  scenario: string;
  amountInvested: string;
  horizon: string;
  outcomeExplanation: string;
  disclaimer: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Investment {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  categoryId: string;
  subcategory?: string;
  shortDescription: string;
  beginnerExplanation: string;
  mechanismSteps: string[];
  returnInfo: ReturnInformation;
  minimumAmount: number | null;
  minimumAmountText: string;
  maximumAmount: number | null;
  maximumAmountText: string;
  riskLevel: RiskLevel;
  riskDescription: string;
  keyRisks: { name: string; description: string }[];
  liquidityLevel: LiquidityLevel;
  liquidityDescription: string;
  withdrawalRules: string[];
  lockInPeriod: string;
  suggestedHorizon: string;
  volatilityDescription?: string;
  eligibility: string;
  eligibleEntities: string[];
  regulation: string;
  administeringAuthority: string;
  taxationSummary: string;
  taxDetails: {
    investmentStage: string;
    growthStage: string;
    withdrawalStage: string;
    sectionApplicability?: string;
  };
  advantages: string[];
  limitations: string[];
  practicalExample: PracticalExample;
  accessMethods: string[];
  commonMistakes: string[];
  faqs: FAQItem[];
  relatedInvestmentSlugs: string[];
  sourceIds: string[];
  status: ContentStatus;
  lastVerifiedAt: string;
  completenessScore: number;
  editorialNotes?: string;
}

export interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  aliases: string[];
  simpleDefinition: string;
  technicalDefinition?: string;
  example?: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  relatedInvestmentSlugs: string[];
  relatedTermSlugs: string[];
  category?: string;
  status: "draft" | "published";
}

export interface LearningSection {
  title: string;
  content: string;
  callout?: { type: "info" | "warning" | "tip" | "concept"; title: string; text: string };
}

export interface LearningQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LearningArticle {
  id: string;
  slug: string;
  sequence: number;
  title: string;
  subtitle: string;
  summary: string;
  level: "beginner" | "intermediate" | "advanced";
  estimatedMinutes: number;
  sections: LearningSection[];
  keyTakeaways: string[];
  relatedInvestmentSlugs: string[];
  relatedGlossarySlugs: string[];
  quiz?: LearningQuizQuestion[];
  publishedAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  recordId: string;
  recordType: "investment" | "category" | "glossary" | "source";
  field: string;
  oldValue: string;
  newValue: string;
  sourceId?: string;
  changedBy: string;
  changedAt: string;
  reason: string;
}

export interface ComparisonCriterion {
  id: string;
  name: string;
  description: string;
  category: "basics" | "returns_and_risk" | "liquidity_and_lockin" | "tax_and_rules" | "evaluation";
}

export interface SearchResultItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: "investment" | "category" | "glossary" | "learn";
  badge?: string;
  url: string;
}

export interface NormalizedComparisonRow {
  criterion: ComparisonCriterion;
  values: {
    investmentId: string;
    investmentSlug: string;
    investmentName: string;
    displayValue: string;
    subtext?: string;
    type?: "badge" | "text" | "list" | "amount";
    badgeVariant?: string;
  }[];
}
