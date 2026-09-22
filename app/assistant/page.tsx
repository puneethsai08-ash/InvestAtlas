import React from "react";
import { FloatingAssistant } from "@/components/layout/FloatingAssistant";

export const metadata = {
  title: "Ask InvestAtlas — InvestAtlas India",
  description:
    "Ask the InvestAtlas educational assistant about investment concepts, products, taxation, and risk using verified source-grounded data.",
};

export default function AssistantPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4 py-10">
      <FloatingAssistant initialOpen showTrigger={false} />
    </div>
  );
}