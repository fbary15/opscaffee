"use client";

import { dayNames, getOpenStatus, type OpenStatus as Status } from "@/lib/hours";
import { useClock } from "@/lib/use-clock";

function describe(s: Status) {
  if (s.open) return { lead: "Most nyitva", rest: `${s.closes}-ig` };
  if (s.today) return { lead: "Zárva", rest: `ma ${s.opens}-kor nyitunk` };
  const tomorrow = s.opensDay === (s.day + 1) % 7;
  return { lead: "Zárva", rest: `${tomorrow ? "holnap" : dayNames[s.opensDay]} ${s.opens}-kor nyitunk` };
}

export function OpenStatus({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const now = useClock();
  const status = now ? getOpenStatus(now) : null;
  const text = status ? describe(status) : null;

  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap ${className}`} aria-live="polite">
      <span className="relative flex size-2">
        {status?.open && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-50" />
        )}
        <span
          className={`relative inline-flex size-2 rounded-full ${status?.open ? "bg-current" : "border border-current"}`}
        />
      </span>
      {text ? (
        <span>
          {text.lead}
          {!compact && <span className="opacity-60"> · {text.rest}</span>}
        </span>
      ) : (
        <span className="opacity-60">Nyitvatartás</span>
      )}
    </span>
  );
}
