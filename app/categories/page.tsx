import React from "react";
import Link from "next/link";
import { investmentService } from "@/lib/services/investmentService";
import {
  ShieldCheck,
  Building2,
  TrendingUp,
  LineChart,
  Receipt,
  Coins,
  Home,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Investment Categories — InvestAtlas India",
  description:
    "Browse major investment categories available in India: Government Savings, Bank Deposits, Market-Linked Funds, Equities, Bonds, Gold, Real Assets, Retirement, and Advanced AIFs.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
  Building2: <Building2 className="w-8 h-8 text-blue-600" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-purple-600" />,
  LineChart: <LineChart className="w-8 h-8 text-indigo-600" />,
  Receipt: <Receipt className="w-8 h-8 text-amber-600" />,
  Coins: <Coins className="w-8 h-8 text-yellow-600" />,
  Home: <Home className="w-8 h-8 text-teal-600" />,
  Clock: <Clock className="w-8 h-8 text-orange-600" />,
  Award: <Award className="w-8 h-8 text-rose-600" />,
};

export default function CategoriesPage() {
  const categories = investmentService.getAllCategories();
  const allInvestments = investmentService.getAllInvestments();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="mb-10">
        <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
          Indian Investment Taxonomy
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
          All Major Investment Categories
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl">
          Every investment product in India belongs to a distinct regulatory, risk, and return framework. Explore them by asset class below.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((cat) => {
          const catInvestments = allInvestments.filter((i) => i.categoryId === cat.id);
          const icon = ICON_MAP[cat.iconName] || <ShieldCheck className="w-8 h-8 text-blue-600" />;

          return (
            <div
              key={cat.id}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 shrink-0">
                    {icon}
                  </div>
                  <div className="space-y-2">
                    <Link
                      href={`/category/${cat.slug}`}
                      className="text-xl font-bold text-neutral-900 dark:text-white hover:text-[#0071e3] transition-colors"
                    >
                      {cat.name}
                    </Link>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                      {cat.beginnerDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cat.keyUseCases.slice(0, 3).map((uc, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#0071e3] text-xs font-bold">
                    {catInvestments.length} Options
                  </span>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:underline"
                  >
                    <span>Explore Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Investable Items */}
              {catInvestments.length > 0 && (
                <div className="mt-5 pt-5 border-t border-black/[0.04] dark:border-white/[0.04] flex flex-wrap gap-2">
                  {catInvestments.map((inv) => (
                    <Link
                      key={inv.id}
                      href={`/investment/${inv.slug}`}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
                    >
                      {inv.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
