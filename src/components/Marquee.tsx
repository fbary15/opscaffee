import { Fragment } from "react";

export function Marquee({
  items,
  className = "",
  speed = 38,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const row = (hidden: boolean) => (
    <div className="marquee__track" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <Fragment key={i}>
          <span className="whitespace-nowrap px-[0.45em]">{t}</span>
          <svg viewBox="0 0 20 28" className="mx-[0.45em] h-[0.62em] w-auto shrink-0 opacity-70" aria-hidden>
            <ellipse cx="10" cy="14" rx="8.6" ry="12.6" fill="currentColor" />
            <path
              d="M10 2.5c-3.2 4-3.2 7.5 0 11.5s3.2 7.5 0 11.5"
              fill="none"
              stroke="var(--bean-cut, #120e0b)"
              strokeWidth="1.8"
            />
          </svg>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}>
      {row(false)}
      {row(true)}
    </div>
  );
}
