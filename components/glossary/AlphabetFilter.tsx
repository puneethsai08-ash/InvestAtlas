"use client";

import React from "react";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface AlphabetFilterProps {
  selectedLetter: string;
  onSelectLetter: (letter: string) => void;
  availableLetters: Set<string>;
}

export function AlphabetFilter({
  selectedLetter,
  onSelectLetter,
  availableLetters,
}: AlphabetFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 p-2 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
      <button
        onClick={() => onSelectLetter("")}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
          selectedLetter === ""
            ? "bg-[#0071e3] text-white shadow-sm"
            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200"
        }`}
      >
        All Terms
      </button>

      {ALPHABETS.map((letter) => {
        const isAvailable = availableLetters.has(letter);
        const isSelected = selectedLetter === letter;

        return (
          <button
            key={letter}
            onClick={() => isAvailable && onSelectLetter(isSelected ? "" : letter)}
            disabled={!isAvailable}
            className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-all ${
              isSelected
                ? "bg-[#0071e3] text-white shadow-sm"
                : isAvailable
                ? "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 cursor-pointer"
                : "text-neutral-300 dark:text-neutral-700 opacity-40 cursor-not-allowed"
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
