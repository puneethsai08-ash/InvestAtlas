import { NextResponse } from "next/server";
import { investmentService } from "@/lib/services/investmentService";
import { buildComparisonMatrix, generateEducationalComparisonSummary } from "@/lib/services/comparisonService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slugs } = body;

    if (!Array.isArray(slugs) || slugs.length === 0) {
      return NextResponse.json({ error: "Invalid or empty slugs array" }, { status: 400 });
    }

    const investments = slugs
      .map((slug: string) => investmentService.getInvestmentBySlug(slug))
      .filter((i): i is NonNullable<typeof i> => i !== undefined);

    if (investments.length === 0) {
      return NextResponse.json({ error: "No investments found for provided slugs" }, { status: 404 });
    }

    const matrix = buildComparisonMatrix(investments);
    const summary = generateEducationalComparisonSummary(investments);

    return NextResponse.json({
      investments,
      matrix,
      summary,
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
