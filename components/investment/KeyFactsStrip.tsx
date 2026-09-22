"use client";

import React from "react";
import { Investment } from "@/lib/types";
import { Shield, Lock, Zap, Clock, Coins, TrendingUp, Info } from "lucide-react";
import { getRiskLabel, getLiquidityLabel, getReturnTypeLabel } from "@/lib/utils/formatters";

export function KeyFactsStrip({ investment }: { investment: Investment }) {
  const cards = [
    {
      title: "Minimum Investment",
      value: investment.minimumAmountText || "Product Dependent",
      subtext: investment.maximumAmountText ? `Max: ${investment.maximumAmountText}` : "No statutory cap",
      icon: Coins,
      accent: "text-blue-600 bg-blue-50 dark:bg-blue-950/40",
    },
    {
      title: "Return Mechanism",
      value: investment.returnInfo.returnType.replace("_", " ").toUpperCase(),
      subtext: investment.returnInfo.isGuaranteed ? "Sovereign / Guaranteed" : "Non-Guaranteed / Market",
      icon: TrendingUp,
      accent: "text-purple-600 bg-purple-50 dark:bg-purple-950/40",
    },
    {
      title: "Risk Classification",
      value: getRiskLabel(investment.riskLevel),
      subtext: investment.riskDescription,
      icon: Shield,
      accent: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40",
    },
    {
      title: "Lock-in Period",
      value: investment.lockInPeriod || "None",
      subtext: investment.liquidityLevel === "high" ? "Flexible exit" : "Pre-closure penalty applies",
      icon: Lock,
      accent: "text-amber-600 bg-amber-50 dark:bg-amber-950/40",
    },
    {
      title: "Liquidity Speed",
      value: investment.liquidityLevel.toUpperCase(),
      subtext: investment.liquidityDescription,
      icon: Zap,
      accent: "text-teal-600 bg-teal-50 dark:bg-teal-950/40",
    },
    {
      title: "Suggested Horizon",
      value: investment.suggestedHorizon || "Flexible",
      subtext: "Recommended holding period",
      icon: Clock,
      accent: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-6">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                {card.title}
              </span>
              <div className={`p-1.5 rounded-lg ${card.accent}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-neutral-900 dark:text-white capitalize">
                {card.value}
              </div>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-0.5">
                {card.subtext}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
