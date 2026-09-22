import { NextResponse } from "next/server";
import { investmentService } from "@/lib/services/investmentService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const risk = searchParams.get("risk");
  const liquidity = searchParams.get("liquidity");
  const returnType = searchParams.get("returnType");
  const lockIn = searchParams.get("lockIn");

  let investments = investmentService.getAllInvestments();

  if (category) {
    investments = investments.filter(
      (i) => i.categoryId.toLowerCase() === category.toLowerCase()
    );
  }

  if (risk) {
    investments = investments.filter((i) => i.riskLevel === risk);
  }

  if (liquidity) {
    investments = investments.filter((i) => i.liquidityLevel === liquidity);
  }

  if (returnType) {
    investments = investments.filter((i) => i.returnInfo.returnType === returnType);
  }

  if (lockIn) {
    if (lockIn === "none") {
      investments = investments.filter(
        (i) => !i.lockInPeriod || i.lockInPeriod.toLowerCase().includes("none")
      );
    } else if (lockIn === "locked") {
      investments = investments.filter(
        (i) => i.lockInPeriod && !i.lockInPeriod.toLowerCase().includes("none")
      );
    }
  }

  return NextResponse.json({ investments, total: investments.length });
}
