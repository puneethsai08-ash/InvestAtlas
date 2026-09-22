"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Investment, NormalizedComparisonRow } from "@/lib/types";
import { RiskBadge } from "@/components/ui/RiskBadge";
import { ReturnBadge } from "@/components/ui/ReturnBadge";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Info, Check, ShieldAlert, Sparkles, Filter } from "lucide-react";

interface ComparisonMatrixProps {
  investments: Investment[];
  matrix: NormalizedComparisonRow[];
}

export function ComparisonMatrix({ investments, matrix }: ComparisonMatrixProps) {
  const [highlightDifferences, setHighlightDifferences] = useState(false);

  if (investments.length === 0) {
    return null;
  }

  // Group matrix rows by category
  const categories = [
    { key: "basics", title: "1. Core Characteristics & Limits" },
    { key: "returns_and_risk", title: "2. Return Mechanism & Risk Profile" },
    { key: "liquidity_and_lockin", title: "3. Liquidity, Lock-in & Horizon" },
    { key: "tax_and_rules", title: "4. Tax Framework & Regulatory Oversight" },
    { key: "evaluation", title: "5. Advantages & Practical Limitations" },
  ];

  return (
    <div className="space-y-6">
      {/* Toggle Controls */}
      <div className="flex items-center justify-between">
        <label className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={highlightDifferences}
            onChange={(e) => setHighlightDifferences(e.target.checked)}
            className="w-4 h-4 rounded text-[#0071e3] focus:ring-0"
          />
          <span>Highlight structural differences</span>
        </label>
        <span className="text-xs text-neutral-400">
          Showing {matrix.length} standardized criteria
        </span>
      </div>

      {/* Comparison Table / Matrix */}
      <div className="overflow-x-auto rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#161618] shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          {/* Header Row: Investment Names */}
          <thead>
            <tr className="border-b border-black/[0.06] dark:border-white/[0.08] bg-neutral-50/80 dark:bg-neutral-900/80">
              <th className="p-4 w-1/4 min-w-[200px] font-bold text-neutral-900 dark:text-white sticky left-0 bg-neutral-50/95 dark:bg-neutral-900/95 z-10">
                Criteria
              </th>
              {investments.map((inv) => (
                <th key={inv.id} className="p-4 min-w-[240px] align-top">
                  <div className="space-y-1.5">
                    <Link
                      href={`/investment/${inv.slug}`}
                      className="font-bold text-sm text-neutral-900 dark:text-white hover:text-[#0071e3] transition-colors line-clamp-1"
                    >
                      {inv.name}
                    </Link>
                    <div className="flex flex-wrap items-center gap-1">
                      <RiskBadge risk={inv.riskLevel} />
                      <ReturnBadge returnType={inv.returnInfo.returnType} />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Grouped Criteria Rows */}
          <tbody>
            {categories.map((catGroup) => {
              const rows = matrix.filter((m) => m.criterion.category === catGroup.key);
              if (rows.length === 0) return null;

              return (
                <React.Fragment key={catGroup.key}>
                  {/* Category Header Row */}
                  <tr className="bg-neutral-100/60 dark:bg-neutral-900/40 border-y border-black/[0.04] dark:border-white/[0.04]">
                    <td
                      colSpan={investments.length + 1}
                      className="px-4 py-2 font-bold text-[11px] text-neutral-500 uppercase tracking-wider sticky left-0"
                    >
                      {catGroup.title}
                    </td>
                  </tr>

                  {/* Rows */}
                  {rows.map((row) => {
                    const values = row.values.map((v) => v.displayValue);
                    const isDifferent = new Set(values).size > 1;

                    return (
                      <tr
                        key={row.criterion.id}
                        className={`border-b border-black/[0.03] dark:border-white/[0.03] hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors ${
                          highlightDifferences && isDifferent
                            ? "bg-amber-50/30 dark:bg-amber-950/10"
                            : ""
                        }`}
                      >
                        {/* Sticky Criterion Column */}
                        <td className="p-4 align-top sticky left-0 bg-white dark:bg-[#161618] z-10 border-r border-black/[0.04] dark:border-white/[0.04]">
                          <div className="font-semibold text-neutral-800 dark:text-neutral-200">
                            {row.criterion.name}
                          </div>
                          <p className="text-[10px] text-neutral-400 mt-0.5 line-clamp-2">
                            {row.criterion.description}
                          </p>
                        </td>

                        {/* Investment Values */}
                        {row.values.map((v, vIdx) => (
                          <td key={vIdx} className="p-4 align-top text-neutral-700 dark:text-neutral-300">
                            <div className="space-y-1">
                              <span className="font-medium leading-relaxed block">
                                {v.displayValue}
                              </span>
                              {v.subtext && (
                                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
                                  {v.subtext}
                                </p>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
