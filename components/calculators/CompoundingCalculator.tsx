"use client";

import React, { useState } from "react";
import { formatCurrency } from "@/lib/utils/formatters";
import { Sparkles, AlertCircle, TrendingUp, RefreshCw } from "lucide-react";

export function CompoundingCalculator() {
  const [initialAmount, setInitialAmount] = useState<number>(50000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(5000);
  const [rate, setRate] = useState<number>(8);
  const [years, setYears] = useState<number>(10);

  // Future value calculation
  const monthlyRate = rate / 100 / 12;
  const totalMonths = years * 12;

  // FV of Lump sum = P * (1 + r)^n
  const fvLumpSum = initialAmount * Math.pow(1 + monthlyRate, totalMonths);

  // FV of Monthly SIP = PMT * [((1 + r)^n - 1) / r] * (1 + r)
  const fvSIP =
    monthlyContribution > 0 && monthlyRate > 0
      ? monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
      : monthlyContribution * totalMonths;

  const totalFutureValue = Math.round(fvLumpSum + fvSIP);
  const totalInvested = Math.round(initialAmount + monthlyContribution * totalMonths);
  const totalGains = Math.max(0, totalFutureValue - totalInvested);

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
            Educational Simulator
          </span>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-0.5">
            The Compounding & Time Visualizer
          </h2>
        </div>
        <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#0071e3]">
          <TrendingUp className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders Input Area */}
        <div className="space-y-5">
          {/* Initial Capital */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                Initial Starting Lump Sum
              </span>
              <span className="font-mono font-bold text-[#0071e3]">
                {formatCurrency(initialAmount)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              className="w-full accent-[#0071e3] cursor-pointer"
            />
          </div>

          {/* Monthly SIP */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                Monthly Regular Contribution (SIP)
              </span>
              <span className="font-mono font-bold text-[#0071e3]">
                {formatCurrency(monthlyContribution)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full accent-[#0071e3] cursor-pointer"
            />
          </div>

          {/* Rate of Return */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                Illustrative Compounding Rate (p.a.)
              </span>
              <span className="font-mono font-bold text-[#0071e3]">{rate}% p.a.</span>
            </div>
            <input
              type="range"
              min="4"
              max="15"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-[#0071e3] cursor-pointer"
            />
          </div>

          {/* Time Horizon */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                Time Horizon
              </span>
              <span className="font-mono font-bold text-[#0071e3]">{years} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-[#0071e3] cursor-pointer"
            />
          </div>
        </div>

        {/* Results Output Strip */}
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04]">
          <div className="space-y-4">
            <div>
              <span className="text-xs text-neutral-400 font-semibold uppercase">
                Estimated Corpus Value
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0071e3] tracking-tight font-mono mt-1">
                {formatCurrency(totalFutureValue)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-black/5 dark:border-white/5 text-xs">
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
                  Total Principal Deposited
                </span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200 font-mono">
                  {formatCurrency(totalInvested)}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-semibold">
                  Compounding Gain
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  +{formatCurrency(totalGains)}
                </span>
              </div>
            </div>

            {/* Ratio Bar */}
            <div className="space-y-1 pt-2">
              <div className="h-3 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden flex">
                <div
                  style={{
                    width: `${Math.min(100, (totalInvested / totalFutureValue) * 100)}%`,
                  }}
                  className="bg-neutral-400"
                  title="Principal"
                />
                <div
                  style={{
                    width: `${Math.min(100, (totalGains / totalFutureValue) * 100)}%`,
                  }}
                  className="bg-[#0071e3]"
                  title="Gains"
                />
              </div>
              <div className="flex justify-between text-[10px] text-neutral-400 font-semibold">
                <span>Principal ({Math.round((totalInvested / totalFutureValue) * 100)}%)</span>
                <span>Compounded Growth ({Math.round((totalGains / totalFutureValue) * 100)}%)</span>
              </div>
            </div>
          </div>

          {/* Educational Watermark / Notice */}
          <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 flex items-start gap-1.5 text-[10px] text-neutral-400">
            <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <span>
              Illustration only. Fixed compounding rates are hypothetical. Market-linked returns fluctuate daily and are not guaranteed.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
