import { useId } from "react";

/**
 * A „Caffé OPS / DECK caffé” jelvény egyszínű, vektoros változata.
 * A szín a `currentColor`, a kivágások átlátszók – bármilyen háttéren működik.
 */
export function Logo({ className, title = "OPS Caffé by DECK" }: { className?: string; title?: string }) {
  const id = useId().replace(/:/g, "");
  const mask = `ops-logo-mask-${id}`;
  const clip = `ops-logo-clip-${id}`;

  return (
    <svg viewBox="0 0 240 208" className={className} role="img" aria-label={title}>
      <defs>
        <clipPath id={clip}>
          <circle cx="120" cy="104" r="81" />
        </clipPath>
        <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="208">
          <rect width="240" height="208" fill="#fff" />
          {/* csésze gőzzel */}
          <g fill="none" stroke="#000" strokeWidth="2.6" strokeLinecap="round">
            <path d="M113 34c-2.5 3 2.5 5 0 8M120 31c-2.5 3.5 2.5 6 0 10M127 34c-2.5 3 2.5 5 0 8" />
          </g>
          <path
            d="M106 47h28v3.5c0 7.6-6.2 13.5-14 13.5s-14-5.9-14-13.5zM134 50.5h2.6a4.4 4.4 0 0 1 0 8.8h-4.3"
            fill="#000"
            stroke="#000"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect x="101" y="65.5" width="38" height="2.6" rx="1.3" fill="#000" />
          {/* a szalag belső kontúrja */}
          <rect x="10.5" y="83.5" width="219" height="41" rx="20.5" fill="none" stroke="#000" strokeWidth="2.4" />
          <text
            x="120"
            y="115.5"
            textAnchor="middle"
            fill="#000"
            style={{
              fontFamily: "var(--font-archivo), Arial Narrow, Arial, sans-serif",
              fontWeight: 800,
              fontSize: 31,
              letterSpacing: 1.2,
              fontStretch: "70%",
              fontVariationSettings: '"wdth" 70',
            }}
          >
            CAFFÉ OPS
          </text>
          <text
            x="120"
            y="158"
            textAnchor="middle"
            fill="#000"
            style={{
              fontFamily: "var(--font-archivo), Arial, sans-serif",
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: 0.4,
              fontStretch: "88%",
              fontVariationSettings: '"wdth" 88',
            }}
          >
            DECK
          </text>
          <text
            x="138"
            y="167"
            textAnchor="end"
            fill="#000"
            style={{
              fontFamily: "var(--font-archivo), Arial, sans-serif",
              fontWeight: 700,
              fontSize: 6.2,
              letterSpacing: 0.6,
            }}
          >
            CAFFÉ
          </text>
        </mask>
      </defs>

      <circle cx="120" cy="104" r="92" fill="none" stroke="currentColor" strokeWidth="8" />
      <g mask={`url(#${mask})`} fill="currentColor">
        <g clipPath={`url(#${clip})`}>
          <rect x="74" y="0" width="92" height="208" />
        </g>
        <rect x="4" y="77" width="232" height="54" rx="27" />
      </g>
    </svg>
  );
}
