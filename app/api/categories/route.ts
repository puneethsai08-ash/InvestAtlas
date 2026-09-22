import { NextResponse } from "next/server";
import { investmentService } from "@/lib/services/investmentService";

export async function GET() {
  const categories = investmentService.getAllCategories();
  const allInvestments = investmentService.getAllInvestments();

  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    investmentCount: allInvestments.filter((i) => i.categoryId === cat.id).length,
  }));

  return NextResponse.json({ categories: categoriesWithCounts });
}
