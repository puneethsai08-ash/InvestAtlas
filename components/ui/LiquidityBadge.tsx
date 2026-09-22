import React from "react";
import { LiquidityLevel } from "@/lib/types";
import { Badge } from "./Badge";
import { Zap, Clock, Lock } from "lucide-react";

export function LiquidityBadge({ liquidity }: { liquidity: LiquidityLevel }) {
  const getProps = (l: LiquidityLevel) => {
    switch (l) {
      case "high":
        return {
          variant: "success" as const,
          label: "High Liquidity",
          icon: <Zap className="w-3 h-3 text-emerald-600" />,
        };
      case "moderate":
        return {
          variant: "warning" as const,
          label: "Moderate Liquidity",
          icon: <Clock className="w-3 h-3 text-amber-600" />,
        };
      case "low":
      case "very_low":
        return {
          variant: "default" as const,
          label: "Low / Locked",
          icon: <Lock className="w-3 h-3 text-neutral-500" />,
        };
      default:
        return {
          variant: "secondary" as const,
          label: "Product Dependent",
          icon: null,
        };
    }
  };

  const { variant, label, icon } = getProps(liquidity);

  return (
    <Badge variant={variant} size="sm">
      {icon}
      <span>{label}</span>
    </Badge>
  );
}
