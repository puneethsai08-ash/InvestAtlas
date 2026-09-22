import React from "react";
import { db } from "@/lib/data/store";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Investment, Source } from "@/lib/types";
import { KeyFactsStrip } from "@/components/investment/KeyFactsStrip";
import { RiskAnalysis } from "@/components/investment/RiskAnalysis";
import { TaxExplainer } from "@/components/investment/TaxExplainer";
import { ExampleScenario } from "@/components/investment/ExampleScenario";
import { FaqAccordion } from "@/components/investment/FaqAccordion";
import { SourceBadgeList } from "@/components/investment/SourceBadgeList";
import { InvestmentCard } from "@/components/explore/InvestmentCard";
import { CompareButton } from "@/components/investment/CompareButton";
import { formatDate } from "@/lib/utils/formatters";
import {
  ShieldCheck,
  ArrowLeft,
  FileText,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export async function generateStaticParams() {
  const investments = db.getAllInvestments();
  return investments.map((inv) => ({ slug: inv.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const investment = db.getInvestmentBySlug(params.slug);
  if (!investment) return { title: "Investment Not Found" };
  return {
    title: `${investment.name} — InvestAtlas India`,
    description: investment.shortDescription,
  };
}

export default async function InvestmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const investment = db.getInvestmentBySlug(slug);

  if (!investment) notFound();

  const sources = investment.sourceIds
    .map((id) => db.getSourceById(id))
    .filter((s): s is Source => s !== undefined);

  const relatedInvestments = investment.relatedInvestmentSlugs
    .map((s) => db.getInvestmentBySlug(s))
    .filter((i): i is Investment => i !== undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
        <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold">Educational Context Only</p>
          <p className="mt-1 leading-relaxed">InvestAtlas India provides objective educational information. This is not a solicitation or recommendation to buy, sell, or hold any financial product.</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${investment.status === "published" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"}`}>
                {investment.status}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950/50 text-[#0071e3] border border-blue-200/50 dark:border-blue-800/40">
                Completeness: {investment.completenessScore}%
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">{investment.name}</h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-3xl leading-relaxed">{investment.shortDescription}</p>
          </div>
          <div className="flex items-center">
            <CompareButton slug={slug} />
          </div>
        </div>
      </section>

      <KeyFactsStrip investment={investment} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">What is it?</h2>
            <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">{investment.beginnerExplanation}</div>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-[#0071e3]" /><span>How Does It Work?</span></h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-neutral-700 dark:text-neutral-300">
                {investment.mechanismSteps.map((step, idx) => <li key={idx} className="pl-1 leading-relaxed">{step}</li>)}
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">Eligibility & Regulation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] space-y-1.5">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Eligibility</span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">{investment.eligibility}</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] space-y-1.5">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Regulator</span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 font-semibold">{investment.administeringAuthority || investment.regulation || "N/A"}</p>
              </div>
            </div>
          </section>

          <ExampleScenario example={investment.practicalExample} />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">How to Access / Start</h3>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                {investment.accessMethods.map((m, idx) => (<li key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" /><span>{m}</span></li>))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Common Beginner Mistakes</h3>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                {investment.commonMistakes.map((mistake, idx) => (<li key={idx} className="flex items-start gap-2"><span className="w-3.5 h-3.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5">X</span><span>{mistake}</span></li>))}
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
            <FaqAccordion faqs={investment.faqs} />
          </section>
        </div>

        <aside className="space-y-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#0071e3]" /> Risk Analysis</h3>
            <RiskAnalysis investment={investment} />
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" /> Tax Treatment</h3>
            <TaxExplainer investment={investment} />
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2"><ExternalLink className="w-4 h-4 text-[#0071e3]" /> Authoritative Sources</h3>
            <SourceBadgeList sources={sources} />
          </div>
          {relatedInvestments.length > 0 && (
            <div className="p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Related Investments</h3>
              <div className="space-y-3">{relatedInvestments.slice(0, 2).map((inv) => <InvestmentCard key={inv.id} investment={inv} />)}</div>
            </div>
          )}
        </aside>
      </div>

      <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.04] text-xs">
        <span className="text-neutral-400">Last verified: {formatDate(investment.lastVerifiedAt)} • Completeness: {investment.completenessScore}%</span>
        <Link href="/explore" className="text-[#0071e3] hover:underline font-semibold flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Explore More</Link>
      </div>

      <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/30 dark:border-blue-900/30 text-xs text-blue-900 dark:text-blue-200">
        <span className="font-bold">Editorial Note: </span>This record reflects publicly available statutory information retrieved from regulatory notifications.
      </div>
    </div>
  );
}
