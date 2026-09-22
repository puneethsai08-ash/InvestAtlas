import React from "react";
import { Source } from "@/lib/types";
import { ExternalLink, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { formatDate } from "@/lib/utils/formatters";

export function SourceBadgeList({ sources }: { sources: Source[] }) {
  if (!sources || sources.length === 0) {
    return (
      <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-500">
        Source records currently undergoing scheduled verification.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Authoritative & Statutory Source Citations</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sources.map((src) => (
          <div
            key={src.id}
            className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/80 border border-black/[0.04] dark:border-white/[0.04] flex flex-col justify-between space-y-2 text-xs"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white line-clamp-1">
                  {src.organization}
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-semibold uppercase rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {src.sourceType}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-[11px] leading-snug">
                {src.title}
              </p>
              {src.documentReference && (
                <p className="text-[10px] text-neutral-400 font-mono mt-1">
                  Ref: {src.documentReference}
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-black/[0.03] dark:border-white/[0.03] flex items-center justify-between text-[10px] text-neutral-400">
              <span>Verified: {formatDate(src.accessedDate)}</span>
              {src.url ? (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#0071e3] hover:underline"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span>Statutory Publication</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
