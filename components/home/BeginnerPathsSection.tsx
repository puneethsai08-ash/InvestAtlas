"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Sparkles, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { LearningArticle } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

export function BeginnerPathsSection({ articles }: { articles: LearningArticle[] }) {
  const featuredLessons = articles.slice(0, 4);

  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
            Curriculum for First-Time Investors
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            New to Investing in India? Start Here.
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
            A structured 12-module curriculum covering inflation, compounding, risk spectrum, and how to avoid costly beginner mistakes.
          </p>
        </div>

        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
        >
          <span>View all 12 modules</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredLessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/learn/${lesson.slug}`}
            className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:border-[#0071e3]/40 hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="info" size="sm">
                  Module {lesson.sequence}
                </Badge>
                <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <Clock className="w-3 h-3" />
                  {lesson.estimatedMinutes} mins
                </span>
              </div>

              <h3 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#0071e3] transition-colors mb-1.5">
                {lesson.title}
              </h3>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
                {lesson.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs text-neutral-400 group-hover:text-[#0071e3] font-medium transition-colors">
              <span>Read Lesson</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
