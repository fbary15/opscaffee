import { site } from "@/content/site";

/**
 * Beágyazott Google-térkép. Alapból visszafogott, az oldal tónusaihoz igazított
 * színekkel jelenik meg, egér alatt (vagy fókuszban) teljes színben.
 * Az iframe teteje a boltív mögé lóg, így a Google helykártyája nem vágódik félbe
 * (útvonaltervezésre külön gomb van).
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative overflow-hidden bg-paper-2 ${className}`}>
      <iframe
        title={`${site.name} a Google Térképen`}
        src={site.mapEmbedUrl}
        className="absolute inset-x-0 -top-[110px] h-[calc(100%+110px)] w-full border-0 [filter:grayscale(.85)_sepia(.2)_contrast(1.05)] transition-[filter] duration-700 group-hover:[filter:none] group-focus-within:[filter:none]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
