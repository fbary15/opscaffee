import Link from "next/link";
import { Page } from "@/components/Page";

export default function NotFound() {
  return (
    <Page>
      <section className="flex min-h-svh flex-col justify-end bg-ink px-(--gutter) pb-[12vh] pt-[calc(var(--header-h)+8vh)] text-paper">
        <p className="label text-brass" data-anim="fade" data-immediate>
          404
        </p>
        <h1 className="font-display display-xl mt-8 max-w-[14ch]" data-anim="lines" data-immediate data-delay="0.1">
          Ez most <em>nincs az itallapon.</em>
        </h1>
        <p className="mt-8 max-w-[40ch] text-paper/70" data-anim="fade" data-immediate data-delay="0.4">
          A keresett oldal nem létezik, vagy elköltözött. A kávé viszont ugyanott vár.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-anim="fade" data-immediate data-delay="0.5">
          <Link
            href="/"
            transitionTypes={["page"]}
            className="label inline-flex rounded-full bg-paper px-7 py-4 text-ink transition-colors duration-500 hover:bg-brass"
          >
            Vissza a főoldalra
          </Link>
          <Link
            href="/kinalatunk"
            transitionTypes={["page"]}
            className="label inline-flex rounded-full border border-paper/30 px-7 py-4 transition-colors duration-500 hover:border-paper"
          >
            Kínálatunk
          </Link>
        </div>
      </section>
    </Page>
  );
}
