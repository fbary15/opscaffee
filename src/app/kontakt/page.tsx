import type { Metadata } from "next";
import { Page } from "@/components/Page";
import { HouseNotes } from "@/components/sections/HouseNotes";
import { Visit } from "@/components/sections/Visit";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Nyitvatartás, elérhetőségek és útvonal: ${site.name}, ${site.address.zip} ${site.address.city}, ${site.address.street}`,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <Page>
      <div className="bg-paper pt-[calc(var(--header-h)+4vh)]">
        <Visit as="h1" label="Kontakt" first />
      </div>
      <HouseNotes />
      <section className="bg-paper px-(--gutter) pb-[14vh] text-ink">
        <div className="grid grid-cols-12 gap-x-4 gap-y-4 border-t border-ink/15 pt-8 text-sm">
          <p className="label col-span-12 opacity-50 md:col-span-3">Üzemeltető</p>
          <p className="col-span-12 md:col-span-9">
            {site.operator.name} · {site.operator.address}
          </p>
        </div>
      </section>
    </Page>
  );
}
