import { weeklyHours } from "@/content/site";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** A budapesti idő szerinti nap (0 = vasárnap) és perc. */
export function budapestNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Budapest",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export type OpenStatus =
  | { open: true; closes: string; day: number }
  | { open: false; opensDay: number; opens: string; today: boolean; day: number };

/** Ünnepnapokat nem kezel – azokon a nyitvatartás eltérhet. */
export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = budapestNow(date);
  const today = weeklyHours[day];
  if (minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { open: true, closes: today.close, day };
  }
  if (minutes < toMinutes(today.open)) {
    return { open: false, opensDay: day, opens: today.open, today: true, day };
  }
  const next = (day + 1) % 7;
  return { open: false, opensDay: next, opens: weeklyHours[next].open, today: false, day };
}

export const dayNames = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
