import React from "react";
import { RiskLevel } from "@/lib/types";
import { Badge } from "./Badge";
import { getRiskLabel } from "@/lib/utils/formatters";
import { Shield, AlertTriangle, AlertCircle, Flame } from "lucide-react";

export function RiskBadge({ risk, showIcon = true }: { risk: RiskLevel; showIcon?: boolean }) {
  const getRiskProps = (r: RiskLevel) => {
    switch (r) {
      case "low":
        return {
          variant: "success" as const,
          icon: <Shield className="w-3 h-3 text-emerald-600" />,
        };
      case "low_to_moderate":
        return {
          variant: "info" as const,
          icon: <Shield className="w-3 h-3 text-blue-600" />,
        };
      case "moderate":
        return {
          variant: "warning" as const,
          icon: <AlertTriangle className="w-3 h-3 text-amber-600" />,
        };
      case "moderate_to_high":
        return {
          variant: "warning" as const,
          icon: <AlertCircle className="w-3 h-3 text-orange-600" />,
        };
      case "high":
      case "very_high":
        return {
          variant: "danger" as const,
          icon: <Flame className="w-3 h-3 text-rose-600" />,
        };
      default:
        return {
          variant: "default" as const,
          icon: null,
        };
    }
  };

  const { variant, icon } = getRiskProps(risk);

  return (
    <Badge variant={variant} size="sm">
      {showIcon && icon}
      <span>{getRiskLabel(risk)}</span>
    </Badge>
  );
}
