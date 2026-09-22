"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { InvestmentCategory } from "@/lib/types";
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

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  Building2: <Building2 className="w-6 h-6 text-blue-600" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-purple-600" />,
  LineChart: <LineChart className="w-6 h-6 text-indigo-600" />,
  Receipt: <Receipt className="w-6 h-6 text-amber-600" />,
  Coins: <Coins className="w-6 h-6 text-yellow-600" />,
  Home: <Home className="w-6 h-6 text-teal-600" />,
  Clock: <Clock className="w-6 h-6 text-orange-600" />,
  Award: <Award className="w-6 h-6 text-rose-600" />,
};

export function CategoryGrid({
  categories,
  investmentCounts,
}: {
  categories: InvestmentCategory[];
  investmentCounts: Record<string, number>;
}) {
  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
            <span className="eyebrow">
            Taxonomy & Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mt-1">
            Major Investment Categories in India
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] mt-1 max-w-xl">
            Every investment product belongs to a distinct legal, regulatory, and risk category. Explore by asset class.
          </p>
        </div>

        <Link
          href="/categories"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:underline"
        >
          <span>View all category deep dives</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => {
          const count = investmentCounts[cat.id] || 0;
          const icon = ICON_MAP[cat.iconName] || <ShieldCheck className="w-6 h-6 text-blue-600" />;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
            >
              <Link
                href={`/category/${cat.slug}`}
                className="group flex flex-col justify-between h-full p-6 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-[0_10px_28px_-18px_rgba(16,42,67,0.5)] hover:border-teal-600/50 hover:shadow-[0_20px_38px_-18px_rgba(15,118,110,0.38)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[var(--secondary)] group-hover:scale-105 transition-transform">
                      {icon}
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)]">
                      {count} {count === 1 ? "Option" : "Options"}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-3 mb-4">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t section-rule flex items-center justify-between text-xs text-[var(--muted)]">
                  <span className="truncate max-w-[180px] font-medium text-[11px]">
                    {cat.regulatoryAuthority}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-teal-700 dark:text-teal-300 group-hover:translate-x-0.5 transition-transform">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
