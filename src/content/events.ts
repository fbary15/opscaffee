/**
 * Programok. Új program felvételéhez adj hozzá egy elemet a listához –
 * a /programok oldal és a főoldali előzetes automatikusan megjeleníti.
 *
 * Példa:
 * {
 *   date: "2026-11-14",
 *   time: "18:00",
 *   title: "Kávékóstoló a pörkölővel",
 *   text: "Három eredet, három pörkölés – egy este a DECK Caffé történetéről.",
 * }
 */
export type CafeEvent = {
  /** ÉÉÉÉ-HH-NN */
  date: string;
  time?: string;
  title: string;
  text?: string;
};

export const events: CafeEvent[] = [];
