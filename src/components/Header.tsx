"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { OpenStatus } from "./OpenStatus";
import { getLenis } from "./SmoothScroll";

export function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-paper transition-transform duration-700 ease-(--ease-out-expo) ${open ? "" : "mix-blend-difference"}`}
        style={{ viewTransitionName: "site-header", transform: hidden && !open ? "translateY(-110%)" : undefined }}
      >
        <div className="flex h-(--header-h) items-center justify-between px-(--gutter)">
          <Link
            href="/"
            transitionTypes={["page"]}
            onClick={close}
            className="group flex items-center gap-3"
            aria-label={`${site.name} – főoldal`}
          >
            <Logo className="h-9 w-auto transition-transform duration-700 ease-(--ease-out-expo) group-hover:rotate-[-8deg] md:h-10" />
            <span className="label hidden sm:block">
              OPS Caffé <span className="opacity-50">— Szombathely</span>
            </span>
          </Link>

          <nav aria-label="Fő navigáció" className="hidden items-center gap-8 md:flex lg:gap-10">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                transitionTypes={["page"]}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="label group relative flex items-baseline gap-1.5"
              >
                <span className="text-[0.6rem] opacity-50">0{i + 1}</span>
                <span className="u-link">{item.label}</span>
              </Link>
            ))}
            <OpenStatus className="label hidden opacity-90 lg:inline-flex" compact />
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="label relative z-10 flex items-center gap-3 py-2 md:hidden"
          >
            <span>{open ? "Bezár" : "Menü"}</span>
            <span className="relative block h-2.5 w-6" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        data-open={open}
        inert={!open}
        className="group/menu fixed inset-0 z-40 flex flex-col bg-wine px-(--gutter) pb-8 pt-[calc(var(--header-h)+2rem)] text-paper transition-[clip-path] duration-900 ease-(--ease-in-out-quart) [clip-path:inset(0_0_100%_0)] data-[open=true]:[clip-path:inset(0_0_0_0)] md:hidden"
      >
        <nav aria-label="Mobil navigáció" className="flex flex-1 flex-col justify-center gap-1">
          {[{ href: "/", label: "Főoldal" }, ...nav].map((item, i) => (
            <div key={item.href} className="overflow-hidden">
              <Link
                href={item.href}
                transitionTypes={["page"]}
                onClick={close}
                aria-current={pathname === item.href ? "page" : undefined}
                className="font-display flex translate-y-full items-baseline gap-4 py-1 text-[13vw] leading-[1.02] transition-transform duration-900 ease-(--ease-out-expo) group-data-[open=true]/menu:translate-y-0 aria-[current=page]:italic"
                style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
              >
                <span className="label text-[0.65rem] opacity-60">0{i}</span>
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="grid grid-cols-2 gap-6 border-t border-paper/20 pt-6 text-sm opacity-0 transition-opacity delay-300 duration-700 group-data-[open=true]/menu:opacity-100">
          <div>
            <p className="label mb-2 opacity-60">Cím</p>
            <p>
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>
          <div>
            <p className="label mb-2 opacity-60">Kapcsolat</p>
            <a href={site.phoneHref} className="block">
              {site.phone}
            </a>
            <a href={site.instagram.url} target="_blank" rel="noreferrer" className="block">
              Instagram
            </a>
          </div>
          <OpenStatus className="label col-span-2" />
        </div>
      </div>
    </>
  );
}
