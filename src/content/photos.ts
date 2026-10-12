import type { StaticImageData } from "next/image";

import bar from "@/assets/photos/bar.jpg";
import terasz from "@/assets/photos/terasz.jpg";
import lampa from "@/assets/photos/lampa.jpg";
import latte from "@/assets/photos/latte.jpg";
import szalon from "@/assets/photos/szalon.jpg";
import toast from "@/assets/photos/toast.jpg";
import croissant from "@/assets/photos/croissant.jpg";
import aranyszoba from "@/assets/photos/aranyszoba.jpg";
import keret from "@/assets/photos/keret.jpg";
import espresso from "@/assets/photos/espresso.jpg";

export type Photo = {
  id: string;
  src: StaticImageData;
  alt: string;
  caption: string;
  credit?: string;
};

export const photos = {
  bar: {
    id: "bar",
    src: bar,
    alt: "A pult bársony bárszékekkel, mögötte téglafal boltíves fülkékkel",
    caption: "A pult",
  },
  szalon: {
    id: "szalon",
    src: szalon,
    alt: "Antik kanapé és gyertyatartós asztal egy régi portré alatt",
    caption: "A szalon",
  },
  lampa: {
    id: "lampa",
    src: lampa,
    alt: "Meleg fényű állólámpa, csíkos antik pad és régi kávédaráló, a falon régi városkép",
    caption: "Régi idők fényei",
  },
  aranyszoba: {
    id: "aranyszoba",
    src: aranyszoba,
    alt: "Aranyló fényű szoba csillárral, bársony fotelekkel",
    caption: "Aranyszoba",
  },
  latte: {
    id: "latte",
    src: latte,
    alt: "Három cappuccino latte arttal zöld, rózsaszín és kék csészében",
    caption: "Latte art",
  },
  terasz: {
    id: "terasz",
    src: terasz,
    alt: "Fonott karosszékek a napsütéses, zöldövezeti teraszon napernyők alatt",
    caption: "A terasz",
  },
  keret: {
    id: "keret",
    src: keret,
    alt: "Kávé üvegpohárban, aranyozott keretes tálcán, fenyőtobozokkal",
    caption: "Téli este",
  },
  espresso: {
    id: "espresso",
    src: espresso,
    alt: "Espresso folyik a kávégépből egy üvegpohárba",
    caption: "Espresso",
  },
  toast: {
    id: "toast",
    src: toast,
    alt: "Grillezett sonkás-sajtos toast friss salátával",
    caption: "Toast",
    credit: "Márton Szalai",
  },
  croissant: {
    id: "croissant",
    src: croissant,
    alt: "Vajas croissant színes zománcbögrék előtt",
    caption: "Croissant",
    credit: "Márton Szalai",
  },
} satisfies Record<string, Photo>;

export const galleryOrder: Photo[] = [
  photos.lampa,
  photos.latte,
  photos.bar,
  photos.terasz,
  photos.aranyszoba,
  photos.szalon,
  photos.croissant,
  photos.espresso,
  photos.toast,
  photos.keret,
];
