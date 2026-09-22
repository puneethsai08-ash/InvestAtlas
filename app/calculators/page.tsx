import React from "react";
import { CompoundingCalculator } from "@/components/calculators/CompoundingCalculator";
import { HorizonCalculator } from "@/components/calculators/HorizonCalculator";
import { InflationCalculator } from "@/components/calculators/InflationCalculator";

export const metadata = {
  title: "Investment Calculators — InvestAtlas India",
  description:
    "Use educational calculators to understand compounding, time horizons, and the effect of inflation on purchasing power.",
};

export default function CalculatorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
          Educational Tools
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Investment Calculators
        </h1>
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
          Explore how time, regular contributions, and inflation can affect your money. These illustrations are educational and are not investment recommendations.
        </p>
      </div>

      <div className="space-y-8">
        <CompoundingCalculator />
        <HorizonCalculator />
        <InflationCalculator />
      </div>
    </div>
  );
}
