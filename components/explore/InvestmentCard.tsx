"use client";

import React from "react";
import Link from "next/link";
import { Investment } from "@/lib/types";
import { RiskBadge } from "@/components/ui/RiskBadge";
import { ReturnBadge } from "@/components/ui/ReturnBadge";
import { LiquidityBadge } from "@/components/ui/LiquidityBadge";
import { Badge } from "@/components/ui/Badge";
import { useComparison } from "@/lib/context/ComparisonContext";
import { Columns2, Check, ArrowRight, ShieldAlert, Lock, Clock, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils/formatters";

export function InvestmentCard({ investment }: { investment: Investment }) {
  const { isSelected, toggleInvestment } = useComparison();
  const selected = isSelected(investment.slug);

  return (
    <div
      className={`group flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#161618] border transition-all duration-200 ${
        selected
          ? "border-[#0071e3] ring-2 ring-[#0071e3]/20 shadow-md"
          : "border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:border-[#0071e3]/40 hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      <div>
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge variant="secondary" size="sm" className="font-mono text-[10px] uppercase">
            {investment.categoryId.replace("cat-", "").replace("-", " ")}
          </Badge>
          <div className="flex items-center gap-1.5">
            <RiskBadge risk={investment.riskLevel} />
          </div>
        </div>

        {/* Investment Name & Aliases */}
        <Link href={`/investment/${investment.slug}`} className="block group-hover:text-[#0071e3] transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
            {investment.name}
          </h3>
        </Link>

        {investment.aliases && investment.aliases.length > 0 && (
          <p className="text-[11px] text-neutral-400 font-medium mt-0.5">
            Also known as: {investment.aliases.join(", ")}
          </p>
        )}

        {/* Short Description */}
        <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-2.5 mb-4 leading-relaxed">
          {investment.shortDescription}
        </p>

        {/* Standardized Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] text-[11px] mb-4">
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
              Return Type
            </span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 capitalize">
              {investment.returnInfo.returnType.replace("_", " ")}
            </span>
          </div>

          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
              Min. Investment
            </span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {investment.minimumAmountText || "Product Dependent"}
            </span>
          </div>

          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
              Lock-in Period
            </span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {investment.lockInPeriod || "None"}
            </span>
          </div>

          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
              Horizon
            </span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {investment.suggestedHorizon || "Flexible"}
            </span>
          </div>
        </div>
      </div>

      {/* Card Actions & Footer */}
      <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between gap-2">
        <button
          onClick={() => toggleInvestment(investment.slug)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            selected
              ? "bg-[#0071e3] text-white shadow-sm"
              : "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
          }`}
        >
          {selected ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added to Compare</span>
            </>
          ) : (
            <>
              <Columns2 className="w-3.5 h-3.5" />
              <span>Compare</span>
            </>
          )}
        </button>

        <Link
          href={`/investment/${investment.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:underline"
        >
          <span>Full Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
