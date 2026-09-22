import { NextResponse } from "next/server";
import { investmentService } from "@/lib/services/investmentService";

export async function GET() {
  const investments = investmentService.getAllInvestments();
  const sources = investmentService.getAllSources();
  const auditLogs = investmentService.getAllAuditLogs();

  const total = investments.length;
  const published = investments.filter((i) => i.status === "published").length;
  const draft = investments.filter((i) => i.status === "draft").length;
  const review = investments.filter((i) => i.status === "review").length;

  const averageCompleteness = Math.round(
    investments.reduce((acc, i) => acc + i.completenessScore, 0) / (total || 1)
  );

  return NextResponse.json({
    metrics: {
      total,
      published,
      draft,
      review,
      averageCompleteness,
      totalSources: sources.length,
      activeSources: sources.filter((s) => s.active).length,
    },
    investments,
    sources,
    auditLogs,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, slug, updates, changedBy, reason, sourceId } = body;

    if (action === "updateInvestment" && slug && updates) {
      const updated = investmentService.updateInvestment(slug, updates, changedBy, reason);
      if (!updated) {
        return NextResponse.json({ error: "Investment not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, investment: updated });
    }

    if (action === "toggleSource" && sourceId) {
      const active = investmentService.toggleSourceStatus(sourceId);
      return NextResponse.json({ success: true, active });
    }

    return NextResponse.json({ error: "Invalid action or parameters" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
