"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Columns2, X, ArrowRight, Trash2 } from "lucide-react";
import { useComparison } from "@/lib/context/ComparisonContext";
import { Button } from "@/components/ui/Button";

export function ComparisonDrawer() {
  const router = useRouter();
  const pathname = usePathname();
  const { selectedSlugs, removeInvestment, clearAll } = useComparison();

  // Hide on compare page itself
  if (pathname === "/compare" || selectedSlugs.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.96 }}
        transition={{ type: "spring", damping: 22, stiffness: 320 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[92%] sm:w-auto"
      >
        <div className="apple-glass rounded-full px-4 py-2.5 shadow-2xl border border-black/10 dark:border-white/15 flex items-center justify-between gap-4">
          {/* Left: Info & Chips */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 max-w-[280px] sm:max-w-md scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shrink-0">
              <Columns2 className="w-4 h-4 text-[#0071e3]" />
              <span className="hidden sm:inline">Compare</span>
              <span className="px-1.5 py-0.2 bg-[#0071e3]/15 text-[#0071e3] font-bold rounded-full text-[11px]">
                {selectedSlugs.length}/4
              </span>
            </div>

            <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700 shrink-0" />

            {/* Investment Slugs as Pills */}
            <div className="flex items-center gap-1.5 shrink-0">
              {selectedSlugs.map((slug) => (
                <span
                  key={slug}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/5 dark:border-white/5"
                >
                  <span className="truncate max-w-[90px] sm:max-w-[120px] capitalize">
                    {slug.replace(/-/g, " ")}
                  </span>
                  <button
                    onClick={() => removeInvestment(slug)}
                    className="hover:text-rose-500 transition-colors p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={clearAll}
              title="Clear all"
              className="p-1.5 rounded-full text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>

            <Button
              size="sm"
              variant="primary"
              onClick={() => router.push(`/compare?slugs=${selectedSlugs.join(",")}`)}
              className="rounded-full shadow-md text-xs font-semibold gap-1.5 px-3.5"
            >
              <span>Compare</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
