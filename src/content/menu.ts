/**
 * Itallap – 2026 nyár.
 * A nyomtatott itallap (src/assets/itallap) alapján. Új szezonban elég ezt a fájlt frissíteni.
 */

export type MenuItem = {
  name: string;
  /** Rövid leírás, összetevők, kiszerelés. */
  note?: string;
  /** Allergén kódok, lásd `allergens`. */
  allergens?: number[];
  sugarFree?: boolean;
};

export type MenuGroup = {
  title: string;
  /** Pl. kiszerelés a csoport fejlécében („4 dl”, „2 cl / 4 cl”). */
  meta?: string;
  intro?: string;
  sugarFree?: boolean;
  items: MenuItem[];
};

export type MenuChapter = {
  id: string;
  title: string;
  kicker: string;
  groups: MenuGroup[];
};

export const menuSeason = "2026 nyár";

export const menu: MenuChapter[] = [
  {
    id: "kave",
    title: "Minden, ami kávé",
    kicker: "Egyedi, saját pörkölésű, 100% Arabica",
    groups: [
      {
        title: "Kávé",
        items: [
          { name: "Ristretto" },
          { name: "Espresso" },
          { name: "Lungo" },
          { name: "Espresso macchiato" },
          { name: "Americano" },
          { name: "Doppio" },
          { name: "Cappuccino" },
          { name: "Cappuccino con panna" },
          { name: "Flat white" },
          { name: "Cortado" },
          { name: "Latte macchiato" },
          { name: "Wiener Melange" },
          { name: "Caffé Deck" },
          { name: "Matcha cappuccino" },
          { name: "Matcha latte" },
          { name: "Chai latte" },
          { name: "Dirty chai latte" },
          { name: "Dirty matcha latte" },
          { name: "Irish coffee" },
        ],
      },
      {
        title: "Választható ízek",
        items: [
          { name: "Sós karamell" },
          { name: "Pörkölt mogyoró" },
          { name: "Fahéj" },
          { name: "Kókusz" },
          { name: "Vanília", sugarFree: true },
          { name: "Karamell", sugarFree: true },
        ],
      },
      {
        title: "Extrák",
        items: [
          { name: "Extra shot" },
          { name: "Kókusztej vagy mandulatej", note: "1 dl" },
          { name: "Kávé elvitelre" },
          {
            name: "Naked felár",
            note: "20 gramm őrleményből, nyitott karral készítve. Ha szereted a kávé ízét, ezt ki kell próbálnod! Kérheted americanóból, doppióból, cortadóból és flat white-ból.",
          },
        ],
      },
    ],
  },
  {
    id: "jeges",
    title: "Minden, ami jeges",
    kicker: "Hűs a teraszra",
    groups: [
      {
        title: "Jeges kávék",
        items: [
          { name: "Klasszikus jegeskávé", note: "vaníliafagylalttal" },
          { name: "Jeges cappuccino" },
          { name: "Jeges latte macchiato" },
          { name: "Jeges XXL latte" },
          { name: "Jeges matcha cappuccino" },
          { name: "Jeges matcha latte" },
          { name: "Jeges matcha latte gyümölccsel", note: "eper, mangó vagy cseresznye" },
          { name: "Jeges chai latte" },
          { name: "Jeges dirty chai latte" },
          { name: "Affogato" },
          { name: "Espresso gyömbér" },
          { name: "Espresso tonic" },
          { name: "Espresso narancs" },
          { name: "Matcha tonic" },
          { name: "Jeges Bailey’s kávé" },
        ],
      },
      {
        title: "„Nem csak kicsiknek”",
        items: [
          { name: "Gyerek cappuccino" },
          { name: "Gyerek latte" },
          { name: "Házi kakaó", note: "tejszínhabbal" },
          {
            name: "Forró csokoládé",
            note: "karamell, barna, fehér, ruby vagy light csoki",
          },
        ],
      },
    ],
  },
  {
    id: "tea",
    title: "Tea, szörp, limonádé",
    kicker: "Saját recept, helyi gyümölcs",
    groups: [
      {
        title: "Tea",
        items: [
          { name: "Cascara", note: "kávécseresznye tea" },
          { name: "Fűszeres chai tea", note: "tejjel" },
        ],
      },
      {
        title: "Fekete tea",
        items: [{ name: "Earl Grey", note: "fekete teafű válogatás" }],
      },
      {
        title: "Zöld tea",
        items: [
          { name: "Jasmin", note: "zöld teafüvek, jázminvirág" },
          { name: "Sencha Gojibogyó", note: "zöld teafű, bogyós gyümölcs, búzavirág" },
        ],
      },
      {
        title: "Valódi gyümölcstea",
        items: [
          { name: "Almás morzsa", note: "alma, csipkebogyó, hibiszkuszvirág" },
          { name: "Pirított mandula", note: "mandula, fahéj, cékla" },
          { name: "Alma & gyömbér & mandarin" },
          { name: "Mangó álom", note: "mangó, ananász, narancs" },
          { name: "Epres muffin", note: "eper, kókuszchips, hibiszkuszvirág" },
        ],
      },
      {
        title: "Gyógynövény tea",
        items: [
          { name: "Ankerblüte", note: "gyógynövények, eukaliptusz, gojibogyó" },
          { name: "Gyömbér Friss", note: "citromfű, édesgyökér, gyömbér" },
          { name: "Nana Minze", note: "zöld nana menta" },
        ],
      },
      {
        title: "Házi szörp",
        items: [
          { name: "Eper" },
          { name: "Narancs – gyömbér – kurkuma" },
          { name: "Meglepetés" },
          { name: "Narancsos bodzavirág", sugarFree: true },
        ],
      },
      {
        title: "Házi jegestea",
        items: [
          { name: "Vörösáfonya & eper" },
          { name: "Jázminos zöldtea & mangó" },
          { name: "Fűszeres chai tea", note: "tejjel" },
        ],
      },
      {
        title: "Limonádé",
        items: [{ name: "Lime & citrom, eper, mangó, málna, cseresznye" }],
      },
      {
        title: "Cukormentes limonádé",
        sugarFree: true,
        items: [{ name: "Lime & citrom, eper, narancs-menta" }],
      },
      {
        title: "Speciális limonádé",
        meta: "4 dl",
        items: [
          { name: "Caffé Deck limo", note: "a jól ismert íz, átdolgozva" },
          { name: "Bodza & menta & uborka", note: "a klasszikus" },
          { name: "FacsaMatcha", note: "facsart narancs matchával" },
          { name: "Red Bull – mangó – lime", note: "hmmm…" },
        ],
      },
    ],
  },
  {
    id: "uditok",
    title: "Üdítők, gyümölcslevek",
    kicker: "Hidegen",
    groups: [
      {
        title: "Gyümölcslevek",
        items: [
          { name: "Toma őszibarack 50%", note: "0,25 l" },
          { name: "Toma narancs 100%", note: "0,25 l" },
          { name: "Frissen facsart narancs 100%" },
          { name: "Préselt almalé 100%" },
        ],
      },
      {
        title: "Ásványvíz",
        items: [
          { name: "Szentkirályi savas", note: "0,33 l" },
          { name: "Szentkirályi mentes", note: "0,33 l" },
          { name: "Szódavíz", note: "0,1 l" },
        ],
      },
      {
        title: "Szénsavas üdítő",
        items: [
          { name: "Pepsi Cola / Pepsi Max", note: "0,25 l" },
          { name: "Canada Dry", note: "0,25 l" },
          { name: "Schweppes Tonic", note: "0,25 l" },
        ],
      },
      {
        title: "Energiaital",
        items: [{ name: "Red Bull", note: "0,25 l" }],
      },
      {
        title: "Üdítő elvitelre",
        meta: "0,5 l",
        items: [{ name: "Pepsi Cola / Pepsi Max" }, { name: "Szentkirályi savas / mentes" }],
      },
    ],
  },
  {
    id: "bar",
    title: "Bár & borlap",
    kicker: "Ha már este van",
    groups: [
      {
        title: "Csapolt sör",
        items: [
          { name: "Coors", note: "0,25 l" },
          { name: "Coors", note: "0,5 l" },
        ],
      },
      {
        title: "Üveges sör",
        items: [
          { name: "Stella Artois N.A.", note: "0,33 l, alkoholmentes" },
          { name: "Stella Artois", note: "0,33 l" },
          { name: "Staropramen", note: "0,5 l" },
          { name: "Miller / Miller lime", note: "0,33 l" },
        ],
      },
      {
        title: "Pálinka",
        meta: "2 cl / 4 cl",
        intro: "Birkás Pálinka, Győrvár",
        items: [
          { name: "Szilva", note: "48%" },
          { name: "Vasi vadkörte", note: "40%" },
          { name: "Kajszibarack", note: "40%" },
        ],
      },
      {
        title: "Rövid ital",
        meta: "4 cl",
        items: [
          { name: "Zwack Unicum" },
          { name: "Jägermeister" },
          { name: "Aperol" },
          { name: "Limoncello" },
          { name: "Hennessy V.S." },
          { name: "Jameson" },
          { name: "Absolut" },
          { name: "Hendrick’s Gin" },
          { name: "Matusalem Gran Reserva 15 Y.O." },
          { name: "Bailey’s" },
        ],
      },
      {
        title: "Fröccs & spritzers",
        items: [
          { name: "Aperol Spritz" },
          { name: "Limoncello Spritz" },
          { name: "Hugo" },
          { name: "Levendulás rozé" },
        ],
      },
      {
        title: "Buborékos",
        items: [
          {
            name: "Zonin Prosecco Frizzante Brut",
            note: "Finoman buborékos, igazi olasz.",
          },
        ],
      },
      {
        title: "Fehér",
        items: [
          {
            name: "„Ops” Rizling ’25",
            note: "Szászi Birtok, Hegymagas, Balaton. A ház bora: fröccsbe is nyugodtan, „nem csak” kezdőknek. Bio.",
          },
          {
            name: "Tolnai Chardolini ’25",
            note: "Simigh Családi Pincészet, Tolna. Könnyű, légies fehér házasítás: zöldveltelinis almás és körtés jegyek, a Chardonnay biztosítja mellé a tartalmat.",
          },
        ],
      },
      {
        title: "Rozé",
        items: [
          {
            name: "Tolnai Cabernet Sauvignon Rosé ’25",
            note: "Simigh Családi Pincészet, Tolna. Szamócás, tartalmas, harapni való bor. Többszörös díjnyertes.",
          },
        ],
      },
      {
        title: "Vörös",
        items: [
          {
            name: "Szekszárdi Merlot ’18",
            note: "Simigh Családi Pincészet, Szekszárd. Gyümölcsös típusú merlot, 12 hónapig érlelték 225 literes hordóban. Ízében cseresznye és málna jegyeit hordozza.",
          },
        ],
      },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    kicker: "Reggelire, uzsonnára",
    groups: [
      {
        title: "Croissant",
        items: [{ name: "Croissant", note: "választható házi lekvár & vaj", allergens: [1, 7] }],
      },
      {
        title: "Toast",
        items: [
          {
            name: "Házi füstölt sonka",
            note: "mustár, ementáli sajt, kevert saláta",
            allergens: [1, 7, 10],
          },
          {
            name: "Házi szalámi",
            note: "sajtkrém, ementáli, kevert saláta",
            allergens: [1, 7],
          },
          {
            name: "Mozzarella",
            note: "ementáli, sajtkrém, kevert saláta",
            allergens: [1, 7],
          },
        ],
      },
      {
        title: "Szendvics",
        items: [
          {
            name: "OPS bagel",
            note: "házi turista, vaj, csemegeuborka, Piros Arany, ementáli sajt",
            allergens: [1, 7],
          },
          {
            name: "Croissant",
            note: "mozzarella, paradicsom, rukkola, pesto",
            allergens: [1, 3, 4],
          },
        ],
      },
      {
        title: "Sütemények",
        intro:
          "Aktuális sütemény-kínálatunkat a látványhűtőnkben tudod megnézni. Kérheted elviteles dobozban is (grab box).",
        items: [],
      },
    ],
  },
];

export const takeHome = [
  { name: "DECK Caffé", size: "100 g", price: "1 690 Ft / csomag" },
  { name: "Kávékeksz", size: "100 g", price: "1 800 Ft / csomag" },
];

export const allergens: Record<number, string> = {
  1: "Glutént tartalmazó gabonafélék",
  2: "Rákfélék",
  3: "Tojás",
  4: "Halfélék",
  5: "Mogyorófélék",
  6: "Szójabab",
  7: "Tej",
  8: "Csonthéjas termések",
  9: "Zeller",
  10: "Mustár",
  11: "Szezámmag",
  12: "Kén-dioxid és szulfitok",
  13: "Csillagfürt",
  14: "Puhatestűek",
};

export const menuFootnotes = [
  "A számla végösszegéhez 14% felszolgálási díj kerül felszámításra.",
  "Az árak az ÁFÁ-t tartalmazzák, és forintban értendők.",
  "Ha valamilyen ételallergiád van, kérjük, rendelés előtt jelezd a felszolgálónak!",
];
