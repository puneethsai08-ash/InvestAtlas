"use client";

import React, { useState, useMemo } from "react";
import { Investment, InvestmentCategory } from "@/lib/types";
import { InvestmentCard } from "./InvestmentCard";
import { FilterSidebar } from "./FilterSidebar";
import { Search, SlidersHorizontal, ArrowUpDown, X, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface InvestmentGridProps {
  initialInvestments: Investment[];
  categories: InvestmentCategory[];
  initialQuery?: string;
  initialCategory?: string;
}

export function InvestmentGrid({
  initialInvestments,
  categories,
  initialQuery = "",
  initialCategory = "",
}: InvestmentGridProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filters, setFilters] = useState({
    category: initialCategory,
    risk: "",
    liquidity: "",
    returnType: "",
    lockIn: "",
    horizon: "",
  });
  const [sortBy, setSortBy] = useState<"name" | "risk" | "completeness">("name");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setFilters({
      category: "",
      risk: "",
      liquidity: "",
      returnType: "",
      lockIn: "",
      horizon: "",
    });
  };

  // Filter & Sort Logic
  const filteredInvestments = useMemo(() => {
    return initialInvestments.filter((inv) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = inv.name.toLowerCase().includes(q);
        const matchesAliases = inv.aliases.some((a) => a.toLowerCase().includes(q));
        const matchesDesc = inv.shortDescription.toLowerCase().includes(q);
        if (!matchesName && !matchesAliases && !matchesDesc) return false;
      }

      // Category
      if (filters.category && inv.categoryId !== filters.category) return false;

      // Risk
      if (filters.risk && inv.riskLevel !== filters.risk) return false;

      // Liquidity
      if (filters.liquidity && inv.liquidityLevel !== filters.liquidity) return false;

      // Return Type
      if (filters.returnType && inv.returnInfo.returnType !== filters.returnType) return false;

      // Lock-in
      if (filters.lockIn === "none") {
        if (inv.lockInPeriod && !inv.lockInPeriod.toLowerCase().includes("none")) return false;
      } else if (filters.lockIn === "locked") {
        if (!inv.lockInPeriod || inv.lockInPeriod.toLowerCase().includes("none")) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "completeness") return b.completenessScore - a.completenessScore;
      return 0;
    });
  }, [initialInvestments, searchQuery, filters, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Top Header & Search Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Explore All Investment Options
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Browse {initialInvestments.length} standardized instruments across Indian capital markets, sovereign schemes, and bank deposits.
          </p>
        </div>

        {/* Search Bar & Mobile Filter Trigger */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, PPF, ETF..."
              className="w-full pl-9 pr-8 py-2 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden rounded-full px-3"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </Button>
        </div>
      </div>

      {/* Main Content Grid: Sidebar + Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Desktop Filter Sidebar */}
        <div className="hidden md:block md:col-span-1">
          <div className="sticky top-24 p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
            <FilterSidebar
              categories={categories}
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
              totalFiltered={filteredInvestments.length}
              totalAvailable={initialInvestments.length}
            />
          </div>
        </div>

        {/* Mobile Filters Accordion */}
        {isMobileFilterOpen && (
          <div className="md:hidden col-span-1 p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] mb-4">
            <FilterSidebar
              categories={categories}
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
              totalFiltered={filteredInvestments.length}
              totalAvailable={initialInvestments.length}
            />
          </div>
        )}

        {/* Cards Grid Area */}
        <div className="md:col-span-3 space-y-4">
          {/* Active Chips & Sort Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-black/[0.04] dark:border-white/[0.04] text-xs">
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                Showing {filteredInvestments.length}
              </span>
              <span>of {initialInvestments.length} options</span>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 border-none text-xs text-neutral-800 dark:text-neutral-200 outline-none"
              >
                <option value="name">Alphabetical (A-Z)</option>
                <option value="completeness">Data Completeness</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredInvestments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredInvestments.map((inv) => (
                <InvestmentCard key={inv.id} investment={inv} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] space-y-3">
              <Layers className="w-8 h-8 text-neutral-400 mx-auto" />
              <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200">
                No investments match your active criteria
              </h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Try removing some filters or clearing the search query to view available options.
              </p>
              <Button size="sm" variant="secondary" onClick={handleResetFilters} className="rounded-full">
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
