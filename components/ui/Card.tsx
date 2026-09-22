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
        "rounded-[var(--radius)] border p-5 md:p-6 transition-all duration-300",
        glass
          ? "apple-glass"
          : "surface-glass shadow-[0_8px_24px_-10px_rgba(16,42,67,0.22)] dark:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)]",
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
