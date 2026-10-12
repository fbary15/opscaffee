import type { Metadata } from "next";
import Image from "next/image";
import { MenuNav } from "@/components/menu/MenuNav";
import { PrintedMenu } from "@/components/menu/PrintedMenu";
import { Page } from "@/components/Page";
import { allergens, menu, menuFootnotes, menuSeason, takeHome, type MenuGroup } from "@/content/menu";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Kínálatunk – itallap",
  description:
    "Az OPS Caffé teljes itallapja: egyedi, saját pörkölésű DECK kávék, jeges italok, teák, házi szörpök és limonádék, borok, valamint croissant, toast és szendvics.",
  alternates: { canonical: "/kinalatunk" },
};

function SugarFree() {
  return (
    <span className="label ml-2 inline-block -rotate-3 rounded-sm bg-wine px-1.5 py-0.5 align-middle text-[0.55rem] text-paper">
      Sugar free
    </span>
  );
}

function Group({ g }: { g: MenuGroup }) {
  return (
    <div className="break-inside-avoid" data-anim="fade">
      <div className="flex items-baseline justify-between gap-4 border-b border-ink/20 pb-3">
        <h3 className="label">
          {g.title}
          {g.sugarFree && <SugarFree />}
        </h3>
        {g.meta && <span className="label opacity-55">{g.meta}</span>}
      </div>
      {g.intro && <p className="mt-4 max-w-[46ch] text-sm italic text-ink/70">{g.intro}</p>}
      {g.items.length > 0 && (
        <ul className="mt-2">
          {g.items.map((it, i) => (
            <li key={`${it.name}-${i}`} className="border-b border-ink/8 py-2.5">
              <p className="font-display text-[1.35rem] leading-tight md:text-[1.5rem]">
                {it.name}
                {it.allergens && (
                  <sup className="label ml-1.5 align-super text-[0.55rem] text-wine" title="Allergének">
                    {it.allergens.join(",")}
                  </sup>
                )}
                {it.sugarFree && <SugarFree />}
              </p>
              {it.note && <p className="mt-1 max-w-[52ch] text-sm leading-snug text-ink/65">{it.note}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function MenuPage() {
  return (
    <Page>
      <section className="bg-ink px-(--gutter) pb-[12vh] pt-[calc(var(--header-h)+10vh)] text-paper">
        <div className="grid grid-cols-12 items-end gap-x-4 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <p className="label text-brass" data-anim="fade" data-immediate>
              Itallap — {menuSeason}
            </p>
            <h1 className="font-display display-xl mt-8" data-anim="lines" data-immediate data-delay="0.1">
              Kínála<em>tunk</em>
            </h1>
            <p
              className="mt-10 max-w-[44ch] text-lg leading-relaxed text-paper/75"
              data-anim="fade"
              data-immediate
              data-delay="0.4"
            >
              Egyedi, saját pörkölésű, 100% Arabica DECK kávé, házi szörpök és limonádék saját recept alapján,
              válogatott borok – és aktuális süteményeink a látványhűtőben.
            </p>
            <div className="mt-10" data-anim="fade" data-immediate data-delay="0.55">
              <PrintedMenu />
            </div>
          </div>
          <div className="col-span-8 col-start-5 md:col-span-4 md:col-start-9">
            <div className="arch relative aspect-[3/4]" data-anim="img" data-immediate data-delay="0.2">
              <Image
                src={photos.espresso.src}
                alt={photos.espresso.alt}
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 768px) 32vw, 66vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-(--gutter) pb-[14vh] text-ink">
        <div className="grid grid-cols-12 gap-x-4">
          <aside className="col-span-12 pt-10 md:col-span-3 md:pt-[10vh]">
            <MenuNav />
          </aside>

          <div className="col-span-12 md:col-span-9">
            {menu.map((c, i) => (
              <section
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-title`}
                className="scroll-mt-24 border-b border-ink/15 py-[10vh] last:border-b-0"
              >
                <header className="mb-12 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="label text-wine">{String(i + 1).padStart(2, "0")}</p>
                    <h2 id={`${c.id}-title`} className="font-display display-lg mt-3" data-anim="lines">
                      {c.title}
                    </h2>
                  </div>
                  <p className="label opacity-55">{c.kicker}</p>
                </header>
                <div className="gap-x-12 md:columns-2 [&>*]:mb-12">
                  {c.groups.map((g) => (
                    <Group key={g.title} g={g} />
                  ))}
                </div>
              </section>
            ))}

            <section
              aria-labelledby="takehome-title"
              className="mt-4 grid gap-10 bg-ink p-8 text-paper md:grid-cols-2 md:p-12"
            >
              <div>
                <p className="label text-brass">Elvitelre</p>
                <h2 id="takehome-title" className="font-display display-md mt-4">
                  Vidd haza <em>az OPS élményt!</em>
                </h2>
              </div>
              <ul className="self-end">
                {takeHome.map((t) => (
                  <li key={t.name} className="flex items-baseline justify-between gap-4 border-b border-paper/20 py-4">
                    <span className="font-display text-2xl">
                      {t.name} <span className="label opacity-55">{t.size}</span>
                    </span>
                    <span className="tabular-nums">{t.price}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="allergen-title" className="mt-16 grid gap-10 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 id="allergen-title" className="label">
                  Allergén információk
                </h2>
                <ul className="mt-6 space-y-2 text-sm text-ink/70">
                  {menuFootnotes.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <ol className="grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
                {Object.entries(allergens).map(([n, label]) => (
                  <li key={n} className="flex gap-3 border-b border-ink/10 py-1.5">
                    <span className="label w-5 text-wine">{n}</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </section>
    </Page>
  );
}
