import React from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  glass = false,
  hoverable = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 md:p-6 transition-all duration-200",
        glass
          ? "apple-glass"
          : "bg-white border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:bg-[#161618] dark:border-white/[0.08]",
        hoverable &&
          "hover:border-[#0071e3]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
