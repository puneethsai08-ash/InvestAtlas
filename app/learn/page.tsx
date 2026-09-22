import React from "react";
import { investmentService } from "@/lib/services/investmentService";
import { CurriculumList } from "@/components/learn/CurriculumList";

export const metadata = {
  title: "Investment Learning Curriculum — InvestAtlas India",
  description:
    "Learn the foundations of investing in India through structured, beginner-first educational modules.",
};

export default function LearnPage() {
  const articles = investmentService.getAllLearningArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <CurriculumList articles={articles} />
    </div>
  );
}
