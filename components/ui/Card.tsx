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
          : "bg-white border-slate-200 shadow-[0_2px_12px_rgba(16,42,67,0.06)]",
        hoverable &&
          "hover:border-teal-600/50 hover:shadow-[0_8px_30px_rgba(15,118,110,0.12)] hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
