"use client";

import React, { useState } from "react";
import { LearningQuizQuestion } from "@/lib/types";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function QuizWidget({ questions }: { questions: LearningQuizQuestion[] }) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) return null;

  const handleSelect = (qIdx: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optionIdx }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = Object.entries(selectedAnswers).filter(
    ([qIdx, ans]) => questions[parseInt(qIdx)].correctIndex === ans
  ).length;

  return (
    <div className="p-6 rounded-3xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08] space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#0071e3]" />
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Knowledge Checkpoint
          </h3>
        </div>

        {submitted && (
          <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#0071e3] font-bold text-xs">
            Score: {score}/{questions.length}
          </span>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const isCorrect = selected === q.correctIndex;

          return (
            <div key={qIdx} className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {qIdx + 1}. {q.question}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {q.options.map((option, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  let btnStyle = "bg-white dark:bg-[#161618] border-black/5 dark:border-white/10 text-neutral-700 dark:text-neutral-300";

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      btnStyle = "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold";
                    } else if (isThisSelected && !isCorrect) {
                      btnStyle = "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300";
                    }
                  } else if (isThisSelected) {
                    btnStyle = "bg-blue-50 dark:bg-blue-950/50 border-[#0071e3] text-blue-900 dark:text-blue-200 font-semibold ring-1 ring-[#0071e3]";
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {submitted && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {submitted && isThisSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 text-xs text-neutral-600 dark:text-neutral-400 border border-blue-200/30 dark:border-blue-900/30">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">Explanation: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-2 flex items-center justify-between">
        {!submitted ? (
          <Button
            size="sm"
            variant="primary"
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="rounded-full px-5 text-xs font-semibold"
          >
            Submit Answers
          </Button>
        ) : (
          <Button
            size="sm"
            variant="outline"
            onClick={handleReset}
            className="rounded-full text-xs font-semibold gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Checkpoint</span>
          </Button>
        )}
      </div>
    </div>
  );
}
