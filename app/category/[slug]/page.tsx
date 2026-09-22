import React from "react";
import { db } from "@/lib/data/store";
import { notFound } from "next/navigation";
import Link from "next/link";
import { InvestmentCategory } from "@/lib/types";
import { InvestmentCard } from "@/components/explore/InvestmentCard";
import {
  Building2,
  TrendingUp,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

export async function generateStaticParams() {
  const categories = db.getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = db.getCategoryBySlug(slug);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: `${cat.name} — InvestAtlas India`,
    description: cat.shortDescription,
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = db.getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const allInvestments = db.getAllInvestments();
  const investments = allInvestments.filter((i) => i.categoryId === category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-neutral-400">
        <Link href="/" className="hover:text-[#0071e3]">Home</Link>
        <span>/</span>
        <Link href="/explore" className="hover:text-[#0071e3]">Explore</Link>
        <span>/</span>
        <span className="text-neutral-600 dark:text-neutral-300">{category.name}</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
            <Building2 className="w-8 h-8 text-[#0071e3]" />
          </div>
          <div>
            <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider block mb-0.5">
              Category • {investments.length} options tracked
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {category.name}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white">What You'll Find Here</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {category.beginnerDescription}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Regulatory Authority</h3>
            <p className="text-sm font-semibold text-neutral-800 dark:text-white">
              {category.regulatoryAuthority}
            </p>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-neutral-500 uppercase block">Key Use Cases</span>
              <ul className="space-y-1">
                {category.keyUseCases.map((uc, idx) => (
                  <li key={idx} className="text-xs text-neutral-700 dark:text-neutral-300">• {uc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Warnings */}
        {category.majorRisks && category.majorRisks.length > 0 && (
          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04]">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-3">Major Risk Dimensions</h3>
            <ul className="space-y-2">
              {category.majorRisks.map((risk, idx) => (
                <li key={idx} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">!</span>
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Invested Products Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Investment Products in This Category
        </h2>
        {investments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {investments.map((inv) => (
              <InvestmentCard key={inv.id} investment={inv} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
            <p className="text-sm text-neutral-500">No investments currently tagged under this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
