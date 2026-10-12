"use client";

import { hoursTable } from "@/content/site";
import { budapestNow } from "@/lib/hours";
import { useClock } from "@/lib/use-clock";

export function HoursTable({ className = "", highlight = "text-brass" }: { className?: string; highlight?: string }) {
  const now = useClock();
  const today = now ? budapestNow(now).day : -1;

  return (
    <table className={`w-full border-collapse text-left ${className}`}>
      <caption className="sr-only">Nyitvatartás</caption>
      <tbody>
        {hoursTable.map((row) => {
          const isToday = row.days.includes(today);
          return (
            <tr
              key={row.label}
              className={`border-b border-current/15 transition-colors ${isToday ? highlight : ""}`}
              aria-current={isToday ? "date" : undefined}
            >
              <th scope="row" className="py-3.5 pr-6 font-normal">
                <span className="flex items-center gap-3">
                  {row.label}
                  {isToday && <span className="label text-[0.6rem]">ma</span>}
                </span>
              </th>
              <td className="font-display py-3.5 text-right text-2xl tabular-nums md:text-3xl">
                {row.open}
                <span className="px-1.5 opacity-50">–</span>
                {row.close}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
