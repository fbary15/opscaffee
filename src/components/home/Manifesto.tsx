"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { photos } from "@/content/photos";
import { gsap, useGSAP } from "@/lib/gsap";

const reasons = [
  { n: "i.", text: "beszélgetni egy baráttal", photo: photos.latte },
  { n: "ii.", text: "romantikázni a szerelmeddel", photo: photos.szalon },
  { n: "iii.", text: "felfrissülni", photo: photos.terasz },
  { n: "iv.", text: "lelassulni", photo: photos.aranyszoba },
  { n: "v.", text: "gondolkodni az életről…", photo: photos.bar },
];

export function Manifesto() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const card = root.current?.querySelector<HTMLElement>(".mf-card");
        if (!card) return;
        const xTo = gsap.quickTo(card, "x", { duration: 0.7, ease: "power3.out" });
        const yTo = gsap.quickTo(card, "y", { duration: 0.7, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = root.current!.getBoundingClientRect();
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
        };
        root.current!.addEventListener("pointermove", move);
        return () => root.current?.removeEventListener("pointermove", move);
      });
    },
    { scope: root },
  );

  const show = contextSafe((i: number | null) => {
    setActive(i);
    gsap.to(".mf-card", {
      autoAlpha: i === null ? 0 : 1,
      scale: i === null ? 0.85 : 1,
      rotate: i === null ? 0 : i % 2 ? 3 : -3,
      duration: 0.6,
      ease: "power3.out",
    });
  });

  return (
    <div ref={root} className="relative" onPointerLeave={() => show(null)}>
      <ol className="border-t border-ink/15">
        {reasons.map((r, i) => (
          <li
            key={r.n}
            onPointerEnter={() => show(i)}
            className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-ink/15 px-(--gutter) py-5 md:py-7"
            data-anim="fade"
          >
            <span className="label col-span-2 text-wine md:col-span-3">{r.n}</span>
            <span className="font-display display-lg col-span-10 transition-[translate,color] duration-700 ease-(--ease-out-expo) group-hover:translate-x-[2vw] group-hover:text-wine md:col-span-9">
              {r.text}
            </span>
          </li>
        ))}
      </ol>

      <div
        className="mf-card pointer-events-none invisible absolute left-0 top-0 z-10 hidden aspect-[4/5] w-[19vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0 md:block"
        aria-hidden
      >
        {reasons.map((r, i) => (
          <Image
            key={r.n}
            src={r.photo.src}
            alt=""
            fill
            sizes="20vw"
            className={`object-cover transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
  );
}
