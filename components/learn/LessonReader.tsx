import React from "react";
import Link from "next/link";
import { LearningArticle } from "@/lib/types";
import { QuizWidget } from "./QuizWidget";
import { Clock, BookOpen, CheckCircle2, AlertCircle, Info, Lightbulb, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function LessonReader({
  article,
  prevArticle,
  nextArticle,
}: {
  article: LearningArticle;
  prevArticle?: LearningArticle;
  nextArticle?: LearningArticle;
}) {
  const renderCallout = (callout: NonNullable<LearningArticle["sections"][0]["callout"]>) => {
    switch (callout.type) {
      case "warning":
        return (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs space-y-1 my-4">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>{callout.title}</span>
            </div>
            <p className="leading-relaxed">{callout.text}</p>
          </div>
        );
      case "tip":
        return (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200 text-xs space-y-1 my-4">
            <div className="flex items-center gap-1.5 font-bold">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span>{callout.title}</span>
            </div>
            <p className="leading-relaxed">{callout.text}</p>
          </div>
        );
      default:
        return (
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-blue-900 dark:text-blue-200 text-xs space-y-1 my-4">
            <div className="flex items-center gap-1.5 font-bold">
              <Info className="w-4 h-4 text-blue-600" />
              <span>{callout.title}</span>
            </div>
            <p className="leading-relaxed">{callout.text}</p>
          </div>
        );
    }
  };

  return (
    <article className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Curriculum</span>
          </Link>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <Badge variant="info" size="sm">
            Module {article.sequence} of 12
          </Badge>
          <span className="flex items-center gap-1 text-[11px] text-neutral-400">
            <Clock className="w-3 h-3" />
            {article.estimatedMinutes} min read
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {article.subtitle}
          </p>
        )}
      </div>

      {/* Article Sections */}
      <div className="space-y-8 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              {sec.title}
            </h2>
            <div className="whitespace-pre-line text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              {sec.content}
            </div>
            {sec.callout && renderCallout(sec.callout)}
          </section>
        ))}
      </div>

      {/* Key Takeaways Card */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="p-6 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08] space-y-3">
          <h3 className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Key Takeaways from this Lesson:</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#0071e3] font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Interactive Quiz / Checkpoint */}
      {article.quiz && article.quiz.length > 0 && (
        <QuizWidget questions={article.quiz} />
      )}

      {/* Navigation Footer between Lessons */}
      <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-4">
        {prevArticle ? (
          <Link href={`/learn/${prevArticle.slug}`}>
            <Button variant="secondary" size="sm" className="rounded-full gap-1.5 text-xs">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Module {prevArticle.sequence}</span>
            </Button>
          </Link>
        ) : <div />}

        {nextArticle && (
          <Link href={`/learn/${nextArticle.slug}`}>
            <Button variant="primary" size="sm" className="rounded-full gap-1.5 text-xs">
              <span>Next: Module {nextArticle.sequence}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        )}
      </div>
    </article>
  );
}
