"use client";

import React, { useState } from "react";
import { db } from "@/lib/data/store";
import {
  Investment,
  ComparisonCriterion,
  NormalizedComparisonRow,
} from "@/lib/types";
import { useComparison } from "@/lib/context/ComparisonContext";
import {
  ComparisonHeader,
} from "@/components/comparison/ComparisonHeader";
import {
  ComparisonMatrix,
} from "@/components/comparison/ComparisonMatrix";
import {
  ComparisonAiSummary,
} from "@/components/comparison/ComparisonAiSummary";
import { buildComparisonMatrix } from "@/lib/services/comparisonService";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Filter, SlidersHorizontal, Columns2 } from "lucide-react";


export default function ComparePage({
  searchParams,
}: {
  searchParams?: { slugs?: string };
}) {
  const { selectedSlugs, addInvestment, removeInvestment } = useComparison();
  const allInvestments = db.getAllInvestments();

  // Initialize from URL or stored state
  const [activeSlugs, setActiveSlugs] = useState<string[]>(() => {
    const initial = searchParams?.slugs
      ? searchParams.slugs
          .split(",")
          .filter((s) => allInvestments.some((i) => i.slug === s))
      : selectedSlugs;
    return initial.slice(0, 4);
  });

  // Sync active slugs when searchParams change
  React.useEffect(() => {
    if (searchParams?.slugs) {
      const newSlugs = searchParams.slugs
        .split(",")
        .filter((s) => allInvestments.some((i) => i.slug === s));
      if (newSlugs.length > 0 && newSlugs.length <= 4) {
        setActiveSlugs(newSlugs);
      }
    }
  }, [searchParams, allInvestments]);

  const currentInvestments = activeSlugs
    .map((slug) => db.getInvestmentBySlug(slug))
    .filter((i): i is Investment => i !== undefined);

  const matrix: NormalizedComparisonRow[] = buildComparisonMatrix(currentInvestments);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header with Selection */}
      <ComparisonHeader
        allInvestments={allInvestments}
        currentInvestments={currentInvestments}
      />

      {currentInvestments.length < 2 ? (
        /* Empty State */
        <div className="mt-10 text-center p-12 rounded-3xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] space-y-6">
          <div className="inline-flex items-center gap-3">
            <Columns2 className="w-10 h-10 text-[#0071e3]" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Select 2–4 investments to compare
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
            Use the selector above to add investments from any category. Comparison is strictly descriptive and never selects a winner.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {allInvestments.slice(0, 6).map((inv) => (
              <Button
                key={inv.id}
                variant="secondary"
                size="sm"
                onClick={() => addInvestment(inv.slug)}
                className="rounded-full"
              >
                <span className="max-w-[150px] truncate">+ {inv.name}</span>
              </Button>
            ))}
          </div>
        </div>
      ) : (
        /* Comparison Content */
        <div className="space-y-10 mt-10">
          {/* AI Educational Summary */}
          <ComparisonAiSummary
            summary={
              currentInvestments.length >= 2
                ? generateSummary(currentInvestments)
                : { overview: "", keyDifferences: [], suitabilityNote: "" }
            }
          />

          {/* Deterministic Comparison Matrix */}
          <ComparisonMatrix
            investments={currentInvestments}
            matrix={matrix}
          />
        </div>
      )}

      {/* Footer Educational Disclaimer */}
      <div className="mt-12 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] text-xs text-neutral-500 space-y-1">
        <p className="font-bold text-neutral-700 dark:text-neutral-300">
          Comparison Engine Principles:
        </p>
        <p>
          1. All data is normalized from the platform's canonical regulatory schema. 2. No machine learning algorithms determine a "winner." 3. Every data cell is traceable to statutory notifications. 4. Comparison criteria weights are transparently documented, never hidden.
        </p>
      </div>
    </div>
  );
}

function generateSummary(investments: Investment[]) {
  return {
    overview: `Comparing ${investments.map((i) => i.name).join(" vs ")}. Educational breakdown of structural, risk, and liquidity trade-offs.`,
    keyDifferences: investments.slice(0, 2).map((inv, idx) => ({
      title: `Return Mechanism: ${inv.name}`,
      explanation: `${inv.name} uses ${inv.returnInfo.returnType.replace("_", " ")} returns. ${inv.returnInfo.description}. Minimum entry: ${inv.minimumAmountText}. Lock-in: ${inv.lockInPeriod || "None"}.`,
    })),
    suitabilityNote: "Educational note only. Neither product is universally superior — the right choice depends on your personal risk tolerance, horizon, and tax slab.",
  };
}
