import React from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-100/70 dark:bg-neutral-950 border-t border-black/5 dark:border-white/5 pt-12 pb-16 text-xs text-neutral-500 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Mission & Official Stance */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-black/5 dark:border-white/5">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#0071e3] flex items-center justify-center text-white text-xs font-bold">
                IA
              </div>
              <span className="font-semibold text-sm text-neutral-900 dark:text-white">
                InvestAtlas India
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
              The beginner-first educational encyclopedia for every investment option in India. We normalize fragmented financial rules into standardized, plain-language comparisons backed by official government, RBI, SEBI, and PFRDA notifications.
            </p>
            <div className="flex items-center gap-2 pt-1 text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Non-Commercial • No Brokerage • Source-Grounded Data</span>
            </div>
          </div>

          {/* Column: Discover & Compare */}
          <div className="space-y-2.5">
            <span className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
              Discovery & Comparison
            </span>
            <ul className="space-y-1.5">
              <li>
                <Link href="/explore" className="hover:text-[#0071e3] transition-colors">
                  Explore All 35+ Investments
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#0071e3] transition-colors">
                  Browse by Category
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-[#0071e3] transition-colors">
                  Interactive Comparison Engine
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-[#0071e3] transition-colors">
                  Compounding & Inflation Visualizers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Education & Governance */}
          <div className="space-y-2.5">
            <span className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
              Knowledge & Governance
            </span>
            <ul className="space-y-1.5">
              <li>
                <Link href="/learn" className="hover:text-[#0071e3] transition-colors">
                  Beginner Curriculum (12 Modules)
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-[#0071e3] transition-colors">
                  A–Z Financial Glossary
                </Link>
              </li>
              <li>
                <Link href="/sources" className="hover:text-[#0071e3] transition-colors">
                  Authoritative Sources Directory
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-[#0071e3] transition-colors">
                  Content & Neutrality Policy
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#0071e3] transition-colors">
                  Data Operations Console (Admin)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Educational Neutrality Disclaimer */}
        <div className="pt-8 space-y-3">
          <div className="p-4 rounded-xl bg-neutral-200/50 dark:bg-neutral-900/50 border border-black/5 dark:border-white/5 space-y-1.5">
            <p className="font-semibold text-neutral-700 dark:text-neutral-300">
              Regulatory & Educational Disclaimer
            </p>
            <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              InvestAtlas India is an independent financial education portal and is <strong>NOT</strong> an investment adviser, broker, asset management company, or portfolio manager registered under SEBI. No content on this webapp constitutes personalized financial advice, a stock recommendation, or a solicitation to buy or sell securities. Rates, lock-ins, and taxation rules are governed by statutory notifications from the Government of India, RBI, SEBI, and PFRDA, and are subject to periodic regulatory amendments. Always consult a qualified professional before making capital commitments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px]">
            <p>© {new Date().getFullYear()} InvestAtlas India. Crafted for Indian retail investors.</p>
            <div className="flex items-center gap-4">
              <Link href="/methodology" className="hover:underline">
                Methodology
              </Link>
              <span>•</span>
              <Link href="/sources" className="hover:underline">
                Verified Sources
              </Link>
              <span>•</span>
              <Link href="/admin" className="hover:underline flex items-center gap-1">
                Data Health & Audit <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
