import { RiskLevel, LiquidityLevel, ReturnType } from "../types";

export function formatCurrency(amount: number | null | undefined): string {
  if (amount === null || amount === undefined) return "N/A";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return "Not specified";
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function getRiskLabel(risk: RiskLevel): string {
  switch (risk) {
    case "low":
      return "Low Risk";
    case "low_to_moderate":
      return "Low to Moderate";
    case "moderate":
      return "Moderate Risk";
    case "moderate_to_high":
      return "Moderate to High";
    case "high":
      return "High Risk";
    case "very_high":
      return "Very High Risk";
    default:
      return "Product Dependent";
  }
}

export function getLiquidityLabel(liquidity: LiquidityLevel): string {
  switch (liquidity) {
    case "high":
      return "High Liquidity (T+1 to T+3)";
    case "moderate":
      return "Moderate (Penalty or Timelines)";
    case "low":
      return "Low (Multi-year lock-in / Conditional)";
    case "very_low":
      return "Very Low (Illiquid)";
    case "product_dependent":
      return "Product Dependent";
    default:
      return "Variable";
  }
}

export function getReturnTypeLabel(returnType: ReturnType): string {
  switch (returnType) {
    case "fixed":
      return "Fixed Rate (Guaranteed / Contractual)";
    case "declared_rate":
      return "Quarterly / Periodically Declared Rate";
    case "market_linked":
      return "Market-Linked (Non-Guaranteed)";
    case "coupon":
      return "Fixed Coupon / Periodic Interest";
    case "yield":
      return "Market Yield (Fluctuates with Prices)";
    case "variable":
      return "Variable / Floating Rate";
    default:
      return "Variable";
  }
}
