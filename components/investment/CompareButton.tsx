"use client";

import React from "react";
import { useComparison } from "@/lib/context/ComparisonContext";
import { Button } from "@/components/ui/Button";

interface CompareButtonProps {
  slug: string;
}

export function CompareButton({ slug }: CompareButtonProps) {
  const { isSelected, toggleInvestment } = useComparison();
  const selected = isSelected(slug);

  return (
    <Button
      variant={selected ? "primary" : "outline"}
      size="sm"
      onClick={() => toggleInvestment(slug)}
    >
      {selected ? "✓ Added to Compare" : "Add to Compare"}
    </Button>
  );
}