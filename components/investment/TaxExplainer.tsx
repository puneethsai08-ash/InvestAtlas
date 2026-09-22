import React from "react";
import { Investment } from "@/lib/types";
import { Receipt, AlertCircle, CheckCircle, Info } from "lucide-react";

export function TaxExplainer({ investment }: { investment: Investment }) {
  const { taxDetails, taxationSummary } = investment;

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p className="font-semibold text-neutral-900 dark:text-white mb-1">
          High-Level Tax Summary:
        </p>
        <p>{taxationSummary}</p>
      </div>

      {/* 3 Stages of Taxation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Stage 1: Investment / Deposit */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
            <Receipt className="w-3.5 h-3.5 text-blue-500" />
            <span>1. Investment Stage</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {taxDetails?.investmentStage || "No deduction or taxed out of post-tax income."}
          </p>
        </div>

        {/* Stage 2: Growth / Accrual */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>2. Growth & Accrual Stage</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {taxDetails?.growthStage || "Accumulates tax-deferred until realization."}
          </p>
        </div>

        {/* Stage 3: Withdrawal / Maturity */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
            <Info className="w-3.5 h-3.5 text-amber-500" />
            <span>3. Redemption / Maturity</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {taxDetails?.withdrawalStage || "Taxable at marginal slab or applicable capital gains rate."}
          </p>
        </div>
      </div>

      {/* Statutory Disclaimer */}
      <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-[11px] text-amber-800 dark:text-amber-300">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Tax Notice:</strong> Indian tax laws (including Capital Gains tax rates and Section 80C exemptions) are amended periodically via Union Budgets. This information is purely educational; verify current applicable provisions under the Income Tax Act with a qualified tax practitioner.
        </p>
      </div>
    </div>
  );
}
