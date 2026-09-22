import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileText, Ban, ExternalLink } from "lucide-react";

export function NeutralityBanner() {
  const commitments = [
    {
      title: "No Trading or Brokerage Accounts",
      description: "We do not sell securities, open Demat accounts, or earn distributor commissions.",
      icon: Ban,
    },
    {
      title: "No 'Best Investment' Rankings",
      description: "Every investment has specific risk, lock-in, and tax trade-offs. We never crown arbitrary 'winners'.",
      icon: ShieldCheck,
    },
    {
      title: "Authoritative Source Attribution",
      description: "Every fact, lock-in rule, and tax provision is linked to statutory notifications.",
      icon: FileText,
    },
    {
      title: "Transparent Last-Updated Dates",
      description: "Time-sensitive interest rates and tax laws always display explicit effective dates.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 text-white shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Neutrality Oath</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Built to educate Indian beginners, never to sell financial products.
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            The Indian financial landscape is saturated with marketing disguised as education. InvestAtlas exists as a public, non-commercial discovery utility to ensure every citizen can understand their options objectively before taking action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <span>Read our full editorial methodology and source verification framework.</span>
          <Link
            href="/methodology"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            <span>Editorial Methodology</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
