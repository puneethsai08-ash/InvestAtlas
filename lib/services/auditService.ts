import { Investment, AuditLog } from "../types";

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: "audit-001",
    recordId: "public-provident-fund",
    recordType: "investment",
    field: "status",
    oldValue: "draft",
    newValue: "published",
    sourceId: "src-mof-savings",
    changedBy: "Senior Data Editor (InvestAtlas)",
    changedAt: "2024-10-15T10:30:00Z",
    reason: "Initial verification against Ministry of Finance Small Savings notification",
  },
  {
    id: "audit-002",
    recordId: "fixed-deposit",
    recordType: "investment",
    field: "taxationSummary",
    oldValue: "Taxed as per income slab",
    newValue: "Interest fully taxable at marginal slab rates under 'Income from Other Sources'. TDS applicable above ₹40,000 (₹50,000 for senior citizens).",
    sourceId: "src-incometax-act",
    changedBy: "Tax Policy Specialist",
    changedAt: "2024-10-16T14:15:00Z",
    reason: "Refined beginner clarity and statutory TDS threshold citations",
  },
  {
    id: "audit-003",
    recordId: "sovereign-gold-bond",
    recordType: "investment",
    field: "taxationSummary",
    oldValue: "Tax free on maturity",
    newValue: "Capital gains tax fully exempt if held until sovereign maturity (8 years). 2.5% p.a. semi-annual interest is taxable at investor slab rate.",
    sourceId: "src-rbi-retail-direct",
    changedBy: "Fixed Income Analyst",
    changedAt: "2024-10-17T09:00:00Z",
    reason: "Clarified distinct tax treatment between semi-annual coupon and redemption capital gains",
  },
];

export function calculateInvestmentCompleteness(inv: Partial<Investment>): number {
  let points = 0;
  const total = 10;

  if (inv.name && inv.slug) points += 1;
  if (inv.shortDescription && inv.beginnerExplanation) points += 1;
  if (inv.returnInfo?.returnType && inv.returnInfo?.description) points += 1;
  if (inv.riskLevel && inv.riskDescription) points += 1;
  if (inv.liquidityLevel && inv.liquidityDescription) points += 1;
  if (inv.taxationSummary) points += 1;
  if (inv.advantages && inv.advantages.length >= 2 && inv.limitations && inv.limitations.length >= 2) points += 1;
  if (inv.practicalExample?.scenario) points += 1;
  if (inv.faqs && inv.faqs.length >= 2) points += 1;
  if (inv.sourceIds && inv.sourceIds.length >= 1) points += 1;

  return Math.round((points / total) * 100);
}
