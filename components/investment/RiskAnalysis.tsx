import React from "react";
import { Investment } from "@/lib/types";
import { AlertTriangle, ShieldAlert, CheckCircle2 } from "lucide-react";
import { getRiskLabel } from "@/lib/utils/formatters";

export function RiskAnalysis({ investment }: { investment: Investment }) {
  return (
    <div className="space-y-4">
      {/* High-level Risk Summary */}
      <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] space-y-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          <span className="font-bold text-xs text-neutral-900 dark:text-white uppercase tracking-wider">
            Overall Risk Rating: {getRiskLabel(investment.riskLevel)}
          </span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {investment.riskDescription}
        </p>
      </div>

      {/* Breakdown of Specific Risk Dimensions */}
      {investment.keyRisks && investment.keyRisks.length > 0 && (
        <div className="space-y-2.5">
          <span className="font-semibold text-xs text-neutral-800 dark:text-neutral-200 block">
            Specific Risk Factors to Note:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {investment.keyRisks.map((risk, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] space-y-1"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  <span>{risk.name}</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Volatility Description if present */}
      {investment.volatilityDescription && (
        <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/40 dark:border-blue-900/30 text-xs text-blue-900 dark:text-blue-300">
          <span className="font-semibold">Price Volatility Context: </span>
          <span>{investment.volatilityDescription}</span>
        </div>
      )}
    </div>
  );
}
