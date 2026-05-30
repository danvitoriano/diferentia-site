"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-[#1E1E2E] bg-[#080810] px-4 py-2 text-xs font-medium text-[#9090B0] hover:border-[#7C6FF7]/40 hover:text-white transition-colors"
    >
      {copied ? "Copiado!" : "Copiar"}
    </button>
  );
}
