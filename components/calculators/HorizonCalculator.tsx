"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, ShieldCheck, ArrowRight, TrendingUp, AlertTriangle } from "lucide-react";

export function HorizonCalculator() {
  const [selectedHorizon, setSelectedHorizon] = useState<string>("short");

  const horizons = [
    {
      id: "emergency",
      label: "Immediate / Emergency",
      duration: "< 3 Months",
      description: "Capital that might be needed immediately with zero tolerance for capital loss.",
      recommendedCategories: [
        { name: "Bank Fixed / Savings Deposit", risk: "Low", returnType: "Fixed / Insured" },
        { name: "Treasury Bills (91-day)", risk: "Low", returnType: "Yield / Sovereign" },
      ],
    },
    {
      id: "short",
      label: "Short Term",
      duration: "1 to 3 Years",
      description: "Committed near-term goals (education fees, travel, down payment buffer).",
      recommendedCategories: [
        { name: "Post Office Time Deposit", risk: "Low", returnType: "Declared Rate" },
        { name: "Corporate Bonds (AAA Rated)", risk: "Low to Moderate", returnType: "Fixed Coupon" },
      ],
    },
    {
      id: "medium",
      label: "Medium Term",
      duration: "3 to 5 Years",
      description: "Balance between moderate capital growth and capital stability.",
      recommendedCategories: [
        { name: "National Savings Certificate (NSC)", risk: "Low", returnType: "Declared Rate" },
        { name: "Sovereign Gold Bonds (Secondary)", risk: "Moderate", returnType: "Gold Price + Coupon" },
      ],
    },
    {
      id: "long",
      label: "Long Term",
      duration: "> 5 Years",
      description: "Long-range wealth compounding and retirement where volatility can be absorbed.",
      recommendedCategories: [
        { name: "Public Provident Fund (PPF)", risk: "Low", returnType: "Declared Rate (Tax Free)" },
        { name: "Index Funds & ETFs", risk: "Moderate to High", returnType: "Market-Linked Equity" },
        { name: "National Pension System (NPS)", risk: "Moderate", returnType: "Market / Sovereign" },
      ],
    },
  ];

  const current = horizons.find((h) => h.id === selectedHorizon) || horizons[0];

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
            Horizon Matching Framework
          </span>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-0.5">
            Asset Allocation by Time Horizon
          </h2>
        </div>
        <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600">
          <Clock className="w-5 h-5" />
        </div>
      </div>

      {/* Segmented Horizon Picker */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {horizons.map((h) => (
          <button
            key={h.id}
            onClick={() => setSelectedHorizon(h.id)}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              selectedHorizon === h.id
                ? "bg-[#0071e3] text-white border-[#0071e3] shadow-sm"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200"
            }`}
          >
            <div className="text-xs font-bold">{h.label}</div>
            <div className={`text-[10px] ${selectedHorizon === h.id ? "text-blue-100" : "text-neutral-400"}`}>
              {h.duration}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Details */}
      <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] space-y-4">
        <div>
          <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-1">
            Goal Profile: {current.label} ({current.duration})
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {current.description}
          </p>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
            Typically Aligned Categories:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {current.recommendedCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white block">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    {item.returnType}
                  </span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  {item.risk}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-[11px] text-neutral-400 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Educational guideline only. Not a portfolio recommendation or personalized mandate.
          </span>
        </div>
      </div>
    </div>
  );
}
