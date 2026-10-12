"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { budapestNow } from "@/lib/hours";

declare global {
  interface Window {
    __opsIntroDone?: boolean;
  }
}

const finish = () => {
  window.__opsIntroDone = true;
  window.dispatchEvent(new Event("ops:intro-done"));
};

/** Ha még nem futott le az intro, megvárja; különben azonnal hív. */
export function onIntroDone(cb: () => void) {
  if (window.__opsIntroDone) {
    cb();
    return () => {};
  }
  window.addEventListener("ops:intro-done", cb, { once: true });
  return () => window.removeEventListener("ops:intro-done", cb);
}

/**
 * „Itt megáll az idő.” – az óra mutatói pörögnek, majd megállnak a pontos
 * budapesti időnél, aztán felhúzódik a függöny. Munkamenetenként egyszer fut.
 */
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const root = document.documentElement;

      if (root.classList.contains("intro-skip")) {
        el.style.display = "none";
        finish();
        return;
      }

      try {
        sessionStorage.setItem("ops-intro", "1");
      } catch {}

      root.style.overflow = "hidden";
      const { minutes } = budapestNow();
      const h = Math.floor(minutes / 60) % 12;
      const m = minutes % 60;

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => {
          el.style.display = "none";
        },
      });

      gsap.set(".intro-min, .intro-hour", { svgOrigin: "60 60" });

      tl.fromTo(".intro-ring", { strokeDashoffset: 340 }, { strokeDashoffset: 0, duration: 1, ease: "power3.inOut" })
        .fromTo(".intro-label", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.2)
        .fromTo(".intro-min", { rotate: 0 }, { rotate: 720 + m * 6, duration: 1.6, ease: "expo.inOut" }, 0.05)
        .fromTo(
          ".intro-hour",
          { rotate: 0 },
          { rotate: 360 + h * 30 + m * 0.5, duration: 1.6, ease: "expo.inOut" },
          0.05,
        )
        .to(".intro-inner", { autoAlpha: 0, y: -24, duration: 0.45, ease: "power2.in" }, "+=0.1")
        .add(() => {
          root.style.overflow = "";
          finish();
        })
        .to(el, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "<-0.1");

      return () => {
        root.style.overflow = "";
      };
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="intro fixed inset-0 z-[80] flex items-center justify-center bg-ink text-paper"
      aria-hidden
    >
      <div className="intro-inner flex flex-col items-center gap-7">
        <svg viewBox="0 0 120 120" className="size-24 text-brass md:size-28">
          <circle
            className="intro-ring"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="340"
            transform="rotate(-90 60 60)"
          />
          {Array.from({ length: 12 }, (_, i) => (
            <line
              key={i}
              x1="60"
              y1="10"
              x2="60"
              y2={i % 3 === 0 ? 17 : 14}
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${i * 30} 60 60)`}
              opacity={0.7}
            />
          ))}
          <line
            className="intro-hour"
            x1="60"
            y1="60"
            x2="60"
            y2="34"
            stroke="#eee5d3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            className="intro-min"
            x1="60"
            y1="60"
            x2="60"
            y2="20"
            stroke="#eee5d3"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="60" cy="60" r="2.4" fill="#eee5d3" />
        </svg>
        <div className="text-center">
          <p className="intro-label font-display text-3xl italic md:text-4xl">OPS Caffé</p>
          <p className="intro-label label mt-3 opacity-60">Szombathely · Alapítva 2015</p>
        </div>
      </div>
    </div>
  );
}
