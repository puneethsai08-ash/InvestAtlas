import React from "react";
import { db } from "@/lib/data/store";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GlossaryTerm, Investment } from "@/lib/types";
import {
  ArrowLeft,
  FileText,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { GlossaryCard } from "@/components/glossary/GlossaryCard";

export async function generateStaticParams() {
  const glossary = db.getAllGlossary();
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = db.getGlossaryBySlug(slug);
  if (!term) return { title: "Term Not Found" };
  return {
    title: `${term.term} — InvestAtlas India`,
    description: term.simpleDefinition,
  };
}

export default async function GlossaryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = db.getGlossaryBySlug(slug);

  if (!term) {
    notFound();
  }

  const relatedInvestments = term.relatedInvestmentSlugs
    .map((slug) => db.getInvestmentBySlug(slug))
    .filter((i): i is Investment => i !== undefined);

  const relatedTerms = term.relatedTermSlugs
    .map((slug) => db.getGlossaryBySlug(slug))
    .filter((t): t is GlossaryTerm => t !== undefined);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-neutral-400">
        <Link href="/" className="hover:text-[#0071e3]">Home</Link>
        <span>/</span>
        <Link href="/glossary" className="hover:text-[#0071e3]">Glossary</Link>
        <span>/</span>
        <span className="text-neutral-600 dark:text-neutral-300">{term.term}</span>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Term Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  term.difficulty === "beginner"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                    : term.difficulty === "intermediate"
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                    : "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                }`}
              >
                {term.difficulty}
              </span>
              {term.aliases && term.aliases.length > 0 && (
                <span className="text-xs text-neutral-400">
                  Also known as: {term.aliases.join(", ")}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {term.term}
            </h1>
          </div>

          <Link
            href="/glossary"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Glossary</span>
          </Link>
        </div>

        {/* Definitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0071e3]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0071e3]" />
              <span>Simple Definition</span>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {term.simpleDefinition}
            </p>
          </div>

          {term.technicalDefinition && (
            <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-800 dark:text-neutral-200">
                <FileText className="w-4 h-4 text-neutral-500" />
                <span>Technical Definition</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {term.technicalDefinition}
              </p>
            </div>
          )}
        </div>

        {/* Example */}
        {term.example && (
          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04]">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-2">
              Practical Example
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {term.example}
            </p>
          </div>
        )}

        {/* Related Investments */}
        {relatedInvestments.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
              Related Investments ({relatedInvestments.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedInvestments.map((inv) => (
                <GlossaryCard
                  key={inv.id}
                  term={{
                    id: inv.id,
                    slug: inv.slug,
                    term: inv.name,
                    aliases: inv.aliases,
                    simpleDefinition: inv.shortDescription,
                    difficulty: "beginner" as const,
                    relatedInvestmentSlugs: [],
                    relatedTermSlugs: [],
                    status: "published",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Related Terms */}
        {relatedTerms.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
              Related Glossary Terms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {relatedTerms.map((t) => (
                <Link key={t.id} href={`/glossary/${t.slug}`}>
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071e3]/40 transition-colors space-y-1">
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">
                      {t.term}
                    </span>
                    <p className="text-[11px] text-neutral-500 line-clamp-2">
                      {t.simpleDefinition}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Editorial Note */}
        <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/30 dark:border-blue-900/30 text-xs text-blue-900 dark:text-blue-200">
          <span className="font-bold">Editorial Note: </span>
          Definitions are maintained by the InvestAtlas India editorial team and are cross-referenced with regulatory publications.
        </div>
      </div>
    </div>
  );
}
