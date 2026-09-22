import React from "react";
import { Source } from "@/lib/types";
import { ExternalLink, CheckCircle, XCircle, ShieldCheck } from "lucide-react";
import { formatDate } from "@/lib/utils/formatters";

export function SourceHealthTable({
  sources,
  onToggleStatus,
}: {
  sources: Source[];
  onToggleStatus: (sourceId: string) => Promise<void>;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
            Authoritative Source Directory & URL Health
          </h3>
        </div>
        <span className="text-xs text-neutral-400">{sources.length} tracked sources</span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#161618] shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-black/[0.06] dark:border-white/[0.08] bg-neutral-50 dark:bg-neutral-900/60 font-semibold text-neutral-500">
              <th className="p-3.5">Organization</th>
              <th className="p-3.5">Document Title & Reference</th>
              <th className="p-3.5">Source Type</th>
              <th className="p-3.5">Last Accessed</th>
              <th className="p-3.5 text-center">Status</th>
              <th className="p-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.03] dark:divide-white/[0.03]">
            {sources.map((src) => (
              <tr
                key={src.id}
                className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors"
              >
                <td className="p-3.5 font-bold text-neutral-900 dark:text-white max-w-[180px] truncate">
                  {src.organization}
                </td>
                <td className="p-3.5 text-neutral-700 dark:text-neutral-300 max-w-[280px]">
                  <div className="font-medium line-clamp-1">{src.title}</div>
                  {src.documentReference && (
                    <div className="text-[10px] text-neutral-400 font-mono">
                      {src.documentReference}
                    </div>
                  )}
                </td>
                <td className="p-3.5 capitalize text-neutral-500">{src.sourceType}</td>
                <td className="p-3.5 text-neutral-500 font-mono text-[11px]">
                  {formatDate(src.accessedDate)}
                </td>
                <td className="p-3.5 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      src.active
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                        : "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300"
                    }`}
                  >
                    {src.active ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3 text-rose-500" />
                        <span>Flagged</span>
                      </>
                    )}
                  </span>
                </td>
                <td className="p-3.5 text-right space-x-2">
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#0071e3] hover:underline font-semibold"
                    >
                      <span>Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    onClick={() => onToggleStatus(src.id)}
                    className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white underline ml-2 text-[11px]"
                  >
                    Toggle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
