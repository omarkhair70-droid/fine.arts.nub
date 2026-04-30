"use client";

import { useState } from "react";

type CopyBlockButtonProps = {
  text: string;
  label?: string;
};

export default function CopyBlockButton({ text, label = "انسخ النتيجة كلها" }: CopyBlockButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={copy} className="w-fit rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-rose-300 hover:text-rose-700">
      {copied ? "تم النسخ" : label}
    </button>
  );
}
