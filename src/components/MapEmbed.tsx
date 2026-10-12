"use client";

import { useState } from "react";
import { site } from "@/content/site";

/**
 * A Google-térkép csak kattintásra töltődik be (nincs harmadik féltől származó
 * süti, amíg a látogató nem kéri), addig egy rajzolt helyjelző áll a helyén.
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-roast ${className}`}>
      {loaded ? (
        <iframe
          title={`${site.name} a térképen`}
          src={site.mapEmbedUrl}
          className="absolute inset-0 size-full border-0 [filter:grayscale(1)_sepia(.25)_contrast(1.05)_brightness(.92)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-5 text-paper"
        >
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 size-full text-paper/10"
            aria-hidden
            preserveAspectRatio="xMidYMid slice"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M-20 120 C 80 140, 160 90, 420 160" />
              <path d="M-20 250 C 120 230, 220 300, 420 270" strokeWidth="6" />
              <path d="M130 -20 C 150 120, 120 260, 170 420" strokeWidth="3" />
              <path d="M290 -20 C 260 140, 300 260, 260 420" />
              <path d="M-20 330 L 420 360" />
              <path d="M40 -20 L 70 420" />
            </g>
          </svg>
          <span className="relative flex size-14 items-center justify-center rounded-full bg-wine transition-transform duration-500 group-hover:scale-110">
            <span className="absolute inset-0 animate-ping rounded-full bg-wine/50" />
            <span className="relative size-2.5 rounded-full bg-paper" />
          </span>
          <span className="relative text-center">
            <span className="font-display block text-2xl italic">{site.address.street}</span>
            <span className="label mt-2 block opacity-70 transition-opacity group-hover:opacity-100">
              Térkép betöltése
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
