import { NextResponse } from "next/server";
import { investmentService } from "@/lib/services/investmentService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get("difficulty");
  const letter = searchParams.get("letter");

  let terms = investmentService.getAllGlossary();

  if (difficulty) {
    terms = terms.filter((t) => t.difficulty === difficulty);
  }

  if (letter && letter.length === 1) {
    terms = terms.filter((t) => t.term.toUpperCase().startsWith(letter.toUpperCase()));
  }

  return NextResponse.json({ terms, total: terms.length });
}
