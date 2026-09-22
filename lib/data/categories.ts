import { InvestmentCategory } from "../types";

export const INITIAL_CATEGORIES: InvestmentCategory[] = [
  {
    id: "cat-govt-savings",
    slug: "government-savings",
    name: "Government Small Savings",
    shortDescription: "Sovereign-backed savings schemes offering capital protection and periodically declared interest rates.",
    beginnerDescription: "Administered by the Ministry of Finance and offered via Post Offices and major banks. Backed by the Government of India, making default risk virtually zero. Designed for disciplined, long-term wealth accumulation and tax savings.",
    iconName: "ShieldCheck",
    displayOrder: 1,
    status: "published",
    keyUseCases: [
      "Long-term guaranteed capital growth",
      "Retirement corpus building (PPF)",
      "Girl child education and marriage (SSY)",
      "Senior citizen regular income (SCSS)",
      "Tax-saving under Section 80C (Old Regime)"
    ],
    majorRisks: [
      "Inflation risk (declared returns may lag high inflation)",
      "Liquidity risk (multi-year lock-in periods with strict premature withdrawal penalties)",
      "Re-investment risk (interest rates are reviewed quarterly by the Government)"
    ],
    regulatoryAuthority: "Ministry of Finance / Reserve Bank of India",
  },
  {
    id: "cat-bank-savings",
    slug: "bank-savings",
    name: "Bank Deposits & Savings",
    shortDescription: "Fixed and recurring deposit products offered by scheduled commercial and cooperative banks.",
    beginnerDescription: "Contractual fixed-rate deposit schemes with predefined tenures. Deposits up to ₹5,00,000 (principal + interest) per depositor per bank are insured by DICGC (RBI subsidiary).",
    iconName: "Building2",
    displayOrder: 2,
    status: "published",
    keyUseCases: [
      "Emergency fund parking",
      "Short-to-medium term milestone savings (1 to 3 years)",
      "Predictable, non-market linked fixed interest cash flows"
    ],
    majorRisks: [
      "Tax drag (interest added to income and taxed at your marginal slab)",
      "Inflation erosion over long horizons",
      "Credit risk above the ₹5,00,000 DICGC insurance ceiling"
    ],
    regulatoryAuthority: "Reserve Bank of India (RBI)",
  },
  {
    id: "cat-market-funds",
    slug: "market-linked-funds",
    name: "Market-Linked Mutual Funds & ETFs",
    shortDescription: "Pooled investment vehicles managed by professional asset management companies (AMCs) across equity and debt.",
    beginnerDescription: "Money pooled from thousands of investors and deployed across diversified baskets of stocks, bonds, or commodities based on stated mandates. Returns are market-driven and non-guaranteed.",
    iconName: "TrendingUp",
    displayOrder: 3,
    status: "published",
    keyUseCases: [
      "Long-term wealth creation beating inflation (Equity Funds)",
      "Low-cost market tracking (Index Funds & ETFs)",
      "Short-term capital parking with low volatility (Liquid & Debt Funds)",
      "Systematic small-ticket monthly investing (SIP)"
    ],
    majorRisks: [
      "Market volatility and short-term capital loss",
      "No guaranteed returns or capital protection",
      "Fund manager / tracking error risk"
    ],
    regulatoryAuthority: "Securities and Exchange Board of India (SEBI)",
  },
  {
    id: "cat-equity",
    slug: "equity",
    name: "Direct Equities & IPOs",
    shortDescription: "Direct ownership of shares in publicly listed companies on the NSE and BSE.",
    beginnerDescription: "Buying equity shares makes you a partial owner of the business. You participate directly in the company's profit growth through price appreciation and dividend payouts, but carry direct business and market risk.",
    iconName: "LineChart",
    displayOrder: 4,
    status: "published",
    keyUseCases: [
      "High growth capital appreciation over 5+ year horizons",
      "Direct dividend cash flow generation",
      "Participating in newly listing enterprises (IPOs)"
    ],
    majorRisks: [
      "High price volatility and permanent loss of capital if the company fails",
      "Requires research, temperament, and emotional discipline",
      "Concentration risk if poorly diversified"
    ],
    regulatoryAuthority: "Securities and Exchange Board of India (SEBI)",
  },
  {
    id: "cat-debt-bonds",
    slug: "debt-bonds",
    name: "Fixed Income & Government Bonds",
    shortDescription: "Lending instruments issued by governments and corporations that pay periodic coupons and return principal at maturity.",
    beginnerDescription: "Fixed income securities where the investor acts as a lender. Central Government Bonds (G-Secs) and T-Bills carry sovereign safety, while Corporate Bonds yield higher returns depending on their credit rating.",
    iconName: "Receipt",
    displayOrder: 5,
    status: "published",
    keyUseCases: [
      "Sovereign-backed fixed regular cash flows",
      "Portfolio stabilization against equity volatility",
      "High credit-quality predictable yields for institutional & retail investors"
    ],
    majorRisks: [
      "Interest rate risk (bond prices fall when interest rates rise)",
      "Credit/Default risk on corporate bonds",
      "Secondary market liquidity constraints for retail bond lots"
    ],
    regulatoryAuthority: "Reserve Bank of India (RBI) / SEBI",
  },
  {
    id: "cat-gold",
    slug: "gold",
    name: "Gold & Precious Metals",
    shortDescription: "Monetary and commodity asset traditionally used in India as a store of value and inflation hedge.",
    beginnerDescription: "Available as physical gold (jewellery, coins), financial instruments (Gold ETFs, Gold Mutual Funds), and sovereign bonds (SGBs traded on secondary markets). Acts as a portfolio hedge during economic stress.",
    iconName: "Coins",
    displayOrder: 6,
    status: "published",
    keyUseCases: [
      "Inflation hedge and currency devaluation hedge",
      "Crisis/geopolitical hedge and asset diversifier",
      "Cultural and long-term family wealth preservation"
    ],
    majorRisks: [
      "No regular yield or cash flow (does not generate interest or dividends)",
      "Price volatility linked to global macroeconomic shifts and dollar strength",
      "Physical storage, making charges, and purity risks (for physical gold)"
    ],
    regulatoryAuthority: "SEBI / RBI / BIS (Bureau of Indian Standards)",
  },
  {
    id: "cat-real-assets",
    slug: "real-assets",
    name: "Real Estate, REITs & InvITs",
    shortDescription: "Exposure to commercial real estate, infrastructure assets, and residential property.",
    beginnerDescription: "Physical property requires large ticket sizes and carries high transaction friction. REITs (Real Estate Investment Trusts) and InvITs allow retail investors to buy fractional, liquid units in commercial office parks and infrastructure with regular dividend distributions.",
    iconName: "Home",
    displayOrder: 7,
    status: "published",
    keyUseCases: [
      "Regular rental income distribution (REITs mandate 90% NDCF payout)",
      "Inflation-linked physical asset appreciation",
      "Fractional diversification into institutional-grade infrastructure"
    ],
    majorRisks: [
      "Occupancy & tenant lease renewal risk (REITs)",
      "Interest rate sensitivity (real estate yields compete with bond rates)",
      "Extreme illiquidity and high registration costs for physical property"
    ],
    regulatoryAuthority: "SEBI (for REITs/InvITs) / RERA (for Physical Real Estate)",
  },
  {
    id: "cat-retirement",
    slug: "retirement",
    name: "Retirement & Pension Schemes",
    shortDescription: "Structured, long-tenure retirement accumulation vehicles regulated by statutory pension authorities.",
    beginnerDescription: "Dedicated retirement vehicles including National Pension System (NPS), EPF, and APY designed to build a retirement corpus during working years and provide annuity pensions post-retirement.",
    iconName: "Clock",
    displayOrder: 8,
    status: "published",
    keyUseCases: [
      "Discipline-enforced retirement corpus accumulation until age 60",
      "Additional tax deductions under Section 80CCD(1B) for NPS",
      "Guaranteed employer-subsidized retirement savings (EPF)"
    ],
    majorRisks: [
      "Strict lock-in until age 60 with limited conditional withdrawal triggers",
      "Mandatory annuity purchase (e.g. 40% of corpus at maturity in NPS)",
      "Market exposure risk in NPS active equity choices"
    ],
    regulatoryAuthority: "PFRDA / EPFO / Ministry of Labour & Employment",
  },
  {
    id: "cat-advanced",
    slug: "advanced",
    name: "Advanced & Alternative Investments (HNI)",
    shortDescription: "Specialized, high-ticket investment vehicles reserved for sophisticated investors.",
    beginnerDescription: "Includes Portfolio Management Services (PMS - min ₹50 Lakhs) and Alternative Investment Funds (AIFs - min ₹1 Crore) providing unconstrained strategies, private equity, and hedge fund mechanisms under strict SEBI oversight.",
    iconName: "Award",
    displayOrder: 9,
    status: "published",
    keyUseCases: [
      "Bespoke, concentrated equity portfolios for accredited HNIs",
      "Private equity, venture capital, and pre-IPO deal access (AIFs)",
      "Structured credit and unlisted debt strategies"
    ],
    majorRisks: [
      "Very high entry barrier and capital requirement",
      "High fee structures (management fees + profit performance carry)",
      "High concentration and illiquidity risk"
    ],
    regulatoryAuthority: "Securities and Exchange Board of India (SEBI)",
  },
];
