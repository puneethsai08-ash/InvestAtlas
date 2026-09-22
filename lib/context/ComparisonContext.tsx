"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ComparisonContextType {
  selectedSlugs: string[];
  addInvestment: (slug: string) => void;
  removeInvestment: (slug: string) => void;
  toggleInvestment: (slug: string) => void;
  clearAll: () => void;
  isSelected: (slug: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: React.ReactNode }) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("investatlas_compare_slugs");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setSelectedSlugs(parsed.slice(0, 4));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("investatlas_compare_slugs", JSON.stringify(selectedSlugs));
    } catch (e) {
      console.error(e);
    }
  }, [selectedSlugs]);

  const addInvestment = (slug: string) => {
    if (selectedSlugs.includes(slug)) return;
    if (selectedSlugs.length >= 4) {
      alert("You can compare up to 4 investments at a time. Please remove one first.");
      return;
    }
    setSelectedSlugs((prev) => [...prev, slug]);
  };

  const removeInvestment = (slug: string) => {
    setSelectedSlugs((prev) => prev.filter((s) => s !== slug));
  };

  const toggleInvestment = (slug: string) => {
    if (selectedSlugs.includes(slug)) {
      removeInvestment(slug);
    } else {
      addInvestment(slug);
    }
  };

  const clearAll = () => {
    setSelectedSlugs([]);
  };

  const isSelected = (slug: string) => selectedSlugs.includes(slug);

  return (
    <ComparisonContext.Provider
      value={{
        selectedSlugs,
        addInvestment,
        removeInvestment,
        toggleInvestment,
        clearAll,
        isSelected,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}
