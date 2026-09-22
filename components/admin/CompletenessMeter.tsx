import React from "react";
import { Investment } from "@/lib/types";
import { CheckCircle2, AlertTriangle, FileText, Activity } from "lucide-react";

export function CompletenessMeter({
  metrics,
  investments,
}: {
  metrics: {
    total: number;
    published: number;
    draft: number;
    review: number;
    averageCompleteness: number;
    totalSources: number;
    activeSources: number;
  };
  investments: Investment[];
}) {
  return (
    <div className="space-y-6">
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">
            Total Catalog Records
          </span>
          <div className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
            {metrics.total}
          </div>
          <span className="text-[11px] text-emerald-600 font-medium">
            {metrics.published} Published
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">
            Average Completeness
          </span>
          <div className="text-2xl font-bold text-[#0071e3] mt-1">
            {metrics.averageCompleteness}%
          </div>
          <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              style={{ width: `${metrics.averageCompleteness}%` }}
              className="bg-[#0071e3] h-full rounded-full"
            />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">
            Under Review / Draft
          </span>
          <div className="text-2xl font-bold text-amber-600 mt-1">
            {metrics.draft + metrics.review}
          </div>
          <span className="text-[11px] text-neutral-400">Requires verification</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">
            Active Verified Sources
          </span>
          <div className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
            {metrics.activeSources} / {metrics.totalSources}
          </div>
          <span className="text-[11px] text-emerald-600 font-medium">100% Operational</span>
        </div>
      </div>

      {/* Completeness Leaderboard / Table */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
            Data Quality & Completeness Status
          </h3>
          <span className="text-xs text-neutral-400">
            Mandatory: 80%+ required for public release
          </span>
        </div>

        <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
          {investments.map((inv) => {
            const score = inv.completenessScore || 0;
            return (
              <div
                key={inv.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.03] dark:border-white/[0.03] text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    {inv.name}
                  </span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] uppercase font-bold ${
                      inv.status === "published"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                    }`}
                  >
                    {inv.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-24 sm:w-36 bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${score}%` }}
                      className={`h-full rounded-full ${
                        score >= 80
                          ? "bg-emerald-500"
                          : score >= 60
                          ? "bg-amber-500"
                          : "bg-rose-500"
                      }`}
                    />
                  </div>
                  <span className="font-mono font-bold text-neutral-700 dark:text-neutral-300 w-8 text-right">
                    {score}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
