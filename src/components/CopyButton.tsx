"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
}

export function CopyButton({ value, label, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API may be unavailable in non-secure contexts
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 border border-border bg-bg-elevated px-2.5 py-1 font-mono text-xs text-fg-muted transition-colors hover:border-border-strong hover:text-fg ${className}`}
      title={`Copy ${label ?? value}`}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-accent" />
          <span className="text-accent">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>{label ?? "Copy"}</span>
        </>
      )}
    </button>
  );
}
