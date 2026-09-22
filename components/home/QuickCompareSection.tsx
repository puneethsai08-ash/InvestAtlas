"use client";

import React from "react";
import Link from "next/link";
import { Columns2, ArrowRight, Zap, Shield, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function QuickCompareSection() {
  const popularComparisons = [
    {
      title: "Fixed Deposit vs Public Provident Fund",
      slugs: ["fixed-deposit", "public-provident-fund"],
      tagline: "Bank liquidity & tax drag vs 15-year sovereign tax-free compounding",
      chips: ["Guaranteed / Declared", "Tax Comparison", "Liquidity vs Lock-in"],
    },
    {
      title: "Index Fund vs Exchange Traded Fund (ETF)",
      slugs: ["index-fund", "exchange-traded-fund"],
      tagline: "Demat-free auto-investing vs Real-time exchange trading flexibility",
      chips: ["Passive Equity", "Expense Ratios", "Trading Mechanics"],
    },
    {
      title: "Sovereign Gold Bonds vs Gold ETF",
      slugs: ["sovereign-gold-bond", "gold-etf"],
      tagline: "2.5% annual coupon + tax exemption vs High intraday liquidity",
      chips: ["Commodities", "Tax Exemption", "Sovereign Guarantee"],
    },
    {
      title: "Government Securities (G-Sec) vs Corporate Bonds",
      slugs: ["government-securities", "corporate-bonds"],
      tagline: "Zero credit risk sovereign yield vs Higher credit spread returns",
      chips: ["Fixed Income", "Credit Risk", "RBI Direct Access"],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-neutral-100/60 dark:bg-neutral-900/40 border-y border-black/[0.04] dark:border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
              Deterministic Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Compare Common Investment Dilemmas
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
              Inspect side-by-side differences across 14 standardized dimensions without marketing bias.
            </p>
          </div>

          <Link href="/compare">
            <Button variant="secondary" size="sm" className="rounded-full">
              <Columns2 className="w-4 h-4" />
              <span>Open Custom Compare Tool</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {popularComparisons.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.chips.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">14 comparison criteria</span>
                <Link
                  href={`/compare?slugs=${item.slugs.join(",")}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  <span>Compare Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
