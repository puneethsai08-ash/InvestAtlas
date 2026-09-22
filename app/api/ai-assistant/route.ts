import { NextResponse } from "next/server";
import { investmentService } from "@/lib/services/investmentService";
import { askInvestAtlas } from "@/lib/services/aiAssistantService";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing or invalid prompt" }, { status: 400 });
    }

    const investments = investmentService.getAllInvestments();
    const glossary = investmentService.getAllGlossary();
    const articles = investmentService.getAllLearningArticles();
    const sources = investmentService.getAllSources();

    const response = askInvestAtlas(prompt, investments, glossary, articles, sources);

    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
