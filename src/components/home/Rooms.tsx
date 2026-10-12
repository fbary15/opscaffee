"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { photos, type Photo } from "@/content/photos";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight } from "../Icons";

type Panel = { photo: Photo; w: string; h: string; align: "start" | "end" | "center"; note?: string };

const panels: Panel[] = [
  {
    photo: photos.bar,
    w: "md:w-[44vw]",
    h: "md:h-[62svh]",
    align: "end",
    note: "Bárszékek, régi városképek a pult előtt",
  },
  { photo: photos.szalon, w: "md:w-[30vw]", h: "md:h-[46svh]", align: "start", note: "Gyertyafény és antik kanapé" },
  { photo: photos.aranyszoba, w: "md:w-[24vw]", h: "md:h-[64svh]", align: "center" },
  { photo: photos.latte, w: "md:w-[38vw]", h: "md:h-[50svh]", align: "end", note: "Minden csésze egy kis rajz" },
  { photo: photos.keret, w: "md:w-[24vw]", h: "md:h-[56svh]", align: "start" },
  { photo: photos.terasz, w: "md:w-[42vw]", h: "md:h-[60svh]", align: "center", note: "Zöldövezet, napernyők alatt" },
];

const alignCls = { start: "md:self-start", end: "md:self-end", center: "md:self-center" };

export function Rooms() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const section = root.current!;
        const track = section.querySelector<HTMLElement>(".rooms-track")!;
        const distance = () => track.scrollWidth - window.innerWidth;
        const setHeight = () => {
          section.style.height = `${distance() + window.innerHeight}px`;
        };
        setHeight();

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
            onRefreshInit: setHeight,
          },
        });

        gsap.utils.toArray<HTMLElement>(".room-img", section).forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -7 },
            {
              xPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });

        gsap.fromTo(
          ".rooms-progress",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: true },
          },
        );

        return () => {
          section.style.height = "";
        };
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-ink text-paper" aria-labelledby="rooms-title">
      <div className="md:sticky md:top-0 md:h-svh md:overflow-hidden">
        <div className="rooms-track flex snap-x snap-mandatory scroll-px-(--gutter) gap-5 overflow-x-auto px-(--gutter) pb-16 pt-24 [scrollbar-width:none] md:h-full md:w-max md:snap-none md:items-stretch md:gap-[4vw] md:overflow-visible md:py-[12svh]">
          <div className="flex w-[78vw] shrink-0 snap-start flex-col justify-between md:w-[34vw]">
            <div>
              <p className="label text-brass">II. — Körbenézni</p>
              <h2 id="rooms-title" className="font-display display-lg mt-6">
                Pillanatok <em>az OPS‑ból</em>
              </h2>
            </div>
            <p className="mt-8 max-w-[38ch] text-paper/70">
              A régmúlt igényes vendéglátása: bársony, aranykeret, gyertyafény, a falakon a régi idők. Kis
              kávés-múzeumunk a téli kertben időutazásra csábít – nosztalgiázzunk együtt!
            </p>
          </div>

          {panels.map((p, i) => (
            <figure
              key={p.photo.id}
              className={`flex w-[78vw] shrink-0 snap-start flex-col gap-4 ${p.w} ${alignCls[p.align]}`}
            >
              <div
                className={`relative aspect-[4/5] overflow-hidden md:aspect-auto ${p.h} ${i % 3 === 1 ? "arch" : ""}`}
              >
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 80vw"
                  placeholder="blur"
                  className="room-img scale-[1.16] object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-6 border-t border-paper/20 pt-3">
                <span className="flex items-baseline gap-3">
                  <span className="label text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl italic">{p.photo.caption}</span>
                </span>
                {p.note && <span className="hidden text-right text-xs text-paper/50 lg:block">{p.note}</span>}
              </figcaption>
            </figure>
          ))}

          <div className="flex w-[70vw] shrink-0 snap-start items-center md:w-[30vw]">
            <Link
              href="/galeria"
              transitionTypes={["page"]}
              className="group font-display display-lg flex flex-col gap-4"
            >
              <span>
                A teljes
                <br />
                <em>galéria</em>
              </span>
              <span className="flex size-16 items-center justify-center rounded-full border border-paper/30 transition-colors duration-500 group-hover:border-brass group-hover:bg-brass group-hover:text-ink md:size-20">
                <ArrowRight className="size-6 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-(--gutter) bottom-8 hidden h-px bg-paper/15 md:block">
          <div className="rooms-progress h-full origin-left scale-x-0 bg-brass" />
        </div>
      </div>
    </section>
  );
}
