"use client";

import React from "react";
import { InvestmentCategory, RiskLevel, LiquidityLevel, ReturnType } from "@/lib/types";
import { RotateCcw, Filter, ShieldCheck, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FilterState {
  category: string;
  risk: string;
  liquidity: string;
  returnType: string;
  lockIn: string;
  horizon: string;
}

interface FilterSidebarProps {
  categories: InvestmentCategory[];
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onReset: () => void;
  totalFiltered: number;
  totalAvailable: number;
}

export function FilterSidebar({
  categories,
  filters,
  onFilterChange,
  onReset,
  totalFiltered,
  totalAvailable,
}: FilterSidebarProps) {
  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  return (
    <aside className="space-y-6">
      {/* Filter Header with Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#0071e3]" />
          <span className="font-bold text-sm text-neutral-900 dark:text-white">Filters</span>
          <span className="text-xs text-neutral-400">
            ({totalFiltered}/{totalAvailable})
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-[#0071e3] hover:underline font-semibold"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* 1. Category Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
          Asset Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-200 outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* 2. Risk Level */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
          Risk Tolerance
        </label>
        <select
          value={filters.risk}
          onChange={(e) => onFilterChange("risk", e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-200 outline-none"
        >
          <option value="">All Risk Levels</option>
          <option value="low">Low Risk (Sovereign/Insured)</option>
          <option value="low_to_moderate">Low to Moderate</option>
          <option value="moderate">Moderate Risk</option>
          <option value="moderate_to_high">Moderate to High</option>
          <option value="high">High Risk (Equities/Derivatives)</option>
          <option value="very_high">Very High Risk (AIF/PMS)</option>
        </select>
      </div>

      {/* 3. Return Mechanism */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
          Return Nature
        </label>
        <select
          value={filters.returnType}
          onChange={(e) => onFilterChange("returnType", e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-200 outline-none"
        >
          <option value="">All Return Types</option>
          <option value="fixed">Fixed Rate (Bank/FD)</option>
          <option value="declared_rate">Periodically Declared (PPF/SSY/EPF)</option>
          <option value="market_linked">Market-Linked (Mutual Funds/Stocks)</option>
          <option value="coupon">Fixed Coupon / Bond Yield</option>
          <option value="variable">Variable / Floating</option>
        </select>
      </div>

      {/* 4. Lock-in Period */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
          Lock-in Period
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { label: "Any", value: "" },
            { label: "No Lock-in", value: "none" },
            { label: "Has Lock-in", value: "locked" },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => onFilterChange("lockIn", item.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                filters.lockIn === item.value
                  ? "bg-[#0071e3] text-white border-[#0071e3]"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-transparent hover:bg-neutral-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Liquidity */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
          Liquidity Level
        </label>
        <select
          value={filters.liquidity}
          onChange={(e) => onFilterChange("liquidity", e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-200 outline-none"
        >
          <option value="">All Liquidity</option>
          <option value="high">High (Immediate / T+1 to T+3)</option>
          <option value="moderate">Moderate (Tenure with penalty)</option>
          <option value="low">Low (Strict withdrawal rules)</option>
        </select>
      </div>

      {/* Educational Filter Note */}
      <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/40 dark:border-blue-800/30 text-[11px] text-blue-900 dark:text-blue-200 space-y-1">
        <p className="font-semibold">Objective Discovery</p>
        <p className="leading-relaxed">
          Filters categorize products purely based on official characteristics, not recommendation algorithms.
        </p>
      </div>
    </aside>
  );
}
