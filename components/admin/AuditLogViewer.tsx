import React from "react";
import { AuditLog } from "@/lib/types";
import { History, User, Clock, FileText } from "lucide-react";
import { formatDate } from "@/lib/utils/formatters";

export function AuditLogViewer({ logs }: { logs: AuditLog[] }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="p-6 text-center text-xs text-neutral-400">
        No audit log events recorded yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-[#0071e3]" />
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
            Statutory Field Modification Log (Audit Trail)
          </h3>
        </div>
        <span className="text-xs text-neutral-400">{logs.length} logged entries</span>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {logs.map((log) => (
          <div
            key={log.id}
            className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-2 text-xs"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-neutral-900 dark:text-white capitalize">
                Record: {log.recordId.replace(/-/g, " ")}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono">
                {new Date(log.changedAt).toLocaleString("en-IN")}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 space-y-1">
              <div>
                <span className="text-neutral-400">Field(s): </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{log.field}</span>
              </div>
              <div className="truncate">
                <span className="text-neutral-400">Old Value: </span>
                <span>{log.oldValue}</span>
              </div>
              <div className="truncate">
                <span className="text-emerald-600 font-bold">New Value: </span>
                <span>{log.newValue}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3 text-neutral-400" />
                <span>{log.changedBy}</span>
              </span>
              <span className="italic">Reason: {log.reason}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
