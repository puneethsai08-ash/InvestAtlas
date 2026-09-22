"use client";

import React, { useState } from "react";
import { Investment, ContentStatus } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { X, Save, ShieldAlert, CheckCircle2 } from "lucide-react";

interface InvestmentEditorProps {
  investment: Investment;
  onSave: (slug: string, updates: Partial<Investment>, reason: string) => Promise<void>;
  onClose: () => void;
}

export function InvestmentEditor({ investment, onSave, onClose }: InvestmentEditorProps) {
  const [formData, setFormData] = useState({
    name: investment.name,
    shortDescription: investment.shortDescription,
    beginnerExplanation: investment.beginnerExplanation,
    minimumAmountText: investment.minimumAmountText || "",
    lockInPeriod: investment.lockInPeriod || "",
    taxationSummary: investment.taxationSummary || "",
    status: investment.status,
  });

  const [reason, setReason] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      alert("Please provide a reason / statutory reference for this update.");
      return;
    }

    setIsSaving(true);
    try {
      await onSave(
        investment.slug,
        {
          ...formData,
          lastVerifiedAt: new Date().toISOString().split("T")[0],
        },
        reason
      );
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to save changes.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#1c1c1e] rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 flex flex-col overflow-hidden animate-in scale-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-black/5 dark:border-white/10">
          <div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-white">
              Edit Canonical Record: {investment.name}
            </h3>
            <span className="text-xs text-neutral-400">
              Changes will be recorded with an immutable audit log entry.
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-semibold text-neutral-700 dark:text-neutral-300">
              Product Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-neutral-700 dark:text-neutral-300">
              Short Description
            </label>
            <textarea
              rows={2}
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-neutral-700 dark:text-neutral-300">
              Beginner Explanation
            </label>
            <textarea
              rows={3}
              value={formData.beginnerExplanation}
              onChange={(e) => setFormData({ ...formData, beginnerExplanation: e.target.value })}
              className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-neutral-700 dark:text-neutral-300">
                Minimum Investment Text
              </label>
              <input
                type="text"
                value={formData.minimumAmountText}
                onChange={(e) => setFormData({ ...formData, minimumAmountText: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-neutral-700 dark:text-neutral-300">
                Lock-in Period
              </label>
              <input
                type="text"
                value={formData.lockInPeriod}
                onChange={(e) => setFormData({ ...formData, lockInPeriod: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-neutral-700 dark:text-neutral-300">
              Taxation Summary
            </label>
            <textarea
              rows={2}
              value={formData.taxationSummary}
              onChange={(e) => setFormData({ ...formData, taxationSummary: e.target.value })}
              className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-neutral-700 dark:text-neutral-300">
                Publication Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value as ContentStatus })
                }
                className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none"
              >
                <option value="draft">Draft (Unpublished)</option>
                <option value="review">Review Queue</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-neutral-700 dark:text-neutral-300">
                Update Reason / Gazette Ref <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Finance Act 2024 tax rate update"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 outline-none"
              />
            </div>
          </div>

          {/* Footer Save */}
          <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-end gap-2">
            <Button variant="ghost" size="sm" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit" isLoading={isSaving} className="gap-1.5">
              <Save className="w-3.5 h-3.5" />
              <span>Save & Audit Log</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
