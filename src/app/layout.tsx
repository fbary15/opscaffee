import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";
import "./globals.css";

const serif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Kávézó Szombathelyen`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: site.name,
    title: `${site.name} — Itt megáll az idő.`,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#120e0b",
};

/* Még hidratálás előtt fut: bekapcsolja a mozgás-előkészítést, és eldönti, kell-e intro.
   Ha 3,5 mp alatt nem indul el a JS, minden alapállapotban látható marad. */
const bootScript = `(function(){var d=document.documentElement;var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm)d.classList.add('js-anim');try{if(rm||sessionStorage.getItem('ops-intro'))d.classList.add('intro-skip')}catch(e){d.classList.add('intro-skip')}setTimeout(function(){if(!d.dataset.animReady){d.classList.remove('js-anim');d.classList.add('intro-skip')}},3500)})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  telephone: site.phone.replace(/\s/g, ""),
  email: site.email,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.zip,
    addressCountry: "HU",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "20:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "18:00" },
  ],
  servesCuisine: ["Kávé", "Sütemény", "Limonádé"],
  sameAs: [site.instagram.url, site.facebook.url],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${serif.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a
          href="#tartalom"
          className="label fixed left-4 top-4 z-[100] -translate-y-24 bg-paper px-4 py-3 text-ink focus:translate-y-0"
        >
          Ugrás a tartalomra
        </a>
        <Intro />
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <div className="grain" aria-hidden />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
