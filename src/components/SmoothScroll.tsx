"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { onIntroDone } from "./Intro";

let instance: Lenis | null = null;
export const getLenis = () => instance;

export function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.animReady = "1";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, autoRaf: false, anchors: { offset: -80 } });
    instance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    // Az intro alatt ne lehessen görgetni.
    let offIntro = () => {};
    if (!window.__opsIntroDone) {
      lenis.stop();
      offIntro = onIntroDone(() => lenis.start());
    }

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      offIntro();
      gsap.ticker.remove(tick);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
