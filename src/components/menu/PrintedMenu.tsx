"use client";

import { useState } from "react";
import p1 from "@/assets/itallap/oldal-1.jpg";
import p2 from "@/assets/itallap/oldal-2.jpg";
import p3 from "@/assets/itallap/oldal-3.jpg";
import p4 from "@/assets/itallap/oldal-4.jpg";
import p5 from "@/assets/itallap/oldal-5.jpg";
import p6 from "@/assets/itallap/oldal-6.jpg";
import p7 from "@/assets/itallap/oldal-7.jpg";
import p8 from "@/assets/itallap/oldal-8.jpg";
import { menuSeason } from "@/content/menu";
import { Lightbox, type LightboxItem } from "../Lightbox";

const pages: LightboxItem[] = [p2, p4, p5, p6, p7, p3, p8, p1].map((src, i) => ({
  src,
  alt: `A nyomtatott itallap ${i + 1}. oldala`,
  caption: `Itallap, ${menuSeason}`,
}));

export function PrintedMenu({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setIndex(0)}
        className={`group inline-flex items-center gap-4 rounded-full border border-current/30 py-4 pl-7 pr-5 transition-colors duration-500 hover:border-current ${className}`}
      >
        <span className="label">A nyomtatott itallap lapozva</span>
        <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </button>
      <Lightbox
        items={pages}
        index={index}
        onChange={setIndex}
        onClose={() => setIndex(null)}
        label="Nyomtatott itallap"
      />
    </>
  );
}
