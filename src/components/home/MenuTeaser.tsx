"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { menu, takeHome } from "@/content/menu";
import { photos, type Photo } from "@/content/photos";
import { ArrowRight } from "../Icons";

const chapterPhoto: Record<string, Photo> = {
  kave: photos.espresso,
  jeges: photos.latte,
  tea: photos.terasz,
  uditok: photos.keret,
  bar: photos.aranyszoba,
  kitchen: photos.croissant,
};

const countItems = (id: string) => menu.find((c) => c.id === id)?.groups.reduce((n, g) => n + g.items.length, 0) ?? 0;

export function MenuTeaser() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-12 px-(--gutter)">
      <div className="col-span-12 md:col-span-7">
        <ul className="border-t border-ink/15">
          {menu.map((c, i) => (
            <li key={c.id} className="border-b border-ink/15">
              <Link
                href={`/kinalatunk#${c.id}`}
                transitionTypes={["page"]}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-[4rem_1fr_auto] md:py-6"
              >
                <span className="label text-wine">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span
                    className={`font-display block text-[clamp(1.9rem,3.6vw,3.6rem)] leading-none transition-[translate,font-style] duration-700 ease-(--ease-out-expo) group-hover:translate-x-3 ${active === i ? "italic" : ""}`}
                  >
                    {c.title}
                  </span>
                  <span className="label mt-2 block opacity-55">{c.kicker}</span>
                </span>
                <span className="label hidden tabular-nums opacity-50 sm:block">
                  {countItems(c.id) > 0 ? `${countItems(c.id)} tétel` : ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
          <Link
            href="/kinalatunk"
            transitionTypes={["page"]}
            className="group inline-flex items-center gap-4 rounded-full bg-ink py-4 pl-7 pr-5 text-paper transition-colors duration-500 hover:bg-wine"
          >
            <span className="label">A teljes itallap</span>
            <ArrowRight className="size-5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <p className="max-w-[36ch] text-sm text-ink/70">
            Aktuális süteményeinket a látványhűtőben találod – hozzá egy kávé, maga a Mennyország.
          </p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-5">
        <div className="md:sticky md:top-[calc(var(--header-h)+2rem)]">
          <div className="arch relative aspect-[4/5] bg-paper-2" data-anim="img">
            {menu.map((c, i) => {
              const p = chapterPhoto[c.id];
              return (
                <Image
                  key={c.id}
                  src={p.src}
                  alt={i === active ? p.alt : ""}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className={`object-cover transition-[opacity,scale] duration-1000 ease-(--ease-out-expo) ${
                    i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"
                  }`}
                />
              );
            })}
          </div>

          <div className="mt-6 border border-ink/20 p-5 md:p-6">
            <p className="label text-wine">Vidd haza az OPS élményt!</p>
            <ul className="mt-4 space-y-2">
              {takeHome.map((t) => (
                <li key={t.name} className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-xl">
                    {t.name} <span className="label opacity-55">{t.size}</span>
                  </span>
                  <span className="tabular-nums text-sm">{t.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
