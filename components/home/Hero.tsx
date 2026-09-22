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
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(15,118,110,0.16),transparent_68%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(79,209,197,0.12),transparent_68%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-7">
        {/* Neutrality & Scope Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)]/75 dark:bg-[var(--card)]/75 border border-[var(--border)] text-xs font-medium text-[var(--secondary-foreground)] shadow-sm"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700 dark:text-teal-300" />
          <span>Independent & Non-Commercial • Official Government & Regulatory Data</span>
        </motion.div>

        {/* Apple Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] display-large max-w-4xl mx-auto"
        >
          Understand every investment option in India.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto font-normal leading-relaxed"
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
            className="relative flex items-center bg-[var(--card)] p-2 rounded-[1.25rem] sm:rounded-full shadow-[0_18px_38px_-20px_rgba(16,42,67,0.45)] border border-[var(--border)]"
          >
            <Search className="w-5 h-5 text-neutral-400 ml-3.5 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search an investment, PPF, mutual funds, lock-in, taxes..."
              className="flex-1 min-w-0 px-3 py-2 text-sm md:text-base bg-transparent border-none outline-none text-[var(--foreground)] placeholder:text-[var(--muted)]"
            />
            <Button type="submit" size="sm" variant="primary" className="rounded-full px-5">
              Explore
            </Button>
          </form>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-[var(--muted-foreground)]">
            <span className="font-semibold text-[var(--muted)]">Popular:</span>
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
                className="px-2.5 py-1 rounded-full bg-[var(--secondary)] hover:brightness-95 text-[var(--secondary-foreground)] transition-colors"
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
          className="flex flex-wrap items-center justify-center gap-3 pt-3"
        >
          <Link href="/explore">
            <Button size="lg" variant="primary" className="rounded-full">
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
