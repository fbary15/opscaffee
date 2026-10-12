"use client";

import Image from "next/image";
import { useRef } from "react";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { onIntroDone } from "../Intro";
import { OpenStatus } from "../OpenStatus";

/**
 * A téglafal boltíves fülkéje az ablak: görgetésre kitágul a teljes képernyőre,
 * és „belépünk” a kávézóba.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { desktop, reduce } = ctx.conditions as Record<string, boolean>;
          const arch = desktop
            ? "inset(14% 20% 8% 54% round 13vw 13vw 0vw 0vw)"
            : "inset(26% 12% 21% 12% round 38vw 38vw 0vw 0vw)";
          const full = "inset(0% 0% 0% 0% round 0vw 0vw 0vw 0vw)";

          // A boltív a kép jobb felére esne – eltoljuk, hogy a lámpa kerüljön az ablakba.
          const shift = desktop ? 25 : 0;
          gsap.set(".hero-media", { clipPath: arch });
          gsap.set(".hero-img-wrap", { x: 0, xPercent: shift });
          if (reduce) {
            gsap.set(".hero-line-inner", { y: 0, yPercent: 0 });
            gsap.set(".hero-meta", { autoAlpha: 1 });
            return;
          }

          // Belépő animáció – az intro után
          const enter = gsap.timeline({ paused: true });
          enter
            .fromTo(
              ".hero-media-inner",
              { clipPath: "inset(100% 0% 0% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" },
            )
            .fromTo(".hero-img", { scale: 1.5 }, { scale: 1.12, duration: 2.4, ease: "expo.out" }, 0.2)
            .fromTo(
              ".hero-line-inner",
              { y: 0, yPercent: 150 },
              { y: 0, yPercent: 0, duration: 1.5, stagger: 0.12, ease: "expo.out" },
              0.45,
            )
            .fromTo(
              ".hero-meta",
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 1, stagger: 0.07, ease: "power3.out" },
              0.9,
            );
          const off = onIntroDone(() => enter.play());

          // Görgetés: a boltív kinyílik
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.8 },
          });
          tl.to(".hero-media", { clipPath: full, duration: 1 }, 0)
            .to(".hero-img-wrap", { scale: 0.89, xPercent: 0, duration: 1 }, 0)
            .to(".hero-line-1", { xPercent: desktop ? -28 : -40, autoAlpha: 0, duration: 0.55 }, 0)
            .to(".hero-line-2", { xPercent: desktop ? 28 : 40, autoAlpha: 0, duration: 0.55 }, 0)
            .to(".hero-meta-row", { autoAlpha: 0, y: 30, duration: 0.3 }, 0)
            .to(".hero-shade", { opacity: 0.62, duration: 0.8 }, 0.2)
            .fromTo(
              ".hero-welcome-line",
              { y: 0, yPercent: 150 },
              { y: 0, yPercent: 0, stagger: 0.08, duration: 0.35 },
              0.62,
            )
            .fromTo(".hero-welcome-label", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, 0.6);

          return off;
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-[240svh] bg-ink" aria-label="Bemutatkozás">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="hero-media absolute inset-0 [clip-path:inset(14%_20%_8%_54%_round_13vw_13vw_0vw_0vw)] max-md:[clip-path:inset(26%_12%_21%_12%_round_38vw_38vw_0vw_0vw)]">
          <div className="hero-media-inner absolute inset-0">
            <div className="hero-img-wrap absolute inset-0">
              <Image
                src={photos.lampa.src}
                alt={photos.lampa.alt}
                fill
                preload
                placeholder="blur"
                sizes="100vw"
                className="hero-img scale-[1.12] object-cover object-[50%_30%]"
              />
            </div>
            <div className="hero-shade absolute inset-0 bg-ink opacity-15" />
          </div>
        </div>

        <h1 className="font-display pointer-events-none absolute inset-x-(--gutter) bottom-[17%] top-[15%] flex flex-col justify-between max-md:bottom-[24%] max-md:top-[13%]">
          <span className="hero-line hero-line-1 line-mask">
            <span className="hero-line-inner display-xxl block">Itt megáll</span>
          </span>
          <span className="hero-line hero-line-2 line-mask text-right">
            <span className="hero-line-inner display-xxl block pr-[0.06em] italic">az idő.</span>
          </span>
        </h1>

        <div className="hero-meta-row absolute inset-x-(--gutter) bottom-6 grid grid-cols-2 items-end gap-6 text-paper md:bottom-8 md:grid-cols-12">
          <p className="hero-meta label col-span-1 leading-relaxed md:col-span-3">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
          <p className="hero-meta col-span-2 row-start-1 max-w-[34ch] text-sm leading-snug text-paper/80 md:col-span-4 md:col-start-4 md:row-start-auto">
            Egyedi, saját pörkölésű DECK kávé, házi sütemény, zöldövezeti terasz és egy kis kávés-múzeum a téli kertben.
          </p>
          <div className="hero-meta col-span-1 flex flex-col items-end gap-3 md:col-span-5 md:flex-row md:items-center md:justify-end md:gap-10">
            <OpenStatus className="label" compact />
            <span className="label flex items-center gap-3">
              Görgess
              <span className="relative block h-8 w-px overflow-hidden bg-paper/25">
                <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.8s_var(--ease-in-out-quart)_infinite] bg-paper" />
              </span>
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-(--gutter) text-center">
          <p className="hero-welcome-label label mb-6 text-brass opacity-0">Alapítva {site.founded}</p>
          <p className="font-display display-lg">
            <span className="line-mask">
              <span className="hero-welcome-line block translate-y-[150%]">Szeretettel köszöntünk</span>
            </span>
            <span className="line-mask">
              <span className="hero-welcome-line block translate-y-[150%] italic">az Ops Caffé by Deckben!</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
