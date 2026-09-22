import React from "react";
import { PracticalExample } from "@/lib/types";
import { Calculator, Sparkles, AlertCircle } from "lucide-react";

export function ExampleScenario({ example }: { example: PracticalExample }) {
  if (!example || !example.scenario) return null;

  return (
    <div className="p-5 rounded-2xl bg-gradient-to-br from-neutral-50 to-blue-50/30 dark:from-neutral-900/80 dark:to-blue-950/20 border border-blue-200/50 dark:border-blue-800/30 space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300">
        <Sparkles className="w-4 h-4 text-blue-500" />
        <span>{example.title || "Practical Educational Scenario"}</span>
      </div>

      <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {example.scenario}
      </p>

      {/* Numerical Setup Strip */}
      {(example.amountInvested || example.horizon) && (
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/5 text-[11px]">
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
              Hypothetical Capital
            </span>
            <span className="font-bold text-neutral-900 dark:text-white">
              {example.amountInvested}
            </span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
              Time Horizon
            </span>
            <span className="font-bold text-neutral-900 dark:text-white">
              {example.horizon}
            </span>
          </div>
        </div>
      )}

      {/* Outcome Explanation */}
      {example.outcomeExplanation && (
        <div className="p-3 rounded-xl bg-white/60 dark:bg-black/30 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            Mechanism & Outcome:
          </p>
          <p>{example.outcomeExplanation}</p>
        </div>
      )}

      {/* Mandatory Illustration Disclaimer */}
      <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 pt-1">
        <AlertCircle className="w-3 h-3 shrink-0" />
        <span>
          {example.disclaimer ||
            "Illustration only — not a guarantee, prediction, or promise of future returns."}
        </span>
      </div>
    </div>
  );
}
