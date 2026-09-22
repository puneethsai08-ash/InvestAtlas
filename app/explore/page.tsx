import React from "react";
import { investmentService } from "@/lib/services/investmentService";
import { InvestmentGrid } from "@/components/explore/InvestmentGrid";

export const metadata = {
  title: "Explore All Investment Options — InvestAtlas India",
  description:
    "Browse, filter, and compare all standardized investment instruments across Indian capital markets, sovereign schemes, and bank deposits.",
};

export default function ExplorePage() {
  const investments = investmentService.getAllInvestments();
  const categories = investmentService.getAllCategories();

  return <InvestmentGrid initialInvestments={investments} categories={categories} />;
}
