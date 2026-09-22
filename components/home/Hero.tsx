"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Compass, BookOpen, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/explore?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Apple Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/10 to-teal-400/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* Neutrality & Scope Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.1] text-xs font-medium text-neutral-800 dark:text-neutral-200"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Independent & Non-Commercial • Official Government & Regulatory Data</span>
        </motion.div>

        {/* Apple Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white display-large max-w-4xl mx-auto"
        >
          Understand every investment option in India.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Learn how investments work, what they require, how returns are generated, and how they differ — in simple language before you commit a single rupee.
        </motion.p>

        {/* Search Bar Input */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="max-w-2xl mx-auto pt-2"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center bg-white dark:bg-[#1c1c1e] p-2 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/10 dark:border-white/10"
          >
            <Search className="w-5 h-5 text-neutral-400 ml-3.5 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search an investment, PPF, mutual funds, lock-in, taxes..."
              className="flex-1 px-3 py-2 text-sm md:text-base bg-transparent border-none outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
            />
            <Button type="submit" size="sm" variant="primary" className="rounded-full px-5">
              Explore
            </Button>
          </form>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-neutral-500">
            <span className="font-medium text-neutral-400">Popular:</span>
            {[
              { name: "Public Provident Fund", slug: "public-provident-fund" },
              { name: "Fixed Deposit", slug: "fixed-deposit" },
              { name: "Index Funds", slug: "index-fund" },
              { name: "Sovereign Gold Bonds", slug: "sovereign-gold-bond" },
              { name: "NPS Pension", slug: "national-pension-system" },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/investment/${item.slug}`}
                className="px-2.5 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Primary & Secondary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          <Link href="/explore">
            <Button size="lg" variant="primary" className="rounded-full shadow-lg shadow-blue-500/20">
              <Compass className="w-4 h-4" />
              <span>Explore All Investments</span>
            </Button>
          </Link>

          <Link href="/learn">
            <Button size="lg" variant="secondary" className="rounded-full">
              <BookOpen className="w-4 h-4" />
              <span>Start Beginner Curriculum</span>
            </Button>
          </Link>

          <Link href="/compare">
            <Button size="lg" variant="outline" className="rounded-full">
              <span>Compare Side-by-Side</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
