import Link from "next/link";
import { hoursTable, nav, site } from "@/content/site";
import { AnimScope } from "./AnimScope";
import { BackToTop, Year } from "./FooterBits";
import { ArrowUpRight } from "./Icons";
import { OpenStatus } from "./OpenStatus";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <AnimScope>
        <div className="grid grid-cols-12 gap-y-6 px-(--gutter) pb-[12vh] pt-[18vh]">
          <p className="label col-span-12 text-brass md:col-span-3 md:pt-4">Viszlát hamarosan</p>
          <p className="font-display display-lg col-span-12 max-w-[16ch] md:col-span-9" data-anim="lines">
            Találkozzunk a jelenben, hogy megidézzük a múltat, és <em>legyen közös jövőnk!</em>
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-paper/15 px-(--gutter) py-12 text-sm md:grid-cols-12"
          data-anim="stagger"
        >
          <div className="col-span-2 md:col-span-3">
            <p className="label mb-4 opacity-50">Cím</p>
            <p className="leading-relaxed">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-brass"
            >
              <span className="u-link">Útvonaltervezés</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <div className="col-span-2 md:col-span-3">
            <p className="label mb-4 opacity-50">Nyitvatartás</p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
              {hoursTable.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="opacity-70">{row.label}</dt>
                  <dd className="tabular-nums">
                    {row.open}–{row.close}
                  </dd>
                </div>
              ))}
            </dl>
            <OpenStatus className="label mt-4 text-brass" />
          </div>
          <div className="md:col-span-2">
            <p className="label mb-4 opacity-50">Kapcsolat</p>
            <a href={site.phoneHref} className="u-link block w-fit">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="u-link mt-1 block w-fit">
              {site.email}
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="label mb-4 opacity-50">Oldalak</p>
            <ul className="space-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} transitionTypes={["page"]} className="u-link">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label mb-4 opacity-50">Kövess minket</p>
            <a href={site.instagram.url} target="_blank" rel="noreferrer" className="u-link block w-fit">
              Instagram
            </a>
            <a href={site.facebook.url} target="_blank" rel="noreferrer" className="u-link mt-1 block w-fit">
              Facebook
            </a>
          </div>
        </div>
      </AnimScope>

      <div aria-hidden className="pointer-events-none select-none px-(--gutter)">
        <p className="font-display translate-y-[18%] whitespace-nowrap text-center text-[19.5vw] leading-[0.8] tracking-[-0.05em] text-paper">
          OPS <em className="text-brass">Caffé</em>
        </p>
      </div>

      <div className="relative flex flex-col gap-3 border-t border-paper/15 bg-ink px-(--gutter) py-6 text-xs text-paper/60 md:flex-row md:items-center md:justify-between">
        <p>
          © {site.founded}–<Year /> {site.name}
        </p>
        <p>
          Üzemeltető: {site.operator.name}, {site.operator.address}
        </p>
        <BackToTop className="u-link w-fit text-left text-paper" />
      </div>
    </footer>
  );
}
