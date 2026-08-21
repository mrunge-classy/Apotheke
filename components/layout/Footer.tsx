import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { categories } from "@/lib/categories";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sage-dark text-cream">
      <div className="container-shop py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-sage-dark">
                <Icon name="mortar" className="h-4.5 w-4.5" />
              </span>
              <span className="font-display text-lg font-semibold">Apotheke am Stadtpark</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-cream/75">
              Ihre unabhängige Apotheke in Wien – persönliche Beratung vor Ort und ein
              sorgfältig ausgewähltes Sortiment freiverkäuflicher Produkte online.
            </p>
            <div className="mt-5 space-y-2 text-sm text-cream/75">
              <p className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 shrink-0" /> Stadtparkgasse 12, 1030 Wien
              </p>
              <p className="flex items-center gap-2">
                <Icon name="phone" className="h-4 w-4 shrink-0" /> +43 1 234 567
              </p>
              <p className="flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 shrink-0" /> Mo–Fr 8–18 Uhr, Sa 8–12 Uhr
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-cream/60">
              Produkte
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/produkte?kategorie=${c.slug}`} className="text-cream/85 hover:text-cream">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-cream/60">
              Unternehmen
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/ueber-uns" className="text-cream/85 hover:text-cream">Über uns</Link>
              </li>
              <li>
                <Link href="/blog" className="text-cream/85 hover:text-cream">Ratgeber</Link>
              </li>
              <li>
                <Link href="/impressum" className="text-cream/85 hover:text-cream">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-cream/85 hover:text-cream">Datenschutz</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-cream/60">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-cream/75">
              Gesundheitstipps und Neuigkeiten aus unserer Apotheke – ein bis zwei Mal im Monat.
            </p>
            <div className="mt-4">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Apotheke am Stadtpark. Proof of Concept – kein echter Betrieb.</p>
          <p className="flex items-center gap-1.5">
            <Icon name="shield" className="h-3.5 w-3.5" />
            Nur freiverkäufliche Produkte. Keine rezeptpflichtigen Arzneimittel im Online-Shop.
          </p>
        </div>
      </div>
    </footer>
  );
}
