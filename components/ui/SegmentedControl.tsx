"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface Option<T extends string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
  count?: number;
}

interface SegmentedControlProps<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  size?: "sm" | "md";
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
  size = "md",
}: SegmentedControlProps<T>) {
  return (
    <div
      className={cn(
        "relative inline-flex p-1 bg-neutral-200/70 dark:bg-neutral-800/80 rounded-full border border-black/5 dark:border-white/5 select-none",
        size === "sm" ? "h-8" : "h-10",
        className
      )}
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "relative z-10 inline-flex items-center justify-center gap-1.5 px-3.5 text-xs md:text-sm font-medium rounded-full transition-colors cursor-pointer",
              isSelected
                ? "text-neutral-900 dark:text-white font-semibold"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white",
              size === "sm" && "px-2.5 text-xs"
            )}
          >
            {opt.icon && <span className="w-3.5 h-3.5">{opt.icon}</span>}
            <span>{opt.label}</span>
            {opt.count !== undefined && (
              <span
                className={cn(
                  "ml-1 px-1.5 py-0.2 text-[10px] rounded-full font-mono",
                  isSelected
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-black/10 text-neutral-600 dark:bg-white/15 dark:text-neutral-300"
                )}
              >
                {opt.count}
              </span>
            )}
            {isSelected && (
              <motion.div
                layoutId="segmented-pill"
                className="absolute inset-0 bg-white dark:bg-neutral-700 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)] z-[-1]"
                transition={{
                  type: "spring",
                  damping: 24,
                  stiffness: 350,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
