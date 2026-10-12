# OPS Caffé by DECK – weboldal

Az [opscaffe.hu](https://opscaffe.hu) új oldala. Next.js 16 (App Router, statikus generálás), Tailwind CSS 4, GSAP + Lenis a mozgásokhoz. Vercelre készült, környezeti változó nem kell hozzá.

## Fejlesztés

```bash
npm install
npm run dev
```

A `npm run build` ellenőrzi a típusokat és legenerálja az összes oldalt statikusan.

## Tartalom szerkesztése

Minden szöveg és adat a `src/content` mappában van, kódot nem kell hozzá érteni:

| Fájl | Mi van benne |
| --- | --- |
| `site.ts` | cím, telefon, e-mail, nyitvatartás, közösségi linkek, „Jó tudni” pontok |
| `menu.ts` | a teljes itallap fejezetekre bontva, allergének, elviteles kávé árai |
| `events.ts` | programok – üres lista esetén a /programok oldal „Hamarosan…” állapotot mutat |
| `photos.ts` | a fotók, képaláírások, alt szövegek és a galéria sorrendje |

Új fotó: tedd a `src/assets/photos` mappába, vedd fel a `photos.ts`-be, és ha a galériában is kell, a `galleryOrder` listába. A Next.js automatikusan optimalizálja (AVIF/WebP, méretek).

A nyomtatott itallap oldalai (`src/assets/itallap`) a Kínálatunk oldalon lapozhatók. Új szezonban ezeket és a `menu.ts`-t kell cserélni.

## Felépítés

- `src/app` – oldalak: főoldal, `/kinalatunk`, `/galeria`, `/programok`, `/kontakt`, valamint sitemap, robots, OG-kép
- `src/components/home` – a főoldal szekciói (hero boltívvel, „Te már tudod…” lista, vízszintes galéria, itallap-előzetes)
- `src/components/AnimScope.tsx` – a görgetésre induló animációk `data-anim` attribútumokkal (`lines`, `fade`, `stagger`, `img`, `data-parallax`)
- `src/components/Intro.tsx` – nyitó animáció (munkamenetenként egyszer): az óra mutatói megállnak a pontos időnél

A régi Joomla-címek (`/index.php/hu/...`) 308-as átirányítással mutatnak az új oldalakra (`next.config.ts`).

Akadálymentesség: a `prefers-reduced-motion` beállítást tiszteletben tartja (nincs smooth scroll, intro és parallax), a tartalom JavaScript nélkül is olvasható, a Google-térkép pedig csak kattintásra töltődik be.

## Élesítés (Vercel)

1. A repót importáld a Vercelben (*Add New → Project*). Framework: Next.js, minden alapbeállítás maradhat.
2. *Settings → Domains*: add hozzá az `opscaffe.hu` és `www.opscaffe.hu` domaint, és állítsd be a DNS-t a Vercel utasításai szerint.
3. Ha a domain más lesz, a `src/content/site.ts`-ben a `url` mezőt is írd át (sitemap, OG, kanonikus linkek).
