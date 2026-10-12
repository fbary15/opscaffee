import { houseNotes } from "@/content/site";
import { CrownDog, NoSmoking, WifiCup } from "../Icons";

const icons = { kutya: CrownDog, wifi: WifiCup, fust: NoSmoking } as const;

export function HouseNotes({ label = "Jó tudni" }: { label?: string }) {
  return (
    <section className="bg-paper px-(--gutter) py-[14vh] text-ink" aria-labelledby="notes-title">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <p className="label col-span-12 text-wine md:col-span-3">{label}</p>
        <h2
          id="notes-title"
          className="font-display display-md col-span-12 max-w-[20ch] md:col-span-9"
          data-anim="lines"
        >
          Pár apróság, mielőtt <em>betérsz.</em>
        </h2>
      </div>
      <ul className="mt-14 grid border-t border-ink/15 md:grid-cols-3" data-anim="stagger">
        {houseNotes.map((n) => {
          const Icon = icons[n.key];
          return (
            <li
              key={n.key}
              className="flex gap-6 border-b border-ink/15 py-8 md:flex-col md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0"
            >
              <Icon className="size-14 shrink-0 text-wine md:size-16" />
              <div>
                <h3 className="font-display text-3xl">{n.title}</h3>
                <p className="label mt-1 opacity-50">{n.sub}</p>
                <p className="mt-4 max-w-[32ch] text-ink/75">{n.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
