import React from "react";
import { ReturnType } from "@/lib/types";
import { Badge } from "./Badge";
import { TrendingUp, Lock, Sparkles, RefreshCw, BarChart2 } from "lucide-react";

export function ReturnBadge({ returnType, showIcon = true }: { returnType: ReturnType; showIcon?: boolean }) {
  const getProps = (type: ReturnType) => {
    switch (type) {
      case "fixed":
        return {
          variant: "success" as const,
          label: "Fixed Return",
          icon: <Lock className="w-3 h-3 text-emerald-600" />,
        };
      case "declared_rate":
        return {
          variant: "info" as const,
          label: "Declared Rate",
          icon: <Sparkles className="w-3 h-3 text-blue-600" />,
        };
      case "market_linked":
        return {
          variant: "purple" as const,
          label: "Market-Linked",
          icon: <TrendingUp className="w-3 h-3 text-purple-600" />,
        };
      case "coupon":
      case "yield":
        return {
          variant: "warning" as const,
          label: "Coupon / Yield",
          icon: <BarChart2 className="w-3 h-3 text-amber-600" />,
        };
      case "variable":
        return {
          variant: "secondary" as const,
          label: "Floating / Variable",
          icon: <RefreshCw className="w-3 h-3 text-neutral-500" />,
        };
      default:
        return {
          variant: "default" as const,
          label: "Product Dependent",
          icon: null,
        };
    }
  };

  const { variant, label, icon } = getProps(returnType);

  return (
    <Badge variant={variant} size="sm">
      {showIcon && icon}
      <span>{label}</span>
    </Badge>
  );
}
