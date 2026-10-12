"use client";

import { useClock } from "@/lib/use-clock";
import { getLenis } from "./SmoothScroll";

export function Year({ fallback = 2026 }: { fallback?: number }) {
  const now = useClock();
  return <>{now ? now.getFullYear() : fallback}</>;
}

export function BackToTop({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const lenis = getLenis();
        if (lenis) lenis.scrollTo(0, { duration: 2.2 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Vissza a tetejére ↑
    </button>
  );
}
