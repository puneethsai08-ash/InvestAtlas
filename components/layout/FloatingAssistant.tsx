"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, BookOpen, AlertCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AssistantResponse } from "@/lib/services/aiAssistantService";

export function FloatingAssistant({
  initialOpen = false,
  showTrigger = true,
}: {
  initialOpen?: boolean;
  showTrigger?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AssistantResponse | null>(null);

  const quickPrompts = [
    "Explain PPF like I am 18.",
    "Mutual Fund vs ETF difference?",
    "Why can stocks lose value?",
    "How is Fixed Deposit taxed in India?",
    "What does lock-in mean?",
  ];

  const handleAsk = async (queryText?: string) => {
    const q = queryText || prompt;
    if (!q.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: q }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {showTrigger && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-xs shadow-xl shadow-blue-500/25 cursor-pointer border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
          <span>Ask InvestAtlas</span>
        </motion.button>
      )}

      {/* Floating Sheet Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 bg-black/40 backdrop-blur-sm">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0"
            />

            {/* Main Window */}
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 24, stiffness: 300 }}
              className="relative w-full sm:max-w-md h-[80vh] sm:h-[620px] bg-white dark:bg-[#1c1c1e] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 flex flex-col overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-black/5 dark:border-white/10 bg-neutral-50/70 dark:bg-neutral-900/70 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      Ask InvestAtlas
                    </h3>
                    <p className="text-[10px] text-neutral-500">
                      Grounded in verified official data
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Content Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                {/* Intro message */}
                <div className="p-3.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 space-y-2">
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    Hello! I&apos;m your educational investment assistant.
                  </p>
                  <p className="leading-relaxed">
                    Ask me any concept, compare products, or understand taxation rules. I never give stock tips or buy recommendations.
                  </p>
                </div>

                {/* Quick Prompts */}
                {!response && (
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider px-1">
                      Try asking:
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {quickPrompts.map((q) => (
                        <button
                          key={q}
                          onClick={() => {
                            setPrompt(q);
                            handleAsk(q);
                          }}
                          className="text-left p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 hover:bg-blue-100/70 dark:hover:bg-blue-900/40 text-blue-900 dark:text-blue-200 border border-blue-200/40 dark:border-blue-800/30 transition-colors flex items-center justify-between"
                        >
                          <span>{q}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Response View */}
                {response && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {/* Guardrail Callout if applicable */}
                    {response.guardrailTriggered && (
                      <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-xs">{response.guardrailMessage}</p>
                          <p className="text-[11px] mt-0.5">
                            InvestAtlas operates under strict editorial neutrality.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Main Text Markdown styled */}
                    <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 space-y-2.5 leading-relaxed whitespace-pre-wrap">
                      {response.answer}
                    </div>

                    {/* Related Links */}
                    {response.relatedInvestments.length > 0 && (
                      <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 space-y-1.5">
                        <span className="font-semibold text-neutral-900 dark:text-white block">
                          Related In-Depth Guides:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {response.relatedInvestments.map((inv) => (
                            <Link
                              key={inv.slug}
                              href={`/investment/${inv.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-medium text-[11px] hover:underline"
                            >
                              <BookOpen className="w-3 h-3" />
                              <span>{inv.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Cited Sources */}
                    {response.citedSources.length > 0 && (
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-[10px] text-neutral-500 space-y-1">
                        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                          Sources Cited:
                        </span>
                        {response.citedSources.map((s, idx) => (
                          <div key={idx} className="truncate">
                            • {s.organization}: {s.title}
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => setResponse(null)}
                      className="text-xs text-[#0071e3] hover:underline font-medium pt-1 block"
                    >
                      ← Ask another question
                    </button>
                  </div>
                )}
              </div>

              {/* Input Footer */}
              <div className="p-3 border-t border-black/5 dark:border-white/10 bg-neutral-50/90 dark:bg-neutral-900/90">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAsk();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask a question or compare..."
                    className="flex-1 px-3.5 py-2 rounded-full bg-white dark:bg-[#2c2c2e] border border-black/10 dark:border-white/10 text-xs outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !prompt.trim()}
                    className="p-2 rounded-full bg-[#0071e3] text-white disabled:opacity-50 cursor-pointer active:scale-95 transition-transform"
                  >
                    {isLoading ? (
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin block" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
