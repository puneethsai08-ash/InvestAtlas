import { Investment, ComparisonCriterion, NormalizedComparisonRow } from "../types";

export const COMPARISON_CRITERIA: ComparisonCriterion[] = [
  {
    id: "category",
    name: "Category & Subcategory",
    description: "Asset class and primary market category in India",
    category: "basics",
  },
  {
    id: "returnType",
    name: "Return Mechanism",
    description: "How returns are generated (Fixed rate, Declared rate, Market-linked, Coupon)",
    category: "returns_and_risk",
  },
  {
    id: "riskLevel",
    name: "Risk Level & Key Risks",
    description: "Capital loss potential, volatility, and specific risks",
    category: "returns_and_risk",
  },
  {
    id: "minimumAmount",
    name: "Minimum Investment",
    description: "Minimum starting ticket size in INR",
    category: "basics",
  },
  {
    id: "maximumAmount",
    name: "Maximum Investment Limit",
    description: "Upper contribution ceiling per financial year or account",
    category: "basics",
  },
  {
    id: "lockInPeriod",
    name: "Lock-in Period",
    description: "Mandatory holding duration before principal can be withdrawn",
    category: "liquidity_and_lockin",
  },
  {
    id: "liquidityLevel",
    name: "Liquidity & Premature Exit",
    description: "Speed and ease of converting units/corpus into cash",
    category: "liquidity_and_lockin",
  },
  {
    id: "suggestedHorizon",
    name: "Appropriate Time Horizon",
    description: "Recommended holding period for best financial fit",
    category: "returns_and_risk",
  },
  {
    id: "taxationSummary",
    name: "Tax Treatment Overview",
    description: "Taxability of deposits, accruals, and final withdrawal / capital gains",
    category: "tax_and_rules",
  },
  {
    id: "eligibility",
    name: "Eligibility Criteria",
    description: "Who can invest (Resident Indian individuals, Minors, HUFs, NRIs)",
    category: "tax_and_rules",
  },
  {
    id: "regulation",
    name: "Regulating / Administering Body",
    description: "Statutory authority overseeing the scheme (RBI, SEBI, MoF, PFRDA, EPFO)",
    category: "tax_and_rules",
  },
  {
    id: "advantages",
    name: "Key Advantages",
    description: "Primary educational merits and benefits",
    category: "evaluation",
  },
  {
    id: "limitations",
    name: "Key Limitations",
    description: "Drawbacks, penalties, and constraints to consider",
    category: "evaluation",
  },
];

export function buildComparisonMatrix(investments: Investment[]): NormalizedComparisonRow[] {
  return COMPARISON_CRITERIA.map((criterion) => {
    const values = investments.map((inv) => {
      switch (criterion.id) {
        case "category":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.categoryId.replace("cat-", "").replace("-", " ").toUpperCase(),
            subtext: inv.subcategory || undefined,
            type: "badge" as const,
          };
        case "returnType":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.returnInfo.returnType.replace("_", " ").toUpperCase(),
            subtext: inv.returnInfo.description,
            type: "text" as const,
          };
        case "riskLevel":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.riskLevel.replace(/_/g, " ").toUpperCase(),
            subtext: inv.riskDescription,
            type: "badge" as const,
          };
        case "minimumAmount":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.minimumAmountText || (inv.minimumAmount ? `₹${inv.minimumAmount.toLocaleString("en-IN")}` : "Product Dependent"),
            type: "amount" as const,
          };
        case "maximumAmount":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.maximumAmountText || (inv.maximumAmount ? `₹${inv.maximumAmount.toLocaleString("en-IN")}` : "No Statutory Limit"),
            type: "text" as const,
          };
        case "lockInPeriod":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.lockInPeriod || "None",
            type: "text" as const,
          };
        case "liquidityLevel":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.liquidityLevel.replace(/_/g, " ").toUpperCase(),
            subtext: inv.liquidityDescription,
            type: "text" as const,
          };
        case "suggestedHorizon":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.suggestedHorizon,
            type: "text" as const,
          };
        case "taxationSummary":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.taxationSummary,
            type: "text" as const,
          };
        case "eligibility":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.eligibility,
            type: "text" as const,
          };
        case "regulation":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.administeringAuthority || inv.regulation || "Statutory Oversight",
            type: "text" as const,
          };
        case "advantages":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.advantages.slice(0, 3).join(" • "),
            type: "list" as const,
          };
        case "limitations":
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: inv.limitations.slice(0, 3).join(" • "),
            type: "list" as const,
          };
        default:
          return {
            investmentId: inv.id,
            investmentSlug: inv.slug,
            investmentName: inv.name,
            displayValue: "—",
            type: "text" as const,
          };
      }
    });

    return {
      criterion,
      values,
    };
  });
}

/**
 * Deterministic educational comparison breakdown.
 * Explains key trade-offs between selected investments without ever picking a winner.
 */
export function generateEducationalComparisonSummary(investments: Investment[]): {
  overview: string;
  keyDifferences: { title: string; explanation: string }[];
  suitabilityNote: string;
} {
  if (investments.length < 2) {
    return {
      overview: "Select at least 2 investments to view a comparative breakdown.",
      keyDifferences: [],
      suitabilityNote: "",
    };
  }

  const names = investments.map((i) => i.name).join(" vs ");
  const riskLevels = Array.from(new Set(investments.map((i) => i.riskLevel)));
  const returnTypes = Array.from(new Set(investments.map((i) => i.returnInfo.returnType)));
  const lockIns = investments.map((i) => `${i.name}: ${i.lockInPeriod || "No lock-in"}`);

  const differences: { title: string; explanation: string }[] = [];

  // Return mechanism difference
  if (returnTypes.length > 1) {
    differences.push({
      title: "Return Nature & Predictability",
      explanation: `These options generate returns differently: ${investments
        .map((i) => `${i.name} uses ${i.returnInfo.returnType.replace("_", " ")} returns (${i.returnInfo.description})`)
        .join("; ")}. Never compare fixed/declared returns directly with market-linked returns without accounting for risk.`,
    });
  } else {
    differences.push({
      title: "Return Mechanism",
      explanation: `Both options share a similar return framework (${returnTypes[0].replace("_", " ")}), but their underlying structures, credit profiles, and tax treatment differ.`,
    });
  }

  // Risk profile difference
  differences.push({
    title: "Risk & Volatility Spectrum",
    explanation: `Risk profiles vary across your selection: ${investments
      .map((i) => `${i.name} is classified as ${i.riskLevel.replace(/_/g, " ")} risk`)
      .join(", ")}. Higher risk options may offer growth potential over long horizons, while lower-risk options prioritize capital preservation.`,
  });

  // Liquidity & Lock-in difference
  differences.push({
    title: "Liquidity & Capital Access",
    explanation: `Holding periods and exit rules differ significantly: ${lockIns.join(
      " | "
    )}. Ensure you match your investment tenure with when you realistically anticipate needing the capital.`,
  });

  // Tax considerations
  differences.push({
    title: "Taxation Differences",
    explanation: `Tax efficiency varies by product and holding duration: ${investments
      .map((i) => `${i.name} (${i.taxationSummary})`)
      .join(" vs ")}. Note that tax laws are subject to periodic budget amendments.`,
  });

  return {
    overview: `Comparing ${names}. This side-by-side analysis highlights the structural trade-offs in return certainty, liquidity lock-in, and risk exposure.`,
    keyDifferences: differences,
    suitabilityNote:
      "Educational Note: There is no universally 'superior' investment. The appropriate choice depends strictly on your individual time horizon, liquidity requirements, tax slab, and risk appetite.",
  };
}
