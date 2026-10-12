"use client";

import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  const id = window.setInterval(cb, 20_000);
  return () => window.clearInterval(id);
};
const getSnapshot = () => Math.floor(Date.now() / 60_000);
const getServerSnapshot = () => 0;

/**
 * Az aktuális idő percre kerekítve (Date). Szerveren és hidratáláskor `null`,
 * így a statikus HTML nem függ az időtől.
 */
export function useClock(): Date | null {
  const minute = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return minute ? new Date(minute * 60_000) : null;
}
