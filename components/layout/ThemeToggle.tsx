"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_STORAGE_KEY = "investatlas-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const shouldUseDark = storedTheme
      ? storedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="surface-glass w-9 h-9 inline-flex items-center justify-center rounded-full text-[var(--secondary-foreground)] hover:brightness-105 transition-colors cursor-pointer"
    >
      {isMounted && isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
