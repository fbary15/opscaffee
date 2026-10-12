type P = { className?: string };

export function ArrowRight({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}

/** A kávézó koronás kutyája, a bejárati tábla alapján. */
export function CrownDog({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M21 20 19 9l7 6 6-8 6 8 7-6-2 11z" strokeLinejoin="round" />
      <circle cx="19" cy="8.5" r="1.3" fill="currentColor" />
      <circle cx="32" cy="6.5" r="1.3" fill="currentColor" />
      <circle cx="45" cy="8.5" r="1.3" fill="currentColor" />
      <path d="M21 25c-3-3-9-2-10 3-1 6 2 12 7 12M43 25c3-3 9-2 10 3 1 6-2 12-7 12" />
      <path d="M20 26c0-3 5-5 12-5s12 2 12 5v17c0 8-5 14-12 14s-12-6-12-14z" />
      <path d="M32 21c4 4 4 10 0 14" />
      <path d="m25 34 2.2-1.6L29.4 34l-2.2 1.6zM34.6 34l2.2-1.6L39 34l-2.2 1.6z" fill="currentColor" stroke="none" />
      <path d="M27 45c1.5 3 8.5 3 10 0" strokeLinecap="round" />
    </svg>
  );
}

export function WifiCup({ className }: P) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M17 18a21 21 0 0 1 30 0M22 23.5a13.5 13.5 0 0 1 20 0M27 29a6.5 6.5 0 0 1 10 0" />
      <circle cx="32" cy="33.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="M14 39h34v4c0 8-7 14-17 14s-17-6-17-14z" strokeLinejoin="round" />
      <path d="M48 42h3a4.5 4.5 0 0 1 0 9h-4" />
    </svg>
  );
}

export function NoSmoking({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="32" cy="32" r="24" />
      <path d="m15 15 34 34" />
      <path d="M17 36h28v5H17zM41 36v5" />
      <path d="M40 30c0-4 4-4 4-8s-3-5-3-8" strokeLinecap="round" />
    </svg>
  );
}
