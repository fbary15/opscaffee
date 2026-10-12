import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ArrowUpRight } from "@/components/Icons";
import { Page } from "@/components/Page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Galéria",
  description: "Képek az OPS Caffé-ból: a pult, a szalon, a terasz, latte art és házi finomságok.",
  alternates: { canonical: "/galeria" },
};

export default function GalleryPage() {
  return (
    <Page>
      <section className="bg-ink px-(--gutter) pb-[16vh] pt-[calc(var(--header-h)+10vh)] text-paper">
        <div className="grid grid-cols-12 items-end gap-x-4 gap-y-8 pb-[12vh]">
          <div className="col-span-12 md:col-span-8">
            <p className="label text-brass" data-anim="fade" data-immediate>
              Galéria
            </p>
            <h1 className="font-display display-xl mt-8" data-anim="lines" data-immediate data-delay="0.1">
              Bársony, téglafal, <em>latte art.</em>
            </h1>
          </div>
          <p
            className="col-span-12 max-w-[36ch] text-paper/70 md:col-span-4"
            data-anim="fade"
            data-immediate
            data-delay="0.4"
          >
            A régmúlt hangulata és a mai kávékultúra egy helyen. Kattints bármelyik képre a nagyításhoz.
          </p>
        </div>

        <GalleryGrid />

        <a
          href={site.instagram.url}
          target="_blank"
          rel="noreferrer"
          className="group mt-[16vh] grid grid-cols-12 items-end gap-x-4 gap-y-6 border-t border-paper/15 pt-10"
        >
          <span className="label col-span-12 text-brass md:col-span-3">Még több pillanat</span>
          <span className="font-display display-lg col-span-12 flex items-end justify-between gap-6 md:col-span-9">
            <span className="transition-[font-style] group-hover:italic">{site.instagram.handle}</span>
            <ArrowUpRight className="size-[0.6em] shrink-0 transition-transform duration-700 ease-(--ease-out-expo) group-hover:-translate-y-2 group-hover:translate-x-2" />
          </span>
        </a>
      </section>
    </Page>
  );
}
