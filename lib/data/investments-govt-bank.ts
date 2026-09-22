import { Investment } from "../types";

export const GOVT_BANK_INVESTMENTS: Investment[] = [
  {
    id: "inv-ppf",
    slug: "public-provident-fund",
    name: "Public Provident Fund (PPF)",
    aliases: ["PPF", "Public Provident Fund Scheme", "PPF Account"],
    categoryId: "cat-govt-savings",
    subcategory: "Long-term Sovereign Savings",
    shortDescription: "A 15-year sovereign-backed savings scheme offering compounding tax-free returns and Section 80C tax deduction.",
    beginnerExplanation: "PPF is a government-backed savings account where you deposit money every year for 15 years. Your deposits earn guaranteed, tax-free compound interest, and the entire maturity amount is completely exempt from income tax. It is one of the safest ways for Indian individuals to build a long-term retirement or wealth corpus.",
    mechanismSteps: [
      "Open an account at any designated post office or authorized commercial bank branch or via online banking.",
      "Deposit between ₹500 and ₹1,50,000 per financial year in lump sums or monthly installments.",
      "Interest is compounded annually and calculated on the lowest balance between the close of the 5th day and the end of the month.",
      "The account matures after 15 full financial years from the end of the financial year in which the initial deposit was made.",
      "Upon maturity, you can withdraw the entire corpus tax-free or extend the account in 5-year blocks with or without fresh contributions."
    ],
    returnInfo: {
      returnType: "declared_rate",
      rateDisplay: "Declared quarterly by MoF",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are reviewed and notified quarterly by the Ministry of Finance, Government of India, benchmarked to secondary market government security yields.",
      benchmark: "Government Securities (G-Sec) Yields",
      sourceId: "src-mof-savings"
    },
    minimumAmount: 500,
    minimumAmountText: "₹500 per financial year",
    maximumAmount: 150000,
    maximumAmountText: "₹1,50,000 per financial year (combined limit across self and minor accounts)",
    riskLevel: "low",
    riskDescription: "Backed by the sovereign guarantee of the Government of India, carrying virtually zero credit or default risk.",
    keyRisks: [
      {
        name: "Inflation Risk",
        description: "Declared rates may lag high real inflation during periods of rapid macroeconomic price increases."
      },
      {
        name: "Liquidity / Lock-in Risk",
        description: "Capital is locked for 15 financial years, with only limited partial withdrawals and loan facilities available after specified durations."
      },
      {
        name: "Quarterly Rate Reset Risk",
        description: "Returns are not fixed for the entire 15 years; interest rates can fluctuate quarterly as declared by the Ministry of Finance."
      }
    ],
    liquidityLevel: "low",
    liquidityDescription: "Strict 15-year lock-in with restricted partial withdrawals starting from the 7th financial year and loan facilities available between the 3rd and 6th financial year.",
    withdrawalRules: [
      "Partial withdrawals permitted from the 7th financial year (up to 50% of the balance at the end of the 4th preceding year or end of preceding year, whichever is lower).",
      "Loan against PPF available from the 3rd financial year up to the 6th financial year (up to 25% of the balance at the end of the second preceding financial year).",
      "Premature closure allowed only after 5 full financial years under specific statutory conditions (life-threatening medical treatment, higher education, or change in residency status) with a 1% interest deduction penalty.",
      "Full withdrawal available upon completion of 15 financial years without any penalty."
    ],
    lockInPeriod: "15 Financial Years",
    suggestedHorizon: "15+ Years (Long-term)",
    volatilityDescription: "Zero price volatility. Value steadily accrues via annual compounding of government-notified interest.",
    eligibility: "Resident Indian individuals (self or on behalf of a minor). Only one PPF account is permitted per individual. NRIs and HUFs cannot open new accounts.",
    eligibleEntities: ["Resident Individuals", "Minors (via Natural/Legal Guardian)"],
    regulation: "Government Savings Promotion Act, 1873 / Public Provident Fund Scheme, 2019",
    administeringAuthority: "Ministry of Finance, Government of India (operated via Department of Posts and Authorized Banks)",
    taxationSummary: "Exempt-Exempt-Exempt (EEE) status: Contribution qualifies for deduction under Section 80C, annual interest is tax-exempt, and maturity proceeds are fully tax-free.",
    taxDetails: {
      investmentStage: "Eligible for deduction up to ₹1,50,000 per financial year under Section 80C (Old Tax Regime only).",
      growthStage: "Annual accrued interest is completely exempt from income tax under Section 10(11).",
      withdrawalStage: "Maturity and partial withdrawal proceeds are 100% tax-free under Section 10(11).",
      sectionApplicability: "Section 80C, Section 10(11) of the Income-tax Act, 1961"
    },
    advantages: [
      "Sovereign safety: Backed by the Government of India with absolute capital protection.",
      "Triple Tax Exemption (EEE): Tax deduction on deposit, tax-free annual growth, and tax-free maturity proceeds.",
      "Immunity from court attachment: Balance cannot be attached by any court decree in respect of any debt or liability.",
      "Flexible tenure extension: Can be extended indefinitely in 5-year blocks post 15-year maturity with or without contributions.",
      "Loan and partial withdrawal facilities available to meet intermediate liquidity requirements."
    ],
    limitations: [
      "Strict 15-year lock-in period makes funds inaccessible for immediate emergency use.",
      "Annual deposit cap of ₹1.5 Lakh restricts wealth accumulation for high-income earners.",
      "Quarterly interest reset means yield is not locked in and may reduce in falling interest rate cycles.",
      "Non-Resident Indians (NRIs) and HUFs are ineligible to open new PPF accounts."
    ],
    practicalExample: {
      title: "Illustrative 15-Year Systematic PPF Compounding",
      scenario: "An individual deposits ₹1,50,000 every April at the start of each financial year for 15 consecutive years.",
      amountInvested: "₹22,50,000 total (₹1,50,000 annually for 15 years)",
      horizon: "15 Financial Years",
      outcomeExplanation: "Assuming hypothetical declared interest rates remain consistent, the compounded interest accumulates tax-free each year. At the end of 15 years, the investor receives their entire principal plus accrued compound interest completely free of income tax.",
      disclaimer: "Illustration purposes only. Actual returns depend on quarterly interest rates declared by the Government of India over the 15-year holding period."
    },
    accessMethods: [
      "Net Banking / Mobile Banking of authorized public and private banks (e.g., SBI, HDFC, ICICI, PNB)",
      "India Post offices nationwide via physical application or POSB portal",
      "Authorized bank branches nationwide"
    ],
    commonMistakes: [
      "Depositing after the 5th of the month, which forfeits that month's interest calculation.",
      "Exceeding the ₹1.5 Lakh annual ceiling across self and minor accounts (excess amount earns 0% interest and is refunded without tax benefit).",
      "Opening more than one PPF account in one's name, which violates scheme rules and leads to account de-activation.",
      "Failing to deposit the minimum ₹500 annually, causing the account to become inactive/discontinued."
    ],
    faqs: [
      {
        question: "Can I open a PPF account online?",
        answer: "Yes, most major commercial banks (such as SBI, HDFC, ICICI, Axis) allow existing KYC-verified customers to open and operate a PPF account seamlessly via net banking or mobile apps."
      },
      {
        question: "What happens if I forget to deposit the minimum ₹500 in a financial year?",
        answer: "The account becomes inactive. It can be revived by paying a default fee of ₹50 for each lapsed year along with the minimum subscription of ₹500 for each year of default."
      },
      {
        question: "Can NRIs invest in PPF?",
        answer: "NRIs cannot open a new PPF account. However, if a resident Indian becomes an NRI after opening an account, they can continue contributing on a non-repatriation basis until the original 15-year maturity."
      },
      {
        question: "Can I extend my PPF account after 15 years?",
        answer: "Yes, you can extend the account in 5-year blocks indefinitely. You can choose to extend with fresh contributions (by submitting Form 4 within 1 year of maturity) or without contributions while continuing to earn interest."
      }
    ],
    relatedInvestmentSlugs: [
      "national-savings-certificate",
      "sukanya-samriddhi-yojana",
      "senior-citizen-savings-scheme",
      "fixed-deposit"
    ],
    sourceIds: ["src-mof-savings", "src-indiapost-schemes", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-nsc",
    slug: "national-savings-certificate",
    name: "National Savings Certificate (NSC)",
    aliases: ["NSC", "NSC VIII Issue", "National Savings Certificate Scheme"],
    categoryId: "cat-govt-savings",
    subcategory: "Medium-term Sovereign Savings",
    shortDescription: "A 5-year sovereign savings certificate offering guaranteed compound interest and Section 80C tax deduction with deemed reinvestment.",
    beginnerExplanation: "NSC is a 5-year fixed savings bond offered by the Government of India through post offices and authorized banks. You invest a lump sum upfront, and the interest accumulates and is paid out together with your principal when the 5-year term ends. It provides tax savings under Section 80C on both initial investment and intermediate accrued interest.",
    mechanismSteps: [
      "Purchase certificates in electronic or passbook mode through any post office or participating bank.",
      "Invest a lump sum amount starting from ₹1,000 (in multiples of ₹100) with no maximum ceiling.",
      "The interest rate applicable on the date of purchase is locked in for the entire 5-year maturity period.",
      "Interest compounds annually and is deemed reinvested for the first 4 years, qualifying for Section 80C deduction.",
      "At the end of 5 years, the certificate matures, and the principal plus total accumulated interest is paid out."
    ],
    returnInfo: {
      returnType: "declared_rate",
      rateDisplay: "Declared quarterly by MoF",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are declared quarterly by the Ministry of Finance. Once purchased, the declared rate at the time of deposit remains fixed for the entire 5-year tenure.",
      benchmark: "Government Securities (G-Sec) Yields",
      sourceId: "src-mof-savings"
    },
    minimumAmount: 1000,
    minimumAmountText: "₹1,000 (and in multiples of ₹100 thereafter)",
    maximumAmount: null,
    maximumAmountText: "No upper limit",
    riskLevel: "low",
    riskDescription: "Backed by the sovereign guarantee of the Government of India, making default risk negligible.",
    keyRisks: [
      {
        name: "Illiquidity Risk",
        description: "Premature withdrawal is strictly prohibited except under specific statutory contingencies such as court order or death of holder."
      },
      {
        name: "Inflation Risk",
        description: "Fixed returns over 5 years may not fully protect purchasing power during high inflationary periods."
      },
      {
        name: "Final Year Tax Drag",
        description: "Accrued interest in the 5th (maturity) year cannot be reinvested and is fully taxable at your marginal slab rate."
      }
    ],
    liquidityLevel: "very_low",
    liquidityDescription: "Strict 5-year lock-in period with no premature encashment except in court-ordered forfeiture or demise of the certificate holder.",
    withdrawalRules: [
      "Premature encashment is generally not allowed before the 5-year maturity.",
      "Premature encashment permitted only upon death of the single holder/all holders in joint account, forfeiture by a pledgee, or when ordered by a court of law.",
      "Certificates can be pledged as collateral security to banks and financial institutions to obtain loans without encashment."
    ],
    lockInPeriod: "5 Years",
    suggestedHorizon: "5 Years",
    volatilityDescription: "Zero volatility. Interest is locked at purchase and accumulates steadily until maturity.",
    eligibility: "Resident Indian individual adults, joint accounts (up to 3 adults), or guardians on behalf of minors. NRIs, HUFs, companies, and trusts are not eligible.",
    eligibleEntities: ["Resident Individuals", "Joint Accounts (up to 3)", "Minors (via Guardian)"],
    regulation: "Government Savings Promotion Act, 1873 / National Savings Certificates (VIII Issue) Scheme, 2019",
    administeringAuthority: "Ministry of Finance, Government of India (operated via Department of Posts and Authorized Banks)",
    taxationSummary: "Qualifies for Section 80C deduction on investment; interest accrued annually is deemed reinvested (eligible for 80C in years 1-4); 5th year interest is fully taxable.",
    taxDetails: {
      investmentStage: "Initial investment qualifies for tax deduction under Section 80C (up to ₹1,50,000 under Old Tax Regime).",
      growthStage: "Annual interest is taxable as Income from Other Sources, but deemed reinvested for years 1 to 4, qualifying for Section 80C deduction in those years.",
      withdrawalStage: "Maturity payout is not subject to TDS. However, interest accrued in the 5th year is added to taxable income and taxed at marginal slab.",
      sectionApplicability: "Section 80C and Section 56 of the Income-tax Act, 1961"
    },
    advantages: [
      "Sovereign safety with guaranteed fixed return locked in on purchase date.",
      "No maximum investment cap, allowing substantial deployment in sovereign instruments.",
      "Unique tax benefit: Deemed reinvestment of interest qualifies for Section 80C deduction in years 1 through 4.",
      "Collateral utility: Easily pledged to commercial banks to secure secured credit.",
      "No Tax Deducted at Source (TDS) at the time of maturity payout."
    ],
    limitations: [
      "Absolute 5-year lock-in with practically no premature exit options for standard personal emergencies.",
      "Fifth-year interest is fully taxable without reinvestment benefit, creating a tax liability upon maturity.",
      "Ineligible for NRIs and Hindu Undivided Families (HUFs).",
      "Lacks periodic cash flow payout (cumulative growth only)."
    ],
    practicalExample: {
      title: "5-Year Lump-Sum NSC Accumulation",
      scenario: "A salaried individual invests ₹1,00,000 in NSC at the prevailing declared rate to claim Section 80C tax deduction.",
      amountInvested: "₹1,00,000 lump sum",
      horizon: "5 Years",
      outcomeExplanation: "The interest compounds annually at the rate fixed at purchase. The individual claims 80C deduction on the ₹1,00,000 in year 1 and on the accrued reinvested interest in years 2, 3, and 4. At the end of year 5, the full principal and compounded sum are paid out.",
      disclaimer: "Illustration purposes only. Actual maturity value depends on the notified rate locked in on the date of certificate purchase."
    },
    accessMethods: [
      "India Post Office branches across the country",
      "Designated public and private sector bank branches",
      "DoP Internet Banking for registered post office savings account holders"
    ],
    commonMistakes: [
      "Failing to declare annual accrued interest in income tax returns under Income from Other Sources.",
      "Missing the Section 80C reinvestment deduction claim for accrued interest during years 1 through 4.",
      "Assuming NSC can be prematurely closed anytime like a bank fixed deposit.",
      "Not knowing that the locked-in rate applies for the whole 5-year duration regardless of subsequent quarterly rate drops or hikes."
    ],
    faqs: [
      {
        question: "Is the interest rate on NSC fixed for the entire 5 years?",
        answer: "Yes. While the Ministry of Finance reviews rates quarterly for new issuances, the rate applicable on the day you purchase an NSC remains fixed and locked in for your entire 5-year term."
      },
      {
        question: "Is TDS deducted on NSC maturity proceeds?",
        answer: "No, there is no TDS deducted by the Post Office on maturity. However, the investor must report the interest income in their tax return and pay tax at their marginal slab rate."
      },
      {
        question: "Can I use NSC as collateral for a bank loan?",
        answer: "Yes, NSC certificates can be officially pledged to banks, housing finance companies, or government authorities as security for loans."
      },
      {
        question: "Can joint accounts be opened in NSC?",
        answer: "Yes, joint accounts can be opened by up to three adults either as Joint A (payable to all joint holders or survivors) or Joint B (payable to either survivor)."
      }
    ],
    relatedInvestmentSlugs: [
      "public-provident-fund",
      "kisan-vikas-patra",
      "post-office-time-deposit",
      "fixed-deposit"
    ],
    sourceIds: ["src-mof-savings", "src-indiapost-schemes", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-kvp",
    slug: "kisan-vikas-patra",
    name: "Kisan Vikas Patra (KVP)",
    aliases: ["KVP", "Kisan Vikas Patra Scheme", "KVP Certificate"],
    categoryId: "cat-govt-savings",
    subcategory: "Medium to Long-term Sovereign Savings",
    shortDescription: "A sovereign savings scheme designed to double your invested lump sum over a pre-notified maturity period.",
    beginnerExplanation: "Kisan Vikas Patra is a government-backed savings certificate that doubles your initial investment over a fixed tenure determined by the prevailing interest rate. It provides complete capital safety with a guaranteed doubling outcome at maturity. It is open to all Indian adults and offers liquidity after an initial 2.5-year holding period.",
    mechanismSteps: [
      "Purchase KVP certificates via any India Post office or designated commercial bank branch.",
      "Invest a lump sum starting from ₹1,000 (in multiples of ₹100) with no maximum ceiling.",
      "The Ministry of Finance fixes the interest rate and the exact doubling tenure (in months) on the purchase date.",
      "Interest compounds annually, steadily growing the deposit towards the target doubling amount.",
      "At maturity (when the notified tenure completes), the depositor receives exactly double the principal investment."
    ],
    returnInfo: {
      returnType: "declared_rate",
      rateDisplay: "Declared quarterly by MoF",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates and the specific doubling tenure (in months) are notified quarterly by the Ministry of Finance. Once issued, the doubling tenure remains locked for that certificate.",
      benchmark: "Government Securities (G-Sec) Yields",
      sourceId: "src-mof-savings"
    },
    minimumAmount: 1000,
    minimumAmountText: "₹1,000 (and in multiples of ₹100 thereafter)",
    maximumAmount: null,
    maximumAmountText: "No upper limit",
    riskLevel: "low",
    riskDescription: "Fully backed by the Government of India sovereign guarantee, carrying zero credit or default risk.",
    keyRisks: [
      {
        name: "Tax Inefficiency",
        description: "Unlike PPF or NSC, KVP does not offer Section 80C deduction, and all accrued interest is taxable at the investor's marginal slab rate."
      },
      {
        name: "Lock-in Period",
        description: "Premature withdrawal is barred during the initial 2.5-year lock-in period, limiting immediate liquidity."
      },
      {
        name: "Inflation Drag",
        description: "The fixed doubling timeline over long tenures may yield real returns below inflation in high-inflation environments."
      }
    ],
    liquidityLevel: "low",
    liquidityDescription: "Mandatory lock-in of 2 years and 6 months (30 months). Premature encashment is permitted anytime after 2.5 years in predefined 6-month intervals.",
    withdrawalRules: [
      "No premature encashment is permitted within the first 2 years and 6 months (except on death of holder or court order).",
      "Partial premature encashment allowed after 2.5 years at pre-specified redemption values table published by the government.",
      "Can be pledged to financial institutions as loan collateral to access liquidity without encashing.",
      "Full doubling payout made on completion of the notified maturity period."
    ],
    lockInPeriod: "2.5 Years (30 Months)",
    suggestedHorizon: "Full maturity tenure (typically ~9 to 10 years depending on notified rate)",
    volatilityDescription: "Zero price volatility. Guaranteed capital doubling based on notified government schedule.",
    eligibility: "Resident Indian individuals (single adult or joint account up to 3 adults) or a guardian on behalf of a minor or person of unsound mind. NRIs and HUFs are not eligible.",
    eligibleEntities: ["Resident Individuals", "Joint Accounts (up to 3 adults)", "Minors (via Guardian)"],
    regulation: "Government Savings Promotion Act, 1873 / Kisan Vikas Patra Scheme, 2019",
    administeringAuthority: "Ministry of Finance, Government of India (operated via Department of Posts and Authorized Banks)",
    taxationSummary: "Fully taxable: No deduction under Section 80C at entry. Interest is taxable annually on an accrual basis or at maturity at marginal slab rates; no TDS at payout.",
    taxDetails: {
      investmentStage: "No tax deduction available under Section 80C or any other section upon investment.",
      growthStage: "Interest accrued annually is taxable as Income from Other Sources as per the investor's applicable slab rate.",
      withdrawalStage: "No Tax Deducted at Source (TDS) at maturity; however, total taxable interest must be reconciled in the annual tax return.",
      sectionApplicability: "Section 56 of the Income-tax Act, 1961"
    },
    advantages: [
      "Sovereign safety: Complete capital and return guarantee backed by the Government of India.",
      "Simple, transparent doubling proposition with no complex market variables.",
      "No maximum investment cap, allowing unlimited sovereign deposit allocation.",
      "Exit flexibility after 2.5 years compared to 5-year or 15-year locked schemes.",
      "Can be pledged as collateral to secure bank credit."
    ],
    limitations: [
      "No tax deduction under Section 80C at the time of investment.",
      "Interest is fully taxable at your income tax slab, making post-tax yields lower for higher tax brackets.",
      "Mandatory 30-month initial lock-in period with zero liquidity during this initial window.",
      "Non-Resident Indians (NRIs) and HUFs are ineligible to invest."
    ],
    practicalExample: {
      title: "Doubling Capital with Sovereign Safety",
      scenario: "A conservative saver invests ₹2,00,000 in KVP seeking guaranteed wealth doubling for a family milestone.",
      amountInvested: "₹2,00,000 lump sum",
      horizon: "Notified doubling tenure (e.g. ~115 months as per notification at purchase)",
      outcomeExplanation: "The deposit grows through annual compounding. At the end of the notified tenure, the depositor receives exactly ₹4,00,000 (double the principal). The interest earned is reported as income in tax returns.",
      disclaimer: "Illustration purposes only. The exact number of months required to double your investment is fixed by the Ministry of Finance on the date of purchase."
    },
    accessMethods: [
      "Post office branches across India",
      "Designated public and private commercial bank branches",
      "India Post Internet Banking portal"
    ],
    commonMistakes: [
      "Assuming KVP provides Section 80C tax deduction benefits like NSC or PPF.",
      "Failing to declare accrued interest each year in income tax returns, leading to a large tax liability upon maturity.",
      "Attempting to withdraw funds before the mandatory 2.5-year lock-in period has elapsed.",
      "Assuming the name 'Kisan' restricts the scheme to farmers (it is open to all resident Indian citizens)."
    ],
    faqs: [
      {
        question: "Is Kisan Vikas Patra only for farmers?",
        answer: "No. Despite its name, KVP is open to all resident Indian individual citizens across rural and urban locations."
      },
      {
        question: "Does KVP qualify for tax deduction under Section 80C?",
        answer: "No. Investments in KVP do not qualify for tax deductions under Section 80C, and all interest earned is fully taxable."
      },
      {
        question: "When can I encash my KVP before maturity?",
        answer: "You can prematurely encash KVP after a minimum holding period of 2 years and 6 months (30 months) from the date of deposit."
      },
      {
        question: "Can KVP be transferred from one post office to another?",
        answer: "Yes, KVP accounts and certificates can be transferred from one post office/bank branch to another anywhere in India upon written application."
      }
    ],
    relatedInvestmentSlugs: [
      "national-savings-certificate",
      "post-office-time-deposit",
      "fixed-deposit",
      "public-provident-fund"
    ],
    sourceIds: ["src-mof-savings", "src-indiapost-schemes", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-ssy",
    slug: "sukanya-samriddhi-yojana",
    name: "Sukanya Samriddhi Yojana (SSY)",
    aliases: ["SSY", "Sukanya Samriddhi Account", "Beti Bachao Beti Padhao Scheme"],
    categoryId: "cat-govt-savings",
    subcategory: "Goal-based Sovereign Savings",
    shortDescription: "A dedicated government small savings scheme for the girl child offering high sovereign returns and EEE tax-exempt status.",
    beginnerExplanation: "Sukanya Samriddhi Yojana is a government-backed savings scheme created to help parents build a dedicated education and marriage fund for their daughter. An account can be opened for any girl child below the age of 10 and accepts deposits for 15 years. It offers one of the highest interest rates among government savings schemes, along with complete tax exemption on deposits, interest, and maturity.",
    mechanismSteps: [
      "Open an SSY account at a post office or authorized commercial bank in the name of a girl child below 10 years of age.",
      "Deposit between ₹250 and ₹1,50,000 per financial year for a period of 15 years from the date of account opening.",
      "Interest is compounded annually and calculated on the lowest balance between the 5th day and the end of the month.",
      "Partial withdrawal of up to 50% of the balance is permitted after the girl reaches age 18 for higher education.",
      "The account matures after 21 years from opening or upon the girl's marriage after age 18, paying the entire tax-free corpus to the girl."
    ],
    returnInfo: {
      returnType: "declared_rate",
      rateDisplay: "Declared quarterly by MoF",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are notified quarterly by the Ministry of Finance and typically carry a premium spread over general small savings rates.",
      benchmark: "Government Securities (G-Sec) Yields + Policy Spread",
      sourceId: "src-mof-savings"
    },
    minimumAmount: 250,
    minimumAmountText: "₹250 per financial year",
    maximumAmount: 150000,
    maximumAmountText: "₹1,50,000 per financial year per account",
    riskLevel: "low",
    riskDescription: "Sovereign safety backed by the Government of India with guaranteed capital protection.",
    keyRisks: [
      {
        name: "Strict Demographic Eligibility",
        description: "Restricted strictly to girl children below the age of 10, with a cap of two daughters per family (with exception for twins/triplets)."
      },
      {
        name: "Extended Illiquidity",
        description: "Long lock-in of up to 21 years with limited early access only after the girl turns 18 for marriage or higher education."
      },
      {
        name: "Quarterly Rate Reset",
        description: "Interest rate is not fixed for the 21-year tenure and fluctuates as notified quarterly by the government."
      }
    ],
    liquidityLevel: "very_low",
    liquidityDescription: "Locked until 21 years from account opening, with partial withdrawal (up to 50%) allowed after age 18 for documented higher education expenses.",
    withdrawalRules: [
      "Up to 50% of the balance at the end of preceding financial year can be withdrawn for higher education after the girl reaches age 18 or passes 10th standard.",
      "Account can be closed prematurely on the marriage of the girl child after attaining age 18 (application must be made 1 month before to 3 months after marriage).",
      "Premature closure allowed on compassionate grounds after 5 years (death of girl child or life-threatening medical conditions).",
      "Full closure and maturity payout made upon completion of 21 years from the date of account opening."
    ],
    lockInPeriod: "21 Years from opening (or until marriage after age 18)",
    suggestedHorizon: "15 to 21 Years",
    volatilityDescription: "Zero price volatility. Account accrues guaranteed compounding interest declared quarterly by the government.",
    eligibility: "Parent or legal guardian of a resident Indian girl child who has not attained 10 years of age. Maximum of two accounts per family (three allowed in case of twin/triplet girl births).",
    eligibleEntities: ["Natural or Legal Guardian on behalf of Girl Child (<10 years)"],
    regulation: "Government Savings Promotion Act, 1873 / Sukanya Samriddhi Account Scheme, 2019",
    administeringAuthority: "Ministry of Finance, Government of India (operated via Department of Posts and Authorized Banks)",
    taxationSummary: "Complete Exempt-Exempt-Exempt (EEE) status: Tax deduction under Section 80C on deposits, tax-free annual accrued interest, and tax-free maturity/withdrawal.",
    taxDetails: {
      investmentStage: "Deposits eligible for tax deduction up to ₹1,50,000 under Section 80C (Old Tax Regime).",
      growthStage: "Annual interest earned is 100% exempt from income tax under Section 10(11A).",
      withdrawalStage: "Maturity proceeds and partial withdrawals are completely tax-free under Section 10(11A).",
      sectionApplicability: "Section 80C and Section 10(11A) of the Income-tax Act, 1961"
    },
    advantages: [
      "Top-tier sovereign return: Historically commands one of the highest interest rates among government small savings schemes.",
      "Triple Tax Exemption (EEE): Zero tax on investment, zero tax on interest, and zero tax on withdrawal.",
      "Low entry barrier: Minimum annual deposit requirement of just ₹250.",
      "Dedicated goal protection: Long lock-in prevents premature leakage of daughter's educational or marriage funds.",
      "Maturity proceeds are legally paid directly to the girl child, fostering financial empowerment."
    ],
    limitations: [
      "Strict eligibility: Available exclusively for girl children below 10 years of age.",
      "Account limit: Maximum of two accounts per family (except in cases of documented twin/triplet births).",
      "High illiquidity: Funds are locked for up to 21 years with limited early access.",
      "Annual deposit limit of ₹1,50,000 limits overall corpus accumulation for affluent families."
    ],
    practicalExample: {
      title: "Building a Higher Education Corpus for a Daughter",
      scenario: "A parent opens an SSY account for their 1-year-old daughter and deposits ₹1,50,000 annually for 15 years.",
      amountInvested: "₹22,50,000 total (₹1,50,000 per year for 15 years)",
      horizon: "21 Years",
      outcomeExplanation: "Deposits earn compounding quarterly-declared sovereign interest for the full 21 years (even during years 16-21 when no fresh deposits are required). When the daughter turns 22 (21 years after opening), the substantial accumulated corpus is paid out completely tax-free.",
      disclaimer: "Illustration purposes only. Actual corpus depends on quarterly interest rates declared by the Government of India over the 21-year period."
    },
    accessMethods: [
      "Authorized commercial bank branches (SBI, PNB, BoB, HDFC, ICICI, Axis, etc.)",
      "Post office branches across India",
      "Online transfer / Standing instructions via net banking for linked bank accounts"
    ],
    commonMistakes: [
      "Missing the minimum annual deposit of ₹250, resulting in account deactivation and a ₹50 annual penalty.",
      "Depositing after the 5th of the month, which excludes that month's deposit from that month's interest accrual.",
      "Attempting to open more than one account for the same girl child (which is illegal and earns 0% interest).",
      "Assuming deposits must be made for all 21 years (deposits are only required for the first 15 years; the account continues earning interest until year 21)."
    ],
    faqs: [
      {
        question: "Can I open an SSY account for my 11-year-old daughter?",
        answer: "No. The girl child must be under 10 years of age on the date of account opening."
      },
      {
        question: "How many years do I need to deposit money into an SSY account?",
        answer: "Deposits are required for 15 years from the date of account opening. The account matures after 21 years, continuing to earn interest in years 16 to 21 without requiring new deposits."
      },
      {
        question: "Can an SSY account be transferred if we relocate to another city?",
        answer: "Yes. The account can be transferred anywhere in India from one post office or bank branch to another free of cost upon providing proof of address change."
      },
      {
        question: "Who receives the payout when the SSY account matures?",
        answer: "The maturity amount is paid directly to the girl child (the account holder) once she reaches 18 years of age and submits the maturity claim documents."
      }
    ],
    relatedInvestmentSlugs: [
      "public-provident-fund",
      "national-savings-certificate",
      "senior-citizen-savings-scheme",
      "fixed-deposit"
    ],
    sourceIds: ["src-mof-savings", "src-indiapost-schemes", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-scss",
    slug: "senior-citizen-savings-scheme",
    name: "Senior Citizen Savings Scheme (SCSS)",
    aliases: ["SCSS", "Senior Citizen Savings Scheme Account", "Senior Citizens Scheme"],
    categoryId: "cat-govt-savings",
    subcategory: "Regular Income Sovereign Savings",
    shortDescription: "A government-backed quarterly income scheme for senior citizens aged 60+ offering sovereign safety and Section 80C tax deduction.",
    beginnerExplanation: "SCSS is a premier government savings scheme designed specifically to provide reliable regular income to retired senior citizens aged 60 and above. You deposit a lump sum for 5 years, and interest is credited directly to your bank account every quarter. It offers attractive sovereign-backed interest rates along with tax-saving benefits at the time of investment.",
    mechanismSteps: [
      "Open an SCSS account at any authorized bank or post office upon reaching age 60 (or age 55 for eligible retirees).",
      "Invest a lump sum between ₹1,000 and ₹30,00,000 in multiples of ₹1,000.",
      "The interest rate declared at the time of opening remains fixed for the entire 5-year tenure.",
      "Interest payouts are credited quarterly on the first working day of April, July, October, and January.",
      "The account matures after 5 years, with the option to extend in 3-year blocks indefinitely upon application."
    ],
    returnInfo: {
      returnType: "declared_rate",
      rateDisplay: "Declared quarterly by MoF",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are declared quarterly by the Ministry of Finance. Once an SCSS account is opened, the rate remains fixed and guaranteed for the entire 5-year tenure.",
      benchmark: "Government Securities (G-Sec) Yields + Senior Citizen Spread",
      sourceId: "src-mof-savings"
    },
    minimumAmount: 1000,
    minimumAmountText: "₹1,000 (and in multiples of ₹1,000 thereafter)",
    maximumAmount: 3000000,
    maximumAmountText: "₹30,00,000 per individual (₹60,00,000 for couples holding separate individual accounts)",
    riskLevel: "low",
    riskDescription: "Backed by the sovereign guarantee of the Government of India, carrying zero credit or default risk.",
    keyRisks: [
      {
        name: "Tax Drag on Payouts",
        description: "Quarterly interest is fully taxable at the senior citizen's income tax slab, with TDS applicable above ₹50,000 annual interest (under Section 194A / Section 80TTB)."
      },
      {
        name: "Premature Exit Penalty",
        description: "Closing before maturity incurs a penalty of 1% to 1.5% deducted from the principal deposit."
      },
      {
        name: "Reinvestment Risk",
        description: "Upon 5-year maturity, extensions or new accounts will be subject to prevailing government rates at that time."
      }
    ],
    liquidityLevel: "moderate",
    liquidityDescription: "5-year tenure with quarterly liquidity payouts. Premature closure permitted after 1 year with a 1.5% penalty, and after 2 years with a 1.0% penalty.",
    withdrawalRules: [
      "Quarterly interest payouts are automatically disbursed into the linked savings account.",
      "Premature closure allowed anytime after account opening, subject to penalties: If closed before 1 year, interest paid is deducted; between 1 and 2 years, 1.5% penalty on principal; between 2 and 5 years, 1% penalty on principal.",
      "Account can be extended for 3 years after 5-year maturity by applying within 1 year of maturity.",
      "Full principal refund upon maturity without penalty."
    ],
    lockInPeriod: "5 Years (extendable by 3 years)",
    suggestedHorizon: "5 to 8 Years",
    volatilityDescription: "Zero price volatility. Fixed quarterly cash flows backed by the sovereign.",
    eligibility: "Resident Indian individuals aged 60 years or above. Also eligible: Retired civilian employees aged 55-60 (investing retirement benefits within 1 month of receipt) and retired defence personnel aged 50+.",
    eligibleEntities: [
      "Senior Citizens (60+ years)",
      "Retired Civilian Employees (55-60 years)",
      "Retired Defence Personnel (50+ years)"
    ],
    regulation: "Government Savings Promotion Act, 1873 / Senior Citizens' Savings Scheme, 2019 (amended 2023)",
    administeringAuthority: "Ministry of Finance, Government of India (operated via Department of Posts and Authorized Banks)",
    taxationSummary: "Investment qualifies for Section 80C deduction up to ₹1.5 Lakh. Quarterly interest is taxable at marginal slab rates, subject to ₹50,000 deduction under Section 80TTB.",
    taxDetails: {
      investmentStage: "Eligible for deduction up to ₹1,50,000 under Section 80C (Old Tax Regime only).",
      growthStage: "Quarterly interest is credited and taxed as Income from Other Sources at the investor's slab rate.",
      withdrawalStage: "Principal repayment at maturity is completely tax-free. Senior citizens can claim up to ₹50,000 interest deduction under Section 80TTB.",
      sectionApplicability: "Section 80C, Section 80TTB, Section 194A of the Income-tax Act, 1961"
    },
    advantages: [
      "Sovereign safety: Complete capital security backed by the Government of India.",
      "High regular yield: Highest declared interest rate among sovereign fixed-income products for retirees.",
      "Predictable quarterly cash flow: Automated quarterly payouts assist regular retirement budgeting.",
      "Tax deduction: Up to ₹1.5 Lakh deduction under Section 80C at investment.",
      "High investment cap: Allows up to ₹30 Lakh per senior citizen (₹60 Lakh for retired couples)."
    ],
    limitations: [
      "Strict age restriction (primarily 60+ years with narrow exceptions for early retirees).",
      "Quarterly interest is fully taxable, attracting TDS if annual interest exceeds ₹50,000.",
      "Penalties apply on premature closure before completion of 5 years.",
      "Ineligible for NRIs and HUFs."
    ],
    practicalExample: {
      title: "Quarterly Retirement Income Generation",
      scenario: "A 62-year-old retiree invests ₹30,00,000 of their retirement corpus into SCSS to secure steady quarterly cash flow.",
      amountInvested: "₹30,00,000 lump sum",
      horizon: "5 Years",
      outcomeExplanation: "The senior citizen receives guaranteed quarterly interest credits every three months directly into their bank account for 5 years. At maturity, the entire ₹30,00,000 principal is refunded in full or extended for 3 years.",
      disclaimer: "Illustration purposes only. Actual quarterly payout depends on the locked-in declared interest rate on the date of account opening."
    },
    accessMethods: [
      "Major public and private sector banks (SBI, PNB, BoB, Canara, HDFC, ICICI, etc.)",
      "Post office branches throughout India",
      "Net banking portals of authorized scheduled banks"
    ],
    commonMistakes: [
      "Failing to submit Form 15H annually if total taxable income is below the taxable threshold, resulting in avoidable TDS deductions.",
      "Not utilizing the ₹50,000 interest deduction available to senior citizens under Section 80TTB.",
      "Early retirees investing retirement funds after more than 1 month from receiving benefits, making them ineligible before age 60.",
      "Assuming interest compounds inside the account (SCSS does not compound; interest must be paid out quarterly)."
    ],
    faqs: [
      {
        question: "Can a husband and wife both open separate SCSS accounts?",
        answer: "Yes, if both spouses are senior citizens (60+ years), each can open an individual account depositing up to ₹30 Lakhs, enabling a combined investment of up to ₹60 Lakhs."
      },
      {
        question: "Is TDS deducted on SCSS interest payments?",
        answer: "Yes, TDS is deducted under Section 194A if total interest paid to a senior citizen exceeds ₹50,000 in a financial year. Seniors can submit Form 15H to avoid TDS if their total tax liability is nil."
      },
      {
        question: "Can an SCSS account be extended after 5 years?",
        answer: "Yes, the account can be extended for an additional block of 3 years by submitting an application within 1 year of maturity. Under updated rules, multiple 3-year extensions are permitted."
      },
      {
        question: "Can I withdraw money from SCSS before 5 years?",
        answer: "Yes, premature closure is permitted anytime after opening. If closed between 1 and 2 years, a 1.5% penalty on principal is deducted; between 2 and 5 years, a 1% penalty applies."
      }
    ],
    relatedInvestmentSlugs: [
      "post-office-monthly-income-scheme",
      "fixed-deposit",
      "public-provident-fund",
      "national-savings-certificate"
    ],
    sourceIds: ["src-mof-savings", "src-indiapost-schemes", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-potd",
    slug: "post-office-time-deposit",
    name: "Post Office Time Deposit (POTD)",
    aliases: ["POTD", "National Savings Time Deposit", "Post Office Fixed Deposit", "TD Account"],
    categoryId: "cat-govt-savings",
    subcategory: "Term Sovereign Savings",
    shortDescription: "A government-guaranteed term deposit scheme offered for 1, 2, 3, and 5-year tenures, with the 5-year option eligible for Section 80C tax deduction.",
    beginnerExplanation: "Post Office Time Deposit is the government postal equivalent of a bank fixed deposit. You deposit a lump sum for a chosen tenure of 1, 2, 3, or 5 years and receive guaranteed annual interest payouts. The 5-year tenure provides tax-saving benefits under Section 80C with 100% sovereign safety.",
    mechanismSteps: [
      "Open a Time Deposit account at any post office or via Department of Posts online banking.",
      "Choose a deposit tenure: 1 year, 2 years, 3 years, or 5 years.",
      "Deposit a lump sum starting from ₹1,000 (in multiples of ₹100) with no upper ceiling.",
      "Interest is calculated on a quarterly compounding basis but paid out annually to your savings account.",
      "At the end of the chosen tenure, the principal matures and can be withdrawn or renewed for another term."
    ],
    returnInfo: {
      returnType: "declared_rate",
      rateDisplay: "Declared quarterly by MoF",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are notified quarterly by the Ministry of Finance across 1, 2, 3, and 5-year tenures. The rate applicable on the date of deposit remains locked for that tenure.",
      benchmark: "Government Securities (G-Sec) Yields",
      sourceId: "src-mof-savings"
    },
    minimumAmount: 1000,
    minimumAmountText: "₹1,000 (and in multiples of ₹100 thereafter)",
    maximumAmount: null,
    maximumAmountText: "No upper limit",
    riskLevel: "low",
    riskDescription: "Backed by the sovereign guarantee of the Government of India with zero credit or default risk.",
    keyRisks: [
      {
        name: "Tax Drag",
        description: "Annual interest is fully taxable at the investor's marginal slab rate, without any special capital gains treatment."
      },
      {
        name: "Premature Closure Penalty",
        description: "Premature withdrawal before 1 year converts return to standard Post Office Savings Account interest rates."
      },
      {
        name: "Reinvestment Risk",
        description: "Upon maturity, renewal takes place at then-prevailing government declared interest rates."
      }
    ],
    liquidityLevel: "moderate",
    liquidityDescription: "Tenure-based lock-in (1, 2, 3, or 5 years). Premature withdrawal is barred for the first 6 months, allowed with penalties between 6 months and maturity.",
    withdrawalRules: [
      "No premature deposit withdrawal permitted within the first 6 months of account opening.",
      "If closed between 6 months and 1 year, only standard Post Office Savings Account interest rate is paid.",
      "If a 2, 3, or 5-year account is closed after 1 year, interest is calculated at 2% below the specified Time Deposit rate for completed years, and savings rate for remaining months.",
      "Full principal refund at maturity."
    ],
    lockInPeriod: "1, 2, 3, or 5 Years (depending on chosen tenure)",
    suggestedHorizon: "Matches chosen tenure (1 to 5 Years)",
    volatilityDescription: "Zero price volatility. Fixed, predictable annual interest payouts backed by sovereign guarantee.",
    eligibility: "Resident Indian individuals (single adult, joint accounts up to 3 adults, or guardian on behalf of a minor). NRIs and HUFs are not eligible.",
    eligibleEntities: ["Resident Individuals", "Joint Accounts (up to 3 adults)", "Minors (via Guardian)"],
    regulation: "Government Savings Promotion Act, 1873 / National Savings Time Deposit Scheme, 2019",
    administeringAuthority: "Ministry of Finance, Government of India (operated via Department of Posts)",
    taxationSummary: "5-year deposit qualifies for Section 80C deduction up to ₹1.5 Lakh. Annual interest across all tenures is taxable as Income from Other Sources at marginal slab rate.",
    taxDetails: {
      investmentStage: "5-year tenure qualifies for deduction under Section 80C (Old Tax Regime up to ₹1,50,000). Tenures of 1, 2, and 3 years offer no 80C deduction.",
      growthStage: "Annual interest is taxable as Income from Other Sources as per the investor's tax slab.",
      withdrawalStage: "Principal maturity payout is not subject to tax or TDS.",
      sectionApplicability: "Section 80C (for 5-year TD only), Section 56 of the Income-tax Act, 1961"
    },
    advantages: [
      "Sovereign safety: Backed by the Government of India with 100% capital protection.",
      "Tenure flexibility: Options ranging across 1, 2, 3, and 5-year terms to match short-to-medium goals.",
      "Section 80C tax deduction available on the 5-year deposit tenure.",
      "No maximum investment limit, allowing large treasury deposits.",
      "Quarterly compounding with annual payout maximizes interest yield compared to simple interest."
    ],
    limitations: [
      "Interest is fully taxable at marginal slab rates with no tax exemption on interest income.",
      "Interest is paid annually rather than compounding till final maturity (except quarterly compounding within the year).",
      "Strict premature penalty reduces return significantly if closed early.",
      "Non-Resident Indians (NRIs) and HUFs cannot invest."
    ],
    practicalExample: {
      title: "5-Year Tax-Saving Post Office Time Deposit",
      scenario: "A risk-averse saver deposits ₹1,50,000 into a 5-year Post Office Time Deposit to claim Section 80C deduction.",
      amountInvested: "₹1,50,000 lump sum",
      horizon: "5 Years",
      outcomeExplanation: "The investor claims ₹1,50,000 tax deduction under Section 80C in the year of deposit. Every year, quarterly-compounded interest is paid into their savings account. At the end of 5 years, the initial ₹1,50,000 principal is refunded in full.",
      disclaimer: "Illustration purposes only. Actual interest depends on the locked-in rate declared by the Ministry of Finance at the time of account opening."
    },
    accessMethods: [
      "Any Post Office branch across India",
      "India Post Internet Banking portal (for existing POSB KYC accounts)",
      "India Post Mobile Banking app"
    ],
    commonMistakes: [
      "Assuming 1, 2, and 3-year Time Deposits qualify for Section 80C deduction (only the 5-year deposit qualifies).",
      "Failing to declare annual interest payouts in income tax returns.",
      "Prematurely closing before 1 year, which slashes returns to basic savings bank rates.",
      "Assuming interest remains accumulated until maturity (interest is paid out annually to the linked account)."
    ],
    faqs: [
      {
        question: "Which Post Office Time Deposit tenure qualifies for Section 80C tax deduction?",
        answer: "Only the 5-year Post Office Time Deposit qualifies for tax deduction under Section 80C of the Income-tax Act (up to ₹1.5 Lakh under the Old Tax Regime). 1, 2, and 3-year tenures do not qualify."
      },
      {
        question: "How is interest paid in a Post Office Time Deposit?",
        answer: "Interest is calculated quarterly through compounding, but disbursed annually into the depositor's post office savings account or bank account."
      },
      {
        question: "Can I close a Time Deposit account before maturity?",
        answer: "Premature closure is not allowed before 6 months. Between 6 and 12 months, interest is paid at basic savings account rates. After 1 year, a 2% penalty is deducted from the contracted interest rate."
      },
      {
        question: "Can I open joint accounts in Post Office Time Deposit?",
        answer: "Yes, up to 3 adults can open a joint account together as either Joint A or Joint B."
      }
    ],
    relatedInvestmentSlugs: [
      "fixed-deposit",
      "national-savings-certificate",
      "post-office-monthly-income-scheme",
      "public-provident-fund"
    ],
    sourceIds: ["src-mof-savings", "src-indiapost-schemes", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-pomis",
    slug: "post-office-monthly-income-scheme",
    name: "Post Office Monthly Income Scheme (POMIS)",
    aliases: ["POMIS", "MIS", "Post Office MIS Account", "Monthly Income Scheme"],
    categoryId: "cat-govt-savings",
    subcategory: "Monthly Income Sovereign Savings",
    shortDescription: "A 5-year sovereign-backed savings scheme that pays guaranteed fixed monthly income with full capital protection.",
    beginnerExplanation: "Post Office Monthly Income Scheme is a government savings plan where you invest a lump sum and receive guaranteed monthly interest payouts for 5 years. It is designed for savers seeking predictable, steady monthly cash flows without any market risk. At the end of 5 years, your entire principal deposit is returned to you.",
    mechanismSteps: [
      "Open a POMIS account at any post office with an accompanying post office savings account.",
      "Deposit a lump sum up to ₹9,00,000 for a single account or ₹15,00,000 for a joint account.",
      "The interest rate declared on the deposit date remains locked for the full 5-year tenure.",
      "Monthly interest is automatically credited to your post office savings account every month.",
      "After 5 years, the scheme matures and your initial principal deposit is refunded in full."
    ],
    returnInfo: {
      returnType: "declared_rate",
      rateDisplay: "Declared quarterly by MoF",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are notified quarterly by the Ministry of Finance. Once opened, the contracted rate remains fixed for the entire 5-year term.",
      benchmark: "Government Securities (G-Sec) Yields",
      sourceId: "src-mof-savings"
    },
    minimumAmount: 1000,
    minimumAmountText: "₹1,000 (and in multiples of ₹1,000 thereafter)",
    maximumAmount: 900000,
    maximumAmountText: "₹9,00,000 for a single account; ₹15,00,000 for a joint account (up to 3 holders with equal share)",
    riskLevel: "low",
    riskDescription: "Backed by the sovereign guarantee of the Government of India with zero credit or default risk.",
    keyRisks: [
      {
        name: "Tax Drag",
        description: "Monthly interest payments are fully taxable as Income from Other Sources at the investor's marginal slab rate."
      },
      {
        name: "Inflation Erosion",
        description: "Fixed monthly cash flows lose purchasing power during prolonged inflationary periods as the payout does not increase."
      },
      {
        name: "Premature Exit Penalty",
        description: "Encashing before 5 years incurs a penalty of 1% to 2% deducted from the principal deposit."
      }
    ],
    liquidityLevel: "moderate",
    liquidityDescription: "5-year tenure with monthly cash flow distributions. Premature exit allowed after 1 year with a 2% penalty (years 1-3) or 1% penalty (years 3-5).",
    withdrawalRules: [
      "Monthly interest is credited directly to the linked savings account every month; if not withdrawn, it does not earn additional interest.",
      "No withdrawal of principal permitted within the first 1 year.",
      "If closed between 1 year and 3 years, a deduction of 2% of the principal deposit is made as penalty.",
      "If closed between 3 years and 5 years, a deduction of 1% of the principal deposit is made as penalty.",
      "Full principal is refunded at the end of 5 years upon maturity."
    ],
    lockInPeriod: "5 Years",
    suggestedHorizon: "5 Years",
    volatilityDescription: "Zero price volatility. Fixed, non-fluctuating monthly cash flows backed by the Government of India.",
    eligibility: "Resident Indian individuals (single adult, joint account up to 3 adults, or guardian on behalf of minor). NRIs and HUFs are not eligible.",
    eligibleEntities: ["Resident Individuals", "Joint Accounts (up to 3 adults)", "Minors (via Guardian)"],
    regulation: "Government Savings Promotion Act, 1873 / National Savings Monthly Income Account Scheme, 2019 (amended 2023)",
    administeringAuthority: "Ministry of Finance, Government of India (operated via Department of Posts)",
    taxationSummary: "No Section 80C tax deduction on investment. Monthly interest is fully taxable as Income from Other Sources at marginal tax rates; no TDS is deducted at source.",
    taxDetails: {
      investmentStage: "No tax deduction available under Section 80C or any other section at deposit.",
      growthStage: "Monthly interest credited is taxable income in the year received, taxed at applicable slab rate.",
      withdrawalStage: "Principal repayment at 5-year maturity is completely tax-free.",
      sectionApplicability: "Section 56 of the Income-tax Act, 1961"
    },
    advantages: [
      "Sovereign safety: Complete capital security backed by the Government of India.",
      "Predictable monthly income: Reliable cash flow distribution for monthly household expenses or reinvestment.",
      "Higher deposit limits: Updated limits of ₹9 Lakh (single) and ₹15 Lakh (joint) allow substantial monthly payout generation.",
      "No TDS deduction: Post office does not deduct tax at source on monthly interest payouts.",
      "Can be paired with a Post Office Recurring Deposit (RD) to automate monthly compounding wealth creation."
    ],
    limitations: [
      "No Section 80C tax deduction on the deposit amount.",
      "Monthly interest does not compound inside the account if left uncollected.",
      "Premature withdrawal penalty applies if closed before the 5-year tenure.",
      "Ineligible for NRIs and HUFs."
    ],
    practicalExample: {
      title: "Securing Monthly Household Cash Flow",
      scenario: "A couple opens a joint POMIS account with the maximum deposit of ₹15,00,000 to supplement monthly household expenses.",
      amountInvested: "₹15,00,000 (joint account limit)",
      horizon: "5 Years",
      outcomeExplanation: "The account generates a fixed, guaranteed monthly interest payout credited to their savings account every month for 60 consecutive months. At the end of 5 years, the entire ₹15,00,000 principal is returned to them.",
      disclaimer: "Illustration purposes only. Actual monthly payout depends on the locked-in declared interest rate on the date of account opening."
    },
    accessMethods: [
      "Post office branches nationwide",
      "Department of Posts Internet Banking portal",
      "Standing instruction to auto-credit into Post Office Savings Account (POSA)"
    ],
    commonMistakes: [
      "Leaving monthly interest in the savings account idle instead of sweeping it into higher-yielding instruments or an RD.",
      "Expecting Section 80C tax deduction benefits on the deposit.",
      "Failing to declare monthly interest in income tax filings because no TDS was deducted.",
      "Exceeding the individual deposit cap across single and joint holdings (individual share across all POMIS accounts cannot exceed ₹9 Lakh)."
    ],
    faqs: [
      {
        question: "What is the maximum amount I can invest in POMIS?",
        answer: "An individual can invest up to ₹9,00,000 in a single account, or up to ₹15,00,000 in a joint account (where each joint holder has an equal share, subject to a ₹9 Lakh per-person overall cap across all accounts)."
      },
      {
        question: "Does POMIS deduct TDS on monthly payouts?",
        answer: "No, the Post Office does not deduct TDS on POMIS monthly interest payments. However, the interest is taxable in the hands of the investor at their marginal income tax slab."
      },
      {
        question: "Can I withdraw my money before 5 years in POMIS?",
        answer: "Premature withdrawal is allowed after 1 year. A penalty of 2% of the principal is deducted if closed between 1 and 3 years, and 1% if closed between 3 and 5 years."
      },
      {
        question: "Can POMIS monthly interest be auto-invested in a Recurring Deposit?",
        answer: "Yes, you can set up a standing instruction to automatically transfer the monthly POMIS interest into a Post Office Recurring Deposit (RD) account to achieve compound growth."
      }
    ],
    relatedInvestmentSlugs: [
      "senior-citizen-savings-scheme",
      "post-office-time-deposit",
      "fixed-deposit",
      "recurring-deposit"
    ],
    sourceIds: ["src-mof-savings", "src-indiapost-schemes", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-fd",
    slug: "fixed-deposit",
    name: "Bank Fixed Deposit (FD)",
    aliases: ["FD", "Term Deposit", "Bank FD", "Fixed Deposit Account", "Bank Deposit"],
    categoryId: "cat-bank-savings",
    subcategory: "Bank Term Deposits",
    shortDescription: "A contractual bank deposit offering a fixed interest rate for tenures ranging from 7 days to 10 years, insured up to ₹5 Lakhs by DICGC.",
    beginnerExplanation: "A Bank Fixed Deposit is an investment where you deposit a lump sum with a bank for a fixed duration at an agreed interest rate. The bank pays you guaranteed interest (either periodically or compounded at maturity), and your principal is safe. Deposits up to ₹5 Lakhs per bank are insured by the Government of India through DICGC.",
    mechanismSteps: [
      "Choose a bank (public, private, small finance bank, or cooperative) and select a tenure from 7 days to 10 years.",
      "Select interest payout mode: cumulative (compounded quarterly and paid at maturity) or non-cumulative (monthly/quarterly payout).",
      "Deposit the lump sum amount via net banking, mobile app, or branch visit.",
      "The interest rate contracted at the time of booking remains fixed for the entire deposit duration.",
      "On maturity, principal plus accumulated interest is credited to your savings account, or auto-renewed as per your instructions."
    ],
    returnInfo: {
      returnType: "fixed",
      rateDisplay: "Determined by bank; fixed for chosen tenure",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are fixed by individual scheduled commercial banks based on liquidity and tenure, and remain locked for the entire tenure of the deposit. Insured up to ₹5 Lakhs by DICGC.",
      benchmark: "RBI Repo Rate / Bank Card Rates",
      sourceId: "src-dicgc-rules"
    },
    minimumAmount: 1000,
    minimumAmountText: "₹1,000 (varies by bank; some banks allow starting from ₹100 online)",
    maximumAmount: null,
    maximumAmountText: "No upper limit (deposits of ₹3 Crore and above classified as bulk deposits)",
    riskLevel: "low",
    riskDescription: "Very low credit risk in scheduled commercial banks. Deposits up to ₹5,00,000 (principal + interest) per depositor per bank are insured by DICGC.",
    keyRisks: [
      {
        name: "Credit Risk above ₹5 Lakhs",
        description: "Deposits exceeding ₹5,00,000 in a single bank are not insured by DICGC and carry default risk in the event of bank distress."
      },
      {
        name: "Tax Inefficiency",
        description: "Interest income is fully added to taxable income and taxed at marginal slab rates, creating significant tax drag for high earners."
      },
      {
        name: "Inflation Risk",
        description: "Post-tax FD returns often trail real consumer price inflation over long multi-year horizons."
      },
      {
        name: "Premature Penalty",
        description: "Breaking an FD before maturity typically incurs a 0.5% to 1.0% interest rate penalty."
      }
    ],
    liquidityLevel: "high",
    liquidityDescription: "High liquidity. FDs can be broken instantly online 24x7 with a minor interest penalty, or borrowed against via an overdraft loan facility.",
    withdrawalRules: [
      "Premature withdrawal is permitted anytime via mobile/net banking or branch (except for mandatory 5-year tax-saver FDs).",
      "Premature closure incurs an interest penalty, typically 0.5% to 1% below the applicable rate for the period the deposit actually ran.",
      "Loan / Overdraft against FD available up to 90%-95% of deposit value without breaking the deposit.",
      "5-year Tax-Saver FD has a strict lock-in of 5 years with zero premature withdrawal permitted."
    ],
    lockInPeriod: "7 Days to 10 Years (chosen by depositor; 5 years locked for Tax-Saver FD)",
    suggestedHorizon: "Short to Medium-term (3 months to 5 years)",
    volatilityDescription: "Zero price volatility. Contractual fixed returns guaranteed by the issuing bank.",
    eligibility: "Resident Indian individuals, minors (via guardian), joint holders, HUFs, companies, trusts, partnerships, and NRIs (via NRE/NRO accounts).",
    eligibleEntities: [
      "Resident Individuals",
      "Minors",
      "HUFs",
      "Companies & Sole Proprietorships",
      "Trusts & Societies",
      "NRIs (NRE/NRO/FCNR)"
    ],
    regulation: "Reserve Bank of India (RBI) / DICGC Act, 1961 / Banking Regulation Act, 1949",
    administeringAuthority: "Reserve Bank of India (RBI) / Scheduled Commercial Banks",
    taxationSummary: "Interest is fully taxable as Income from Other Sources at marginal slab rate. TDS applies if annual interest exceeds ₹40,000 (₹50,000 for senior citizens). 5-year Tax-Saver FD qualifies for 80C deduction.",
    taxDetails: {
      investmentStage: "Standard FDs have no tax deduction. 5-year Tax-Saver FDs qualify for deduction up to ₹1,50,000 under Section 80C (Old Tax Regime).",
      growthStage: "Interest is taxable annually on an accrual basis at the depositor's marginal slab rate.",
      withdrawalStage: "TDS of 10% deducted under Section 194A if total bank interest exceeds ₹40,000 per year (₹50,000 for senior citizens; 20% if PAN not provided).",
      sectionApplicability: "Section 80C (Tax-Saver FD only), Section 194A, Section 80TTB of the Income-tax Act, 1961"
    },
    advantages: [
      "High convenience & liquidity: Can be booked or liquidated in seconds via mobile banking apps 24/7.",
      "DICGC insurance: Capital and interest protected up to ₹5,00,000 per depositor per bank.",
      "Flexible tenures: Widest tenure spectrum from 7 days up to 10 years to match exact cash flow needs.",
      "Loan against deposit: Obtain low-cost overdraft loans (typically at FD rate + 1%) without breaking the deposit.",
      "Senior citizen premium: Most banks offer 0.50% to 0.75% additional interest for senior citizens."
    ],
    limitations: [
      "High tax drag: Interest is taxed at marginal slab rates, yielding low real post-tax returns for top slab earners.",
      "TDS deduction at source reduces compounding efficiency unless Form 15G/15H is submitted.",
      "DICGC insurance ceiling capped at ₹5 Lakhs per bank.",
      "Premature withdrawal penalty reduces effective interest rate."
    ],
    practicalExample: {
      title: "Parking Emergency Funds in a Bank FD",
      scenario: "An individual books a 1-year cumulative Bank FD of ₹5,00,000 to maintain a secure, highly liquid emergency buffer.",
      amountInvested: "₹5,00,000 lump sum",
      horizon: "1 Year",
      outcomeExplanation: "The deposit earns fixed contractual interest compounded quarterly for 1 year. The full ₹5,00,000 is 100% insured by DICGC. At the end of 12 months, the principal and accumulated interest are credited directly to the savings account.",
      disclaimer: "Illustration purposes only. Actual interest rates depend on the card rate offered by the specific bank at the time of booking."
    },
    accessMethods: [
      "Mobile Banking Applications (e.g., YONO SBI, HDFC MobileBanking, ICICI iMobile)",
      "Internet Banking portals of all scheduled banks",
      "Bank branch counters nationwide",
      "Fintech deposit aggregation platforms (for partner bank FDs)"
    ],
    commonMistakes: [
      "Keeping more than ₹5 Lakhs in a single fragile co-operative bank without evaluating institutional credit quality.",
      "Failing to submit Form 15G (or Form 15H for senior citizens) when total annual income is below taxable limits, causing unnecessary TDS.",
      "Breaking the whole FD for a small urgent liquidity need instead of taking an overdraft loan against the FD.",
      "Ignoring quarterly compounding and choosing simple annual interest payouts unnecessarily."
    ],
    faqs: [
      {
        question: "How much of my bank fixed deposit is insured against bank failure?",
        answer: "Under the Deposit Insurance and Credit Guarantee Corporation (DICGC) rules, deposits (principal + interest) across all accounts in a single bank are insured up to a maximum of ₹5,00,000 per depositor."
      },
      {
        question: "What is the threshold for TDS deduction on FD interest?",
        answer: "Banks deduct 10% TDS under Section 194A if your total interest income across all branches of that bank exceeds ₹40,000 in a financial year (₹50,000 for senior citizens). If PAN is not provided, TDS is 20%."
      },
      {
        question: "Can I break my FD prematurely?",
        answer: "Yes, standard fixed deposits can be closed prematurely anytime online or at the branch, usually subject to a 0.5% to 1% penalty on the applicable rate for the contracted tenure."
      },
      {
        question: "What is a 5-year Tax-Saver FD?",
        answer: "A Tax-Saver FD is a special 5-year fixed deposit that qualifies for tax deduction up to ₹1.5 Lakh under Section 80C. It comes with a strict mandatory 5-year lock-in and cannot be closed prematurely or pledged for loans."
      }
    ],
    relatedInvestmentSlugs: [
      "recurring-deposit",
      "post-office-time-deposit",
      "public-provident-fund",
      "senior-citizen-savings-scheme"
    ],
    sourceIds: ["src-dicgc-rules", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  },
  {
    id: "inv-rd",
    slug: "recurring-deposit",
    name: "Bank Recurring Deposit (RD)",
    aliases: ["RD", "Recurring Deposit Account", "Cumulative Bank Deposit", "Bank RD"],
    categoryId: "cat-bank-savings",
    subcategory: "Bank Systematic Savings",
    shortDescription: "A systematic monthly bank savings deposit offering fixed compounding interest for tenures from 6 months to 10 years.",
    beginnerExplanation: "A Bank Recurring Deposit is a savings plan where you deposit a fixed amount of money every month for a chosen period (from 6 months to 10 years). It allows you to build a lump sum through regular monthly savings while earning the same guaranteed interest rate as a fixed deposit. It is ideal for disciplined goal-based savings out of monthly salary or income.",
    mechanismSteps: [
      "Select a monthly installment amount and tenure (ranging from 6 months to 10 years) with your bank.",
      "A fixed sum is automatically debited from your savings account every month on a set date.",
      "The interest rate contracted on the date of RD creation remains fixed for every monthly installment.",
      "Interest is compounded quarterly across all deposited monthly installments.",
      "On maturity date, the entire accumulated maturity value (all monthly installments + compounded interest) is credited to your account."
    ],
    returnInfo: {
      returnType: "fixed",
      rateDisplay: "Determined by bank; fixed for chosen tenure",
      isGuaranteed: true,
      isIllustrative: false,
      description: "Interest rates are fixed by individual scheduled commercial banks for the selected tenure. The contracted rate applies to all monthly installments throughout the tenure.",
      benchmark: "RBI Repo Rate / Bank Card Rates",
      sourceId: "src-dicgc-rules"
    },
    minimumAmount: 100,
    minimumAmountText: "₹100 to ₹500 per month (varies by bank)",
    maximumAmount: null,
    maximumAmountText: "No upper limit",
    riskLevel: "low",
    riskDescription: "Very low credit risk when booked with scheduled commercial banks. Insured up to ₹5,00,000 per depositor per bank by DICGC.",
    keyRisks: [
      {
        name: "Missed Installment Penalty",
        description: "Failing to maintain sufficient balance on monthly installment deduction dates attracts default penalties from the bank."
      },
      {
        name: "Tax Drag",
        description: "Interest income is fully taxable as Income from Other Sources at marginal tax rates, with TDS applicable."
      },
      {
        name: "Inflation Risk",
        description: "Post-tax fixed yields may not outpace high inflation over longer multi-year savings horizons."
      }
    ],
    liquidityLevel: "moderate",
    liquidityDescription: "Moderate liquidity. The RD account can be closed prematurely online at any time with a minor interest penalty.",
    withdrawalRules: [
      "Premature closure is permitted anytime via internet banking, mobile banking, or branch counters.",
      "Premature closure incurs an interest penalty (usually 0.5% to 1.0% below the applicable rate for the actual completed tenure).",
      "Partial withdrawals from an RD are generally not permitted (though loans/overdraft against RD balance can be availed).",
      "Maturity payout credited automatically upon completion of the full schedule of monthly installments."
    ],
    lockInPeriod: "6 Months to 10 Years (chosen tenure)",
    suggestedHorizon: "Short to Medium-term (6 months to 3 years)",
    volatilityDescription: "Zero price volatility. Fixed, guaranteed compounding returns on regular monthly savings.",
    eligibility: "Resident Indian individuals, minors (via guardian), joint holders, HUFs, sole proprietorships, partnerships, and NRIs (via NRE/NRO accounts).",
    eligibleEntities: [
      "Resident Individuals",
      "Minors (via Guardian)",
      "Joint Holders",
      "HUFs",
      "NRIs (NRE/NRO)"
    ],
    regulation: "Reserve Bank of India (RBI) / DICGC Act, 1961 / Banking Regulation Act, 1949",
    administeringAuthority: "Reserve Bank of India (RBI) / Scheduled Commercial Banks",
    taxationSummary: "No Section 80C tax deduction. Total interest earned is fully taxable as Income from Other Sources at marginal slab rate; TDS applies above ₹40,000 (₹50,000 for seniors).",
    taxDetails: {
      investmentStage: "No tax deduction available on monthly RD installment contributions.",
      growthStage: "Interest is taxable annually on an accrual basis at the depositor's marginal income tax slab.",
      withdrawalStage: "TDS of 10% deducted under Section 194A if total annual interest across all bank deposits exceeds ₹40,000 (₹50,000 for senior citizens).",
      sectionApplicability: "Section 194A, Section 56, Section 80TTB of the Income-tax Act, 1961"
    },
    advantages: [
      "Enforces disciplined systematic savings: Auto-debit builds wealth steadily from monthly cash flows.",
      "Small monthly ticket size: Can start with as little as ₹100 to ₹500 per month.",
      "Locked interest rate: The agreed interest rate applies to all future installments throughout the tenure.",
      "DICGC insurance: Principal and interest protected up to ₹5,00,000 per depositor per bank.",
      "Senior citizen benefit: Higher interest rate premium (0.50% to 0.75%) offered to senior citizens."
    ],
    limitations: [
      "No Section 80C tax deduction on monthly deposits.",
      "Missed installments incur default charges and may lead to account closure if repeated.",
      "Full interest is taxable at marginal slab rates with TDS implications.",
      "Cannot alter installment amount once the RD is booked."
    ],
    practicalExample: {
      title: "Systematic Savings for an Annual Vacation or Goal",
      scenario: "A salaried individual sets up a 12-month RD of ₹10,000 per month to build a planned lump-sum travel fund.",
      amountInvested: "₹1,20,000 total (₹10,000 monthly for 12 months)",
      horizon: "1 Year (12 Months)",
      outcomeExplanation: "Every monthly installment earns guaranteed quarterly compounding interest from the date of deposit until the 12th month. At the end of 1 year, the accumulated principal of ₹1,20,000 plus interest is credited directly to their savings account.",
      disclaimer: "Illustration purposes only. Actual interest earned depends on the contracted interest rate offered by the bank at the time of booking."
    },
    accessMethods: [
      "Mobile Banking apps of all scheduled commercial banks",
      "Net banking portals 24/7",
      "Bank branch counters nationwide"
    ],
    commonMistakes: [
      "Insufficient balance on the monthly debit date, attracting bank penalty fees.",
      "Assuming RD interest is tax-free because monthly installments are small (RD interest is fully taxable and subject to TDS).",
      "Prematurely closing the RD instead of taking an overdraft loan against the accumulated RD value.",
      "Not knowing that the interest rate is locked for all installments across the entire tenure."
    ],
    faqs: [
      {
        question: "Is RD interest subject to TDS?",
        answer: "Yes. Under Section 194A of the Income-tax Act, banks deduct 10% TDS if the combined interest from all your FDs and RDs in that bank exceeds ₹40,000 in a financial year (₹50,000 for senior citizens)."
      },
      {
        question: "What happens if I miss an RD installment payment?",
        answer: "If your linked account lacks sufficient balance on the debit date, the bank charges a nominal late fee (e.g. ₹1.50 to ₹2 per ₹100 per month). If consecutive installments are missed, the bank may close the RD."
      },
      {
        question: "Can I change the monthly installment amount later?",
        answer: "No. Once an RD is opened, the monthly installment amount and tenure are fixed and cannot be altered. If you want to invest more, you can open an additional RD."
      },
      {
        question: "Can I take a loan against my Recurring Deposit?",
        answer: "Yes, most banks allow you to take an overdraft loan up to 90% of the accumulated RD balance at an interest rate typically 1% to 2% above the RD rate."
      }
    ],
    relatedInvestmentSlugs: [
      "fixed-deposit",
      "post-office-monthly-income-scheme",
      "public-provident-fund",
      "post-office-time-deposit"
    ],
    sourceIds: ["src-dicgc-rules", "src-incometax-act"],
    status: "draft",
    lastVerifiedAt: "",
    completenessScore: 85
  }
];
