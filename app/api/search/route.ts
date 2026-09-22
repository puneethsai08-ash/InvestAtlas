import { NextResponse } from "next/server";
import { investmentService } from "@/lib/services/investmentService";
import { searchAll } from "@/lib/services/searchService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";

  const investments = investmentService.getAllInvestments();
  const categories = investmentService.getAllCategories();
  const glossary = investmentService.getAllGlossary();
  const articles = investmentService.getAllLearningArticles();

  const results = searchAll(q, investments, categories, glossary, articles, 15);

  return NextResponse.json({ results });
}
