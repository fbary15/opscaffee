import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    qualities: [75, 85],
    formats: ["image/avif", "image/webp"],
  },
  // A régi Joomla-oldal címei, hogy a keresőkből és a könyvjelzőkből érkezők is célba érjenek.
  async redirects() {
    const pages = ["kinalatunk", "galeria", "programok", "kontakt"];
    return [
      ...pages.map((p) => ({ source: `/index.php/hu/${p}`, destination: `/${p}`, permanent: true })),
      { source: "/index.php/:lang(hu|en|de)", destination: "/", permanent: true },
      { source: "/index.php/:lang(en|de)/:path*", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
