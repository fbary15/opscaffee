"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryOrder } from "@/content/photos";
import { Lightbox } from "../Lightbox";

/**
 * Szerkesztett, aszimmetrikus rács – nem egyforma csempék, hanem egy magazin
 * oldalpárjainak ritmusa. A minta 10 képre van hangolva, utána ismétlődik.
 */
const layout: { cell: string; frame: string }[] = [
  { cell: "md:col-span-7", frame: "aspect-[3/2]" },
  { cell: "md:col-span-4 md:col-start-9 md:mt-[22vh]", frame: "aspect-[4/5]" },
  { cell: "md:col-span-5 md:col-start-2", frame: "aspect-[4/5] arch" },
  { cell: "md:col-span-6 md:col-start-7 md:mt-[14vh]", frame: "aspect-[3/2]" },
  { cell: "md:col-span-4", frame: "aspect-[4/7]" },
  { cell: "md:col-span-7 md:col-start-6 md:mt-[10vh]", frame: "aspect-[3/2]" },
  { cell: "md:col-span-6", frame: "aspect-[3/2]" },
  { cell: "md:col-span-4 md:col-start-8 md:mt-[18vh]", frame: "aspect-[3/4] arch" },
  { cell: "md:col-span-8 md:col-start-3", frame: "aspect-[16/10]" },
  { cell: "md:col-span-4 md:col-start-1", frame: "aspect-[4/7]" },
];

export function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-4 gap-y-14 md:grid-cols-12 md:gap-y-[10vh]">
        {galleryOrder.map((p, i) => {
          const { cell, frame } = layout[i % layout.length];
          return (
            <li key={p.id} className={cell}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full text-left"
                aria-label={`${p.caption} – nagyítás`}
              >
                <div className={`relative overflow-hidden bg-roast ${frame}`} data-anim="img">
                  <div className="absolute inset-0 transition-[scale] duration-[1.4s] ease-(--ease-out-expo) group-hover:scale-[1.04]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="label absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Nagyítás
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="flex items-baseline gap-3">
                    <span className="label text-brass">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-2xl italic">{p.caption}</span>
                  </span>
                  {p.credit && <span className="label opacity-40">Fotó: {p.credit}</span>}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
      <Lightbox items={galleryOrder} index={index} onChange={setIndex} onClose={() => setIndex(null)} label="Galéria" />
    </>
  );
}
