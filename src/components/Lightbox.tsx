"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { getLenis } from "./SmoothScroll";

export type LightboxItem = { src: StaticImageData; alt: string; caption?: string; credit?: string };

export function Lightbox({
  items,
  index,
  onChange,
  onClose,
  label = "Képnézegető",
}: {
  items: LightboxItem[];
  index: number | null;
  onChange: (i: number) => void;
  onClose: () => void;
  label?: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      previous?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onChange, onClose]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[70] flex flex-col bg-ink/97 text-paper backdrop-blur-sm animate-[lb-in_.5s_var(--ease-out-expo)]"
      data-lenis-prevent
    >
      <div className="flex h-(--header-h) shrink-0 items-center justify-between px-(--gutter)">
        <p className="label tabular-nums opacity-70">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className="label u-link py-2">
          Bezár ✕
        </button>
      </div>

      <div className="relative min-h-0 flex-1 px-(--gutter)" onClick={onClose}>
        <Image
          key={item.src.src}
          src={item.src}
          alt={item.alt}
          fill
          sizes="100vw"
          quality={85}
          className="animate-[lb-img_.7s_var(--ease-out-expo)] object-contain p-(--gutter) pt-0"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className="flex shrink-0 items-center justify-between gap-6 px-(--gutter) py-5">
        <button
          type="button"
          onClick={() => onChange((index - 1 + items.length) % items.length)}
          className="label u-link py-2"
          aria-label="Előző kép"
        >
          ← Előző
        </button>
        <p className="font-display truncate text-center text-xl italic">
          {item.caption}
          {item.credit && <span className="label ml-3 not-italic opacity-50">Fotó: {item.credit}</span>}
        </p>
        <button
          type="button"
          onClick={() => onChange((index + 1) % items.length)}
          className="label u-link py-2"
          aria-label="Következő kép"
        >
          Következő →
        </button>
      </div>
    </div>
  );
}
