import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { LinkButton } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line bg-cream">
      <div className="container-shop grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-lighter px-3 py-1.5 text-xs font-medium tracking-wide text-sage-dark uppercase">
            <Icon name="badge-check" className="h-3.5 w-3.5" />
            Geführt von Mag. pharm. Julia Berger
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl">
            Ihre Apotheke aus Wien –
            <span className="text-sage-dark"> jetzt auch online.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Rezeptfreie Medikamente, Vitamine und Pflegeprodukte, sorgfältig ausgewählt und
            pharmazeutisch geprüft. Bestellt vor 14 Uhr, morgen bei Ihnen zu Hause in Wien.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <LinkButton href="/produkte" size="md">
              Produkte entdecken
              <Icon name="arrow-right" className="h-4 w-4" />
            </LinkButton>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-sage-dark"
            >
              Gesundheitsratgeber lesen
              <Icon name="chevron-right" className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <dt className="text-xs tracking-wide text-ink-soft uppercase">Sortiment</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">100% frei­verkäuflich</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-ink-soft uppercase">Lieferung</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">In ganz Österreich</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-ink-soft uppercase">Beratung</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">Von Apotheker:innen</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-[2.5rem] bg-sage-lighter" />
          <div className="absolute top-6 left-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-paper shadow-sm ring-1 ring-line">
            <Icon name="mortar" className="h-12 w-12 text-sage-dark" strokeWidth={1.3} />
          </div>
          <div className="absolute right-8 bottom-24 flex h-24 w-24 items-center justify-center rounded-full bg-terracotta-light shadow-sm">
            <Icon name="leaf" className="h-10 w-10 text-terracotta-dark" strokeWidth={1.3} />
          </div>
          <div className="absolute right-16 -bottom-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-sage shadow-sm">
            <Icon name="cross" className="h-8 w-8 text-cream" strokeWidth={1.6} />
          </div>
          <div className="absolute top-16 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-paper shadow-sm ring-1 ring-line">
            <Icon name="droplet" className="h-7 w-7 text-sage-dark" strokeWidth={1.3} />
          </div>
          <div className="absolute bottom-8 left-4 flex items-center gap-2 rounded-2xl bg-paper px-4 py-3 shadow-sm ring-1 ring-line">
            <Icon name="truck" className="h-5 w-5 text-sage-dark" />
            <span className="text-xs font-medium text-ink">Gratis Versand ab €40</span>
          </div>
        </div>
      </div>
    </section>
  );
}
