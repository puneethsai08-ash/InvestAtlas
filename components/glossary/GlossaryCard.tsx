import React from "react";
import Link from "next/link";
import { GlossaryTerm } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, BookOpen } from "lucide-react";

export function GlossaryCard({ term }: { term: GlossaryTerm }) {
  const getDifficultyVariant = (diff: GlossaryTerm["difficulty"]) => {
    switch (diff) {
      case "beginner":
        return "success" as const;
      case "intermediate":
        return "warning" as const;
      case "advanced":
        return "purple" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <div className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:border-[#0071e3]/40 hover:shadow-md transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant={getDifficultyVariant(term.difficulty)} size="sm">
            {term.difficulty}
          </Badge>
          {term.aliases && term.aliases.length > 0 && (
            <span className="text-[10px] text-neutral-400 font-mono">
              AKA: {term.aliases.join(", ")}
            </span>
          )}
        </div>

        <Link href={`/glossary/${term.slug}`} className="group">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-[#0071e3] transition-colors mb-2">
            {term.term}
          </h3>
        </Link>

        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
          {term.simpleDefinition}
        </p>

        {term.example && (
          <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed border border-black/[0.02] dark:border-white/[0.02]">
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">Example: </span>
            {term.example}
          </div>
        )}
      </div>

      <div className="pt-3 mt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs text-[#0071e3] font-semibold">
        <span className="text-[11px] text-neutral-400 font-normal">
          {term.relatedInvestmentSlugs?.length || 0} Related Investments
        </span>
        <Link
          href={`/glossary/${term.slug}`}
          className="inline-flex items-center gap-1 hover:underline"
        >
          <span>Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
