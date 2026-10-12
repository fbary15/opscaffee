import { site } from "@/content/site";
import { HoursTable } from "../HoursTable";
import { ArrowUpRight } from "../Icons";
import { MapEmbed } from "../MapEmbed";

export function Visit({
  label = "V. — Látogass el",
  as = "h2",
  first = false,
}: {
  label?: string;
  as?: "h1" | "h2";
  /** Az oldal tetején áll (Kontakt): nincs felső elválasztó, és a címsor rögtön animál. */
  first?: boolean;
}) {
  const Heading = as;
  const immediate = first ? { "data-immediate": "" } : {};
  return (
    <section className="bg-paper px-(--gutter) pb-[16vh] pt-[6vh] text-ink" aria-labelledby="visit-title">
      <div className={`grid grid-cols-12 gap-x-4 gap-y-6 ${first ? "pt-[6vh]" : "border-t border-ink/15 pt-[10vh]"}`}>
        <p className="label col-span-12 text-wine md:col-span-3 md:pt-6">{label}</p>
        <Heading
          id="visit-title"
          className="font-display display-xxl col-span-12 md:col-span-9"
          data-anim="lines"
          {...immediate}
        >
          Gagarin <em>út 17.</em>
        </Heading>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-x-4 gap-y-14">
        <div className="col-span-12 md:col-span-5">
          <MapEmbed className="arch aspect-[4/5] w-full" />
          <p className="label mt-4 opacity-60">
            {site.address.zip} {site.address.city}, {site.address.street}
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-[8vh]">
          <p className="label mb-2 opacity-50">Nyitvatartás</p>
          <HoursTable highlight="text-wine" />

          <div className="mt-14 grid gap-10 sm:grid-cols-2" data-anim="stagger">
            <div>
              <p className="label mb-3 opacity-50">Telefon</p>
              <a href={site.phoneHref} className="font-display u-link text-3xl">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="label mb-3 opacity-50">E-mail</p>
              <a href={`mailto:${site.email}`} className="font-display u-link text-3xl">
                {site.email}
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-wine py-4 pl-7 pr-5 text-paper transition-colors duration-500 hover:bg-ink"
            >
              <span className="label">Útvonaltervezés</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/25 py-4 pl-7 pr-5 transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-paper"
            >
              <span className="label">{site.instagram.handle}</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
