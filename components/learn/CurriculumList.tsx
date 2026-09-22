"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LearningArticle } from "@/lib/types";
import { BookOpen, Clock, CheckCircle2, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CurriculumList({ articles }: { articles: LearningArticle[] }) {
  const [filterLevel, setFilterLevel] = useState<string>("all");

  const filteredArticles = articles.filter((art) => {
    if (filterLevel === "all") return true;
    return art.level === filterLevel;
  });

  return (
    <div className="space-y-8">
      {/* Header / Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
            Curriculum for Retail Investors
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Indian Investment Foundations
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
            12 bite-sized, structured educational modules taking you from the basics of inflation to understanding complex product sheets.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 text-xs">
          {[
            { label: "All Modules (12)", value: "all" },
            { label: "Beginner", value: "beginner" },
            { label: "Intermediate", value: "intermediate" },
          ].map((lvl) => (
            <button
              key={lvl.value}
              onClick={() => setFilterLevel(lvl.value)}
              className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                filterLevel === lvl.value
                  ? "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm font-semibold"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modules List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={`/learn/${article.slug}`}
            className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:border-[#0071e3]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 dark:bg-blue-950/50 text-[#0071e3] border border-blue-200/50 dark:border-blue-800/40">
                  Module {article.sequence}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <Clock className="w-3 h-3" />
                  {article.estimatedMinutes} mins
                </span>
              </div>

              <h2 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-[#0071e3] transition-colors mb-2">
                {article.title}
              </h2>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-3 mb-4 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs font-semibold text-[#0071e3]">
              <span className="text-[11px] text-neutral-400 font-normal capitalize">
                {article.level} Level
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Read Lesson <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
