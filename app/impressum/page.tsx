import type { Metadata } from "next";
import { Icon } from "@/components/shared/Icon";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <div className="container-shop py-14 md:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Impressum</h1>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-terracotta-light px-4 py-3.5 text-sm text-terracotta-dark">
          <Icon name="shield" className="mt-0.5 h-4.5 w-4.5 shrink-0" />
          <p>
            Dieser Online-Shop ist ein <strong>Demonstrationsprojekt</strong> (Proof of Concept)
            für eine fiktive Apotheke. Es handelt sich um keinen realen Gewerbebetrieb, es
            werden keine echten Bestellungen ausgeliefert und keine echten Zahlungen
            verarbeitet.
          </p>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-base font-semibold text-ink">Angaben gemäß § 5 ECG, § 25 MedienG</h2>
            <p className="mt-2">
              Apotheke am Stadtpark GmbH (fiktiv)
              <br />
              Stadtparkgasse 12, 1030 Wien, Österreich
              <br />
              E-Mail: hallo@apotheke-stadtpark.beispiel
              <br />
              Telefon: +43 1 234 567
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Unternehmensgegenstand</h2>
            <p className="mt-2">Betrieb einer öffentlichen Apotheke (Demo-Darstellung).</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Berufsrechtliche Angaben (fiktiv)</h2>
            <p className="mt-2">
              Angehörige des Apothekerberufs unterliegen in Österreich der Österreichischen
              Apothekerkammer und dem Apothekengesetz (ApG). In diesem Demo-Projekt sind keine
              realen Berufsberechtigungen hinterlegt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Streitschlichtung</h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit. In einem realen Betrieb würde hier der Link zur OS-Plattform sowie eine
              Erklärung zur Teilnahme an einem Streitbeilegungsverfahren angeführt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Haftungshinweis</h2>
            <p className="mt-2">
              Alle Inhalte dieser Website dienen ausschließlich Demonstrationszwecken im Rahmen
              eines Portfolio-Projekts und stellen keine medizinische Beratung, kein reales
              Warenangebot und keine rechtsverbindliche Geschäftstätigkeit dar.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
