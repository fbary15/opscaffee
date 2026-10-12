import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { Rooms } from "@/components/home/Rooms";
import { Logo } from "@/components/Logo";
import { Marquee } from "@/components/Marquee";
import { Page } from "@/components/Page";
import { HouseNotes } from "@/components/sections/HouseNotes";
import { Visit } from "@/components/sections/Visit";
import { menu } from "@/content/menu";
import { photos } from "@/content/photos";

const specialLemonades = menu.find((c) => c.id === "tea")!.groups.find((g) => g.title === "Speciális limonádé")!;

export default function Home() {
  return (
    <Page>
      <Hero />

      <div className="relative z-10 bg-wine py-5 text-paper [--bean-cut:var(--color-wine)] md:py-7">
        <Marquee
          className="font-display text-[clamp(1.8rem,4.2vw,4rem)] italic leading-none"
          items={["Egyedi, saját pörkölésű", "100% Arabica", "DECK Caffé", "Unique, home roasted"]}
        />
      </div>

      {/* I. — A ház */}
      <section className="relative z-10 bg-paper pt-[16vh] text-ink" aria-labelledby="manifesto-title">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 px-(--gutter) pb-14">
          <p className="label col-span-12 text-wine md:col-span-3 md:pt-3">I. — A ház</p>
          <h2
            id="manifesto-title"
            className="font-display display-md col-span-12 max-w-[22ch] md:col-span-9"
            data-anim="lines"
          >
            Te már tudod, hogy olyan jó <em>egy kávé mellett:</em>
          </h2>
        </div>
        <Manifesto />

        <div className="grid grid-cols-12 gap-x-4 gap-y-14 px-(--gutter) pb-[18vh] pt-[16vh]">
          <div className="col-span-12 md:col-span-5">
            <figure className="md:sticky md:top-[14vh]">
              <div className="arch relative aspect-[3/4] overflow-hidden" data-anim="img">
                <div className="absolute inset-x-0 -inset-y-[10%]" data-parallax="0.07">
                  <Image
                    src={photos.szalon.src}
                    alt={photos.szalon.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover object-[45%_50%]"
                  />
                </div>
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between border-t border-ink/15 pt-3">
                <span className="font-display text-xl italic">A szalon</span>
                <span className="label opacity-50">Gagarin út 17.</span>
              </figcaption>
            </figure>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-[14vh]">
            <div className="prose-cafe max-w-[50ch] text-lg leading-[1.7] md:text-xl">
              <p className="dropcap" data-anim="fade">
                A helyszín meghatározó, mint az olaszoknál. A kávézó, ahová járunk rendszeresen, úgy fogad, mint a Mamma
                otthon, tudja, hogy mire vágyunk. Ahogy a család, a legbefogadóbb közeg, ahol önmagunk lehetünk.
              </p>
              <p data-anim="fade">
                Egy jó szó, egy mosoly… sokszor még a napunkat is boldoggá teszi. A minőség, az egyedi pörkölés minden
                kávét élménnyé varázsol. Hozzá egy házi készítésű sütemény: maga a Mennyország a hozzánk betérőknek. A
                város legjobb törzsvendégeinek a legmagasabb minőség jár!
              </p>
            </div>

            <blockquote className="my-[10vh] border-l border-wine pl-6 md:-ml-[6vw] md:pl-10">
              <p className="font-display display-md italic text-wine" data-anim="lines">
                „Itt megáll az idő, figyelünk rád.”
              </p>
            </blockquote>

            <div className="prose-cafe max-w-[50ch] text-lg leading-[1.7] md:text-xl">
              <p data-anim="fade">
                A régmúlt igényes vendéglátása, a szeretet, a tisztelet és a ti elégedettségetek azért fontos számunkra,
                mert ez a hivatásunk. A legmodernebb technológiai fejlesztésnek köszönhetően a legfinomabb italokkal
                kényeztetünk.
              </p>
            </div>

            <div className="mt-14 flex items-center gap-6 border-t border-ink/15 pt-8" data-anim="fade">
              <Logo className="h-20 w-auto shrink-0 text-ink" />
              <p className="label leading-relaxed">
                DECK Caffé
                <br />
                <span className="opacity-55">Egyedi, saját pörkölésű, 100% Arabica</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* II. — Körbenézni */}
      <Rooms />

      {/* III. — Kínálatunk */}
      <section className="bg-paper py-[16vh] text-ink" aria-labelledby="menu-title">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 px-(--gutter) pb-14">
          <p className="label col-span-12 text-wine md:col-span-3 md:pt-6">III. — Kínálatunk</p>
          <h2 id="menu-title" className="font-display display-xl col-span-12 md:col-span-9" data-anim="lines">
            Minden, ami kávé. <em>És ami mellé jár.</em>
          </h2>
        </div>
        <MenuTeaser />
      </section>

      {/* IV. — A terasz */}
      <section className="overflow-hidden bg-wine py-[16vh] text-paper" aria-labelledby="terrace-title">
        <div className="grid grid-cols-12 items-end gap-x-4 gap-y-12 px-(--gutter)">
          <div className="relative col-span-12 aspect-[4/3] overflow-hidden md:col-span-7" data-anim="img">
            <div className="absolute inset-x-0 -inset-y-[10%]" data-parallax="0.08">
              <Image
                src={photos.terasz.src}
                alt={photos.terasz.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-[3vw]">
            <p className="label text-paper/60">IV. — A terasz</p>
            <h2 id="terrace-title" className="font-display display-lg mt-6" data-anim="lines">
              Virágok, fények, <em>limonádé.</em>
            </h2>
            <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-paper/80" data-anim="fade">
              A zöldövezeti terasz a színes, illatos virágaival, hangulatos fényeivel hívogat, hogy igyunk egy
              gyümölcsös limonádét, amit saját recept alapján, helyi kistermelők finom, roppanós, friss gyümölcseivel
              szolgálunk fel.
            </p>
          </div>
        </div>

        <div className="mt-[12vh] px-(--gutter)">
          <div className="flex items-baseline justify-between border-b border-paper/25 pb-4">
            <p className="label">{specialLemonades.title}</p>
            <p className="label opacity-60">{specialLemonades.meta}</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4" data-anim="stagger">
            {specialLemonades.items.map((l, i) => (
              <li
                key={l.name}
                className="border-b border-paper/20 py-8 sm:odd:pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="label text-paper/50">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display mt-4 text-3xl leading-tight">{l.name}</p>
                {l.note && <p className="mt-2 text-sm italic text-paper/65">{l.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HouseNotes />
      <Visit />
    </Page>
  );
}
