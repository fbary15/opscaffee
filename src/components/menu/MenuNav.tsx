"use client";

import { useEffect, useState } from "react";
import { menu } from "@/content/menu";

/** Az itallap fejezetei – asztali nézetben ragadós oldalsáv, mobilon vízszintes lista. */
export function MenuNav() {
  const [active, setActive] = useState(menu[0].id);

  useEffect(() => {
    const sections = menu.map((c) => document.getElementById(c.id)).filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Itallap fejezetei" className="md:sticky md:top-[calc(var(--header-h)+3rem)]">
      <p className="label mb-5 hidden opacity-50 md:block">Fejezetek</p>
      <ol className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:flex-col md:gap-0 md:overflow-visible">
        {menu.map((c, i) => {
          const on = active === c.id;
          return (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                aria-current={on ? "true" : undefined}
                className={`group flex items-baseline gap-3 rounded-full border px-4 py-2 transition-colors duration-500 md:rounded-none md:border-0 md:px-0 md:py-1.5 ${
                  on
                    ? "border-ink bg-ink text-paper md:bg-transparent md:text-wine"
                    : "border-ink/20 md:text-ink/60 md:hover:text-ink"
                }`}
              >
                <span className="label hidden w-6 md:inline">{String(i + 1).padStart(2, "0")}</span>
                <span className={`whitespace-nowrap text-sm md:font-display md:text-2xl ${on ? "md:italic" : ""}`}>
                  {c.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
