"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

export default function CtaTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="/contact"]');
      if (!a) return;
      trackEvent("cta_click", {
        cta_text: (a.textContent || "").trim().slice(0, 60),
        cta_source: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
