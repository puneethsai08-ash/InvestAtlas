import React from "react";
import { investmentService } from "@/lib/services/investmentService";
import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { QuickCompareSection } from "@/components/home/QuickCompareSection";
import { BeginnerPathsSection } from "@/components/home/BeginnerPathsSection";
import { NeutralityBanner } from "@/components/home/NeutralityBanner";

export default function HomePage() {
  const categories = investmentService.getAllCategories();
  const allInvestments = investmentService.getAllInvestments();
  const articles = investmentService.getAllLearningArticles();

  // Compute category counts
  const investmentCounts: Record<string, number> = {};
  allInvestments.forEach((inv) => {
    investmentCounts[inv.categoryId] = (investmentCounts[inv.categoryId] || 0) + 1;
  });

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Major Categories Section */}
      <CategoryGrid categories={categories} investmentCounts={investmentCounts} />

      {/* 3. Popular Comparisons Section */}
      <QuickCompareSection />

      {/* 4. Beginner Curriculum Section */}
      <BeginnerPathsSection articles={articles} />

      {/* 5. Editorial Neutrality & Oath Section */}
      <NeutralityBanner />
    </div>
  );
}
