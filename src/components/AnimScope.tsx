"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

/**
 * Egy oldal mozgásait kezeli a data-attribútumok alapján:
 *
 *   data-anim="lines"   – soronként, maszkolva úszik be a szöveg
 *   data-anim="fade"    – finom beúszás alulról
 *   data-anim="stagger" – a gyerekelemek egymás után úsznak be
 *   data-anim="img"     – kép alulról kinyíló maszkkal, enyhe zoommal
 *   data-parallax="0.12" – görgetésre lassabban/gyorsabban mozgó elem
 *
 *   data-delay="0.2"    – késleltetés másodpercben
 *   data-immediate      – nem vár a görgetésre (hajtás feletti elemekhez)
 *
 * Az oldalak a React <Activity> miatt rejtve is a DOM-ban maradhatnak; a useGSAP
 * takarítása elrejtéskor visszaállít mindent, újramegjelenéskor pedig újraindul.
 */
export function AnimScope({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const q = <T extends HTMLElement = HTMLElement>(sel: string) => Array.from(root.querySelectorAll<T>(sel));

      const mm = gsap.matchMedia();

      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)", reduce: "(prefers-reduced-motion: reduce)" },
        (ctx) => {
          if (ctx.conditions?.reduce) {
            gsap.set(q("[data-anim]"), { autoAlpha: 1 });
            gsap.set(q('[data-anim="stagger"] > *'), { autoAlpha: 1 });
            return;
          }

          const trigger = (el: HTMLElement, start = "top 88%") =>
            el.hasAttribute("data-immediate") ? undefined : { trigger: el, start, once: true };
          const delay = (el: HTMLElement) => Number(el.dataset.delay ?? 0);

          q('[data-anim="lines"]').forEach((el) => {
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              linesClass: "split-line",
              autoSplit: true,
              onSplit(self) {
                gsap.set(el, { autoAlpha: 1 });
                return gsap.from(self.lines, {
                  yPercent: 135,
                  rotate: 1.5,
                  transformOrigin: "0% 0%",
                  duration: 1.25,
                  stagger: 0.085,
                  delay: delay(el),
                  scrollTrigger: trigger(el),
                });
              },
            });
          });

          q('[data-anim="fade"]').forEach((el) => {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 36 },
              { autoAlpha: 1, y: 0, duration: 1.2, delay: delay(el), scrollTrigger: trigger(el) },
            );
          });

          q('[data-anim="stagger"]').forEach((el) => {
            gsap.fromTo(
              el.children,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                stagger: 0.07,
                delay: delay(el),
                scrollTrigger: trigger(el, "top 85%"),
              },
            );
          });

          q('[data-anim="img"]').forEach((el) => {
            const media = el.querySelector("img");
            const tl = gsap.timeline({ delay: delay(el), scrollTrigger: trigger(el, "top 92%") });
            tl.fromTo(
              el,
              { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
            );
            if (media) tl.fromTo(media, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0.1);
          });

          q("[data-parallax]").forEach((el) => {
            const speed = Number(el.dataset.parallax || 0.1);
            gsap.fromTo(
              el,
              { yPercent: -speed * 100 },
              {
                yPercent: speed * 100,
                ease: "none",
                scrollTrigger: {
                  trigger: el.parentElement ?? el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });
        },
      );

      const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => cancelAnimationFrame(raf);
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
