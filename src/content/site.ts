export const site = {
  name: "OPS Caffé by DECK",
  shortName: "OPS Caffé",
  url: "https://opscaffe.hu",
  founded: 2015,
  tagline: "Itt megáll az idő.",
  description:
    "Kávézó Szombathelyen, a Gagarin úton. Egyedi, saját pörkölésű, 100% Arabica DECK kávé, házi sütemények, zöldövezeti terasz és egy kis kávés-múzeum a téli kertben.",
  address: {
    street: "Gagarin út 17.",
    city: "Szombathely",
    zip: "9700",
    country: "Magyarország",
  },
  geo: { lat: 47.23035, lng: 16.60517 },
  phone: "+36 20 943 2154",
  phoneHref: "tel:+36209432154",
  email: "info@opscaffe.hu",
  instagram: { handle: "@opscaffebydeck", url: "https://www.instagram.com/opscaffebydeck/" },
  facebook: { handle: "opscaffebydeck", url: "https://www.facebook.com/opscaffebydeck" },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=OPS%20Caff%C3%A9%20by%20DECK%2C%20Szombathely%2C%20Gagarin%20%C3%BAt%2017",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.2961244735975!2d16.605165076371787!3d47.23035327115789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476eb9ae3d890a93%3A0x30ee32f845846387!2sOPS%20Caff%C3%A9%20by%20DECK!5e0!3m2!1shu!2shu!4v1698812480095!5m2!1shu!2shu",
  operator: {
    name: "Ops Cafe Kft.",
    address: "9700 Szombathely, Kenderesi u. 1.",
  },
} as const;

/** Nyitvatartás. A napok indexe a JS Date.getDay() szerint: 0 = vasárnap. */
export type DayHours = { open: string; close: string };

export const weeklyHours: Record<number, DayHours> = {
  1: { open: "7:30", close: "20:00" },
  2: { open: "7:30", close: "20:00" },
  3: { open: "7:30", close: "20:00" },
  4: { open: "7:30", close: "20:00" },
  5: { open: "7:30", close: "20:00" },
  6: { open: "8:00", close: "20:00" },
  0: { open: "9:00", close: "18:00" },
};

export const hoursTable = [
  { label: "Hétfő – péntek", days: [1, 2, 3, 4, 5], open: "7:30", close: "20:00" },
  { label: "Szombat", days: [6], open: "8:00", close: "20:00" },
  { label: "Vasárnap", days: [0], open: "9:00", close: "18:00" },
  { label: "Ünnepnap", days: [] as number[], open: "9:00", close: "20:00" },
];

export const nav = [
  { href: "/kinalatunk", label: "Kínálatunk" },
  { href: "/galeria", label: "Galéria" },
  { href: "/programok", label: "Programok" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const houseNotes = [
  {
    key: "kutya",
    title: "Kutyabarát hely",
    sub: "Dogs allowed",
    text: "A négylábú barátokat is szeretettel várjuk.",
  },
  {
    key: "wifi",
    title: "Wi-Fi",
    sub: "Wi-Fi",
    text: "A kávé mellé Wi-Fi is jár, ha dolgozni vagy olvasni ülnél be.",
  },
  {
    key: "fust",
    title: "Füstmentes zóna",
    sub: "No smoking",
    text: "A kávézóban és a bejárat 5 méteres körzetében tilos a dohányzás.",
  },
] as const;
