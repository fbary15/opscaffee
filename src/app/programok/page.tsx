import type { Metadata } from "next";
import Image from "next/image";
import { EventsList } from "@/components/EventsList";
import { Page } from "@/components/Page";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Programok",
  description: "Események, esték és különlegességek az OPS Caffé-ban, Szombathelyen.",
  alternates: { canonical: "/programok" },
};

export default function EventsPage() {
  return (
    <Page>
      <section className="bg-paper px-(--gutter) pb-[16vh] pt-[calc(var(--header-h)+10vh)] text-ink">
        <div className="grid grid-cols-12 items-end gap-x-4 gap-y-12 pb-[10vh]">
          <div className="col-span-12 md:col-span-8">
            <p className="label text-wine" data-anim="fade" data-immediate>
              Programok
            </p>
            <h1 className="font-display display-xl mt-8" data-anim="lines" data-immediate data-delay="0.1">
              Ami <em>nálunk</em> történik.
            </h1>
            <p className="mt-8 max-w-[44ch] text-lg text-ink/70" data-anim="fade" data-immediate data-delay="0.4">
              Amikor valami különlegeset tervezünk, itt és a közösségi oldalainkon jelentjük be elsőként.
            </p>
          </div>
          <div className="col-span-6 col-start-7 md:col-span-3 md:col-start-10">
            <div className="arch relative aspect-[3/4]" data-anim="img" data-immediate data-delay="0.25">
              <Image
                src={photos.keret.src}
                alt={photos.keret.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <EventsList />
      </section>
    </Page>
  );
}
