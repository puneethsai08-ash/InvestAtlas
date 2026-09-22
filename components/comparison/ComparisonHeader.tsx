"use client";

import React from "react";
import { Investment } from "@/lib/types";
import { useComparison } from "@/lib/context/ComparisonContext";
import { Plus, X, Trash2, Share2, Printer, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ComparisonHeaderProps {
  allInvestments: Investment[];
  currentInvestments: Investment[];
}

export function ComparisonHeader({ allInvestments, currentInvestments }: ComparisonHeaderProps) {
  const { selectedSlugs, addInvestment, removeInvestment, clearAll } = useComparison();

  const presets = [
    { label: "FD vs PPF", slugs: ["fixed-deposit", "public-provident-fund"] },
    { label: "Mutual Fund vs ETF", slugs: ["mutual-fund-active", "exchange-traded-fund"] },
    { label: "SGB vs Gold ETF", slugs: ["sovereign-gold-bond", "gold-etf"] },
    { label: "G-Sec vs Corp Bond", slugs: ["government-securities", "corporate-bonds"] },
    { label: "NPS vs PPF", slugs: ["national-pension-system", "public-provident-fund"] },
  ];

  const handleSelectPreset = (slugs: string[]) => {
    clearAll();
    slugs.forEach((s) => addInvestment(s));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Comparison link copied to clipboard!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
      {/* Top Title Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
            Deterministic Decision Engine
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Side-by-Side Investment Comparison
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Compare 2 to 4 options across 14 standardized legal, financial, and liquidity dimensions.
          </p>
        </div>

        {/* Share & Print Actions */}
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={handleShare} className="rounded-full">
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint} className="rounded-full">
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </Button>
        </div>
      </div>

      {/* Preset Quick Chips */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-neutral-400 font-semibold uppercase text-[10px]">Popular Comparisons:</span>
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectPreset(p.slugs)}
            className="px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors font-medium cursor-pointer"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Active Selected Investment Pills & Add Dropdown */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mr-1">
            Comparing ({currentInvestments.length}/4):
          </span>

          {currentInvestments.map((inv) => (
            <span
              key={inv.id}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-blue-200/60 dark:border-blue-800/40 text-xs font-semibold"
            >
              <span>{inv.name}</span>
              <button
                onClick={() => removeInvestment(inv.slug)}
                className="hover:text-rose-600 transition-colors p-0.5"
                title="Remove"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {currentInvestments.length < 4 && (
            <select
              value=""
              onChange={(e) => {
                if (e.target.value) addInvestment(e.target.value);
              }}
              className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 text-xs text-neutral-700 dark:text-neutral-300 font-medium outline-none cursor-pointer hover:bg-neutral-200"
            >
              <option value="">+ Add investment...</option>
              {allInvestments
                .filter((i) => !selectedSlugs.includes(i.slug))
                .map((i) => (
                  <option key={i.id} value={i.slug}>
                    {i.name}
                  </option>
                ))}
            </select>
          )}
        </div>

        {currentInvestments.length > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-neutral-400 hover:text-rose-600 transition-colors font-medium"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear selection</span>
          </button>
        )}
      </div>
    </div>
  );
}
