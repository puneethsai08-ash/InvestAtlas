"use client";

import React, { useState } from "react";
import { db } from "@/lib/data/store";
import { Investment, GlossaryTerm, LearningArticle } from "@/lib/types";
import Link from "next/link";
import { InvestmentCard } from "@/components/explore/InvestmentCard";
import { GlossaryCard } from "@/components/glossary/GlossaryCard";
import { AlphabetFilter } from "@/components/glossary/AlphabetFilter";
import { Search } from "lucide-react";


export default function GlossaryPage({
  searchParams,
}: {
  searchParams?: { letter?: string; q?: string };
}) {
  const glossary = db.getAllGlossary();
  const allInvestments = db.getAllInvestments();

  const [letterFilter, setLetterFilter] = useState(searchParams?.letter || "");
  const [searchQuery, setSearchQuery] = useState(searchParams?.q || "");

  let filtered = glossary;

  if (letterFilter) {
    filtered = filtered.filter((t) => t.term.toUpperCase().startsWith(letterFilter.toUpperCase()));
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.simpleDefinition.toLowerCase().includes(q) ||
        t.aliases.some((a) => a.toLowerCase().includes(q))
    );
  }

  const availableLetters = new Set(glossary.map((t) => t.term[0].toUpperCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
            Financial Lexicon
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Glossary of Investment Terms
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl">
            Understand technical jargon in plain Hindi and English. Every term is cross-linked to relevant investments and learning modules.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-lg">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search term, definition, or AKA..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-full bg-white dark:bg-[#1c1c1e] border border-black/[0.08] dark:border-white/[0.08] outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
          />
        </div>

        {/* Alphabet Filter */}
        <AlphabetFilter
          selectedLetter={letterFilter}
          onSelectLetter={setLetterFilter}
          availableLetters={availableLetters}
        />
      </div>

      {/* Results Count */}
      <p className="text-xs text-neutral-500">
        {filtered.length} term{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Glossary Cards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((term) => (
            <GlossaryCard key={term.id} term={term} />
          ))}
        </div>
      ) : (
        <div className="text-center p-12 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
          <p className="text-sm text-neutral-500">No terms found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
