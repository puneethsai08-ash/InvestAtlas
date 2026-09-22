import React from "react";
import { notFound } from "next/navigation";
import { investmentService } from "@/lib/services/investmentService";
import { LessonReader } from "@/components/learn/LessonReader";

export async function generateStaticParams() {
  return investmentService.getAllLearningArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = investmentService.getLearningArticleBySlug(params.slug);
  if (!article) return { title: "Lesson Not Found" };

  return {
    title: `${article.title} — InvestAtlas India`,
    description: article.subtitle || article.summary,
  };
}

export default function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const articles = investmentService
    .getAllLearningArticles()
    .sort((a, b) => a.sequence - b.sequence);
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) notFound();

  const articleIndex = articles.findIndex((item) => item.slug === article.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <LessonReader
        article={article}
        prevArticle={articleIndex > 0 ? articles[articleIndex - 1] : undefined}
        nextArticle={articleIndex < articles.length - 1 ? articles[articleIndex + 1] : undefined}
      />
    </div>
  );
}
