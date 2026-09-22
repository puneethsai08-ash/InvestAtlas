import React from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2";

    const variantStyles = {
      primary:
        "bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900 shadow-sm shadow-teal-700/20",
      secondary:
        "bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400",
      outline:
        "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 active:bg-slate-200",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100",
      glass:
        "apple-glass text-slate-900 hover:bg-white shadow-sm",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 shadow-sm shadow-rose-500/20",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-4.5 py-2 gap-2",
      lg: "text-base px-6 py-2.5 gap-2.5 font-semibold",
      icon: "w-9 h-9 p-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
