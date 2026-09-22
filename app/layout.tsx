import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ComparisonProvider } from "@/lib/context/ComparisonContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComparisonDrawer } from "@/components/layout/ComparisonDrawer";
import { FloatingAssistant } from "@/components/layout/FloatingAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InvestAtlas India — Understand Every Investment Option in India",
  description:
    "A beginner-first, non-commercial educational discovery platform explaining investment categories, products, risks, taxes, and liquidity rules in India using official government sources.",
  keywords: [
    "PPF",
    "Fixed Deposit",
    "Mutual Funds India",
    "Indian Investments",
    "SGB",
    "NPS",
    "RBI Retail Direct",
    "Small Savings Schemes",
    "SEBI",
    "InvestAtlas India",
  ],
  authors: [{ name: "InvestAtlas India Editorial Team" }],
  openGraph: {
    title: "InvestAtlas India — Understand Every Investment Option in India",
    description:
      "A beginner-first educational webapp that normalizes and compares every investment option in India using official government sources.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-teal-600/15 selection:text-teal-950">
        <ComparisonProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ComparisonDrawer />
          <FloatingAssistant />
        </ComparisonProvider>
      </body>
    </html>
  );
}
