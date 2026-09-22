"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Compass, Columns2, BookOpen, HelpCircle, Calculator, ShieldCheck, Menu, X, Sparkles } from "lucide-react";
import { useComparison } from "@/lib/context/ComparisonContext";
import { SearchModal } from "@/components/ui/SearchModal";
import { cn } from "@/lib/utils/cn";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const { selectedSlugs } = useComparison();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Explore", href: "/explore", icon: Compass },
    { name: "Categories", href: "/categories", icon: ShieldCheck },
    { name: "Compare", href: "/compare", icon: Columns2, badge: selectedSlugs.length },
    { name: "Learn", href: "/learn", icon: BookOpen },
    { name: "Glossary", href: "/glossary", icon: HelpCircle },
    { name: "Calculators", href: "/calculators", icon: Calculator },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "apple-glass py-2.5 shadow-sm"
            : "bg-[color-mix(in_srgb,var(--background)_84%,transparent)] backdrop-blur-xl border-b border-[var(--border-subtle)] py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold shadow-[0_8px_18px_-8px_rgba(15,118,110,0.8)] group-hover:scale-105 transition-transform">
              IA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-[var(--foreground)] group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                InvestAtlas
              </span>
              <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-[0.14em] font-medium">
                India • Official Guide
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--secondary)]/80 p-1 rounded-full border border-[var(--border-subtle)]">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer",
                    isActive
                      ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm font-semibold"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                  {item.badge ? (
                    <span className="px-1.5 py-0.2 bg-teal-700 text-white text-[10px] font-bold rounded-full">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          {/* Search Trigger & Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-95 border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-[var(--card)] text-[var(--muted)] rounded border border-[var(--border)]">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/assistant"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300" />
              <span>Ask AI</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[var(--secondary-foreground)] hover:bg-[var(--secondary)] md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--card)] backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium",
                    isActive
                      ? "bg-teal-100 text-teal-900 dark:bg-teal-950/60 dark:text-teal-200"
                      : "text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[var(--muted)]" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge ? (
                    <span className="px-2 py-0.5 bg-teal-700 text-white text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <Link
                href="/assistant"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/50"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ask InvestAtlas AI</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Command-K Search Palette */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
