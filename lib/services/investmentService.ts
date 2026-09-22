import { db } from "../data/store";
import { Investment, InvestmentCategory, GlossaryTerm, LearningArticle, Source, AuditLog } from "../types";

export const investmentService = {
  getAllInvestments(publishedOnly = false): Investment[] {
    return db.getInvestments(publishedOnly);
  },

  getInvestmentBySlug(slug: string): Investment | undefined {
    return db.getInvestmentBySlug(slug);
  },

  getInvestmentsByCategory(categoryId: string): Investment[] {
    return db.getInvestmentsByCategory(categoryId);
  },

  getAllCategories(): InvestmentCategory[] {
    return db.getCategories();
  },

  getCategoryBySlug(slug: string): InvestmentCategory | undefined {
    return db.getCategoryBySlug(slug);
  },

  getAllSources(): Source[] {
    return db.getSources();
  },

  getSourceById(id: string): Source | undefined {
    return db.getSourceById(id);
  },

  getSourcesForInvestment(investment: Investment): Source[] {
    return db.getSourcesForInvestment(investment);
  },

  getAllGlossary(): GlossaryTerm[] {
    return db.getGlossary();
  },

  getGlossaryBySlug(slug: string): GlossaryTerm | undefined {
    return db.getGlossaryBySlug(slug);
  },

  getAllLearningArticles(): LearningArticle[] {
    return db.getLearningArticles();
  },

  getLearningArticleBySlug(slug: string): LearningArticle | undefined {
    return db.getLearningArticleBySlug(slug);
  },

  getAllAuditLogs(): AuditLog[] {
    return db.getAuditLogs();
  },

  updateInvestment(
    slug: string,
    updates: Partial<Investment>,
    changedBy: string,
    reason: string
  ): Investment | null {
    return db.updateInvestment(slug, updates, changedBy, reason);
  },

  toggleSourceStatus(sourceId: string): boolean {
    return db.toggleSourceStatus(sourceId);
  },
};
