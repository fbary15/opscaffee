"use client";

import { events } from "@/content/events";
import { site } from "@/content/site";
import { useClock } from "@/lib/use-clock";
import { ArrowUpRight } from "./Icons";

const monthFmt = new Intl.DateTimeFormat("hu-HU", { month: "short", timeZone: "Europe/Budapest" });
const dayFmt = new Intl.DateTimeFormat("hu-HU", { weekday: "long", timeZone: "Europe/Budapest" });

export function EventsList() {
  const now = useClock();
  const today = now ? now.toISOString().slice(0, 10) : "";
  const upcoming = [...events].filter((e) => !today || e.date >= today).sort((a, b) => a.date.localeCompare(b.date));

  if (upcoming.length === 0) {
    return (
      <div className="grid grid-cols-12 gap-x-4 gap-y-10 border-t border-ink/15 pt-12">
        <p className="font-display display-lg col-span-12 italic md:col-span-7">Hamarosan…</p>
        <div className="col-span-12 md:col-span-5">
          <p className="max-w-[40ch] text-lg leading-relaxed text-ink/75">
            Jelenleg nincs meghirdetett programunk. Kövess minket, hogy elsőként értesülj, ha valami különlegeset
            tervezünk!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[site.instagram, site.facebook].map((s, i) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-ink/25 py-3.5 pl-6 pr-4 transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <span className="label">{i === 0 ? "Instagram" : "Facebook"}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <ol className="border-t border-ink/15">
      {upcoming.map((e) => {
        const d = new Date(`${e.date}T12:00:00`);
        return (
          <li
            key={`${e.date}-${e.title}`}
            className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-ink/15 py-8"
          >
            <div className="col-span-4 md:col-span-2">
              <p className="font-display text-6xl leading-none tabular-nums">{d.getDate()}</p>
              <p className="label mt-2 text-wine">{monthFmt.format(d)}</p>
            </div>
            <div className="col-span-8 md:col-span-3">
              <p className="label opacity-60">
                {dayFmt.format(d)}
                {e.time && ` · ${e.time}`}
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <h3 className="font-display display-md">{e.title}</h3>
              {e.text && <p className="mt-3 max-w-[52ch] text-ink/70">{e.text}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
