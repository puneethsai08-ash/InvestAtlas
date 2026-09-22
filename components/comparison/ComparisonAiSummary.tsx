import React from "react";
import { Sparkles, ShieldCheck, Info } from "lucide-react";

interface ComparisonAiSummaryProps {
  summary: {
    overview: string;
    keyDifferences: { title: string; explanation: string }[];
    suitabilityNote: string;
  };
}

export function ComparisonAiSummary({ summary }: ComparisonAiSummaryProps) {
  if (!summary || summary.keyDifferences.length === 0) return null;

  return (
    <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-neutral-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-neutral-900/40 border border-blue-200/60 dark:border-blue-800/40 space-y-5">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-blue-500 text-white shadow-sm">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
            Objective Comparative Breakdown
          </h3>
          <p className="text-[11px] text-neutral-500">
            Deterministic educational synthesis — no rankings, no sponsored winner
          </p>
        </div>
      </div>

      <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {summary.overview}
      </p>

      {/* Differences List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {summary.keyDifferences.map((diff, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-white/80 dark:bg-black/40 border border-black/[0.04] dark:border-white/[0.06] space-y-1"
          >
            <span className="font-bold text-xs text-blue-900 dark:text-blue-300">
              {diff.title}
            </span>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {diff.explanation}
            </p>
          </div>
        ))}
      </div>

      {/* Neutrality / Suitability Note */}
      <div className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-black/5 dark:border-white/5 flex items-start gap-2 text-[11px] text-neutral-600 dark:text-neutral-400">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">{summary.suitabilityNote}</p>
      </div>
    </div>
  );
}
