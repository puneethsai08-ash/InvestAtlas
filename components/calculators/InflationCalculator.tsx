"use client";

import React, { useState } from "react";
import { formatCurrency } from "@/lib/utils/formatters";
import { Flame, AlertTriangle, TrendingDown } from "lucide-react";

export function InflationCalculator() {
  const [currentAmount, setCurrentAmount] = useState<number>(100000);
  const [inflationRate, setInflationRate] = useState<number>(6.0);

  const calculateFutureValue = (years: number) => {
    // Real purchasing power = Amount / (1 + i)^n
    const purchasingPower = currentAmount / Math.pow(1 + inflationRate / 100, years);
    // Future cost of same basket = Amount * (1 + i)^n
    const futureCost = currentAmount * Math.pow(1 + inflationRate / 100, years);
    return {
      purchasingPower: Math.round(purchasingPower),
      futureCost: Math.round(futureCost),
    };
  };

  const milestones = [5, 10, 15, 20];

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
            Purchasing Power Risk
          </span>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-0.5">
            The Silent Drag of Inflation in India
          </h2>
        </div>
        <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600">
          <Flame className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders Input Area */}
        <div className="space-y-5">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                Today&apos;s Purchasing Capital
              </span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                {formatCurrency(currentAmount)}
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={currentAmount}
              onChange={(e) => setCurrentAmount(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                Assumed Inflation Rate (CPI India)
              </span>
              <span className="font-mono font-bold text-rose-600">
                {inflationRate}% p.a.
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="10"
              step="0.5"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-xs text-neutral-600 dark:text-neutral-400 space-y-1 leading-relaxed">
            <p className="font-semibold text-neutral-800 dark:text-neutral-200">
              Why Real Returns Matter:
            </p>
            <p>
              If your savings earn 6% interest in a bank deposit while consumer price inflation is 6%, your <strong>real return is 0%</strong> before taxes, and negative after taxes.
            </p>
          </div>
        </div>

        {/* Milestone Degradation Grid */}
        <div className="space-y-3">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
            Purchasing Power Erosion Over Time
          </span>

          <div className="grid grid-cols-2 gap-2.5">
            {milestones.map((yr) => {
              const res = calculateFutureValue(yr);
              const percentLoss = Math.round(
                ((currentAmount - res.purchasingPower) / currentAmount) * 100
              );

              return (
                <div
                  key={yr}
                  className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] space-y-1 text-xs"
                >
                  <div className="flex items-center justify-between font-bold text-neutral-900 dark:text-white">
                    <span>After {yr} Years</span>
                    <span className="text-rose-600 text-[10px]">-{percentLoss}%</span>
                  </div>
                  <div className="text-sm font-extrabold text-neutral-800 dark:text-neutral-200 font-mono">
                    {formatCurrency(res.purchasingPower)}
                  </div>
                  <p className="text-[10px] text-neutral-400">
                    Basket will cost: {formatCurrency(res.futureCost)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
