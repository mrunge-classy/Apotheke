import type { Metadata } from "next";
import { Icon } from "@/components/shared/Icon";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <div className="container-shop py-14 md:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-terracotta-light px-4 py-3.5 text-sm text-terracotta-dark">
          <Icon name="shield" className="mt-0.5 h-4.5 w-4.5 shrink-0" />
          <p>
            Diese Seite ist Teil eines Demonstrationsprojekts. Die folgende Erklärung
            beschreibt, wie diese Demo-Anwendung technisch funktioniert – sie ersetzt keine
            rechtlich geprüfte Datenschutzerklärung für einen realen Geschäftsbetrieb.
          </p>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-base font-semibold text-ink">Newsletter-Anmeldung</h2>
            <p className="mt-2">
              Wenn Sie sich für den Newsletter anmelden, wird Ihre E-Mail-Adresse in dieser
              Demo-Anwendung serverseitig gespeichert, um Mehrfachanmeldungen zu erkennen. Es
              wird kein tatsächlicher Newsletter versendet und Ihre Adresse wird nicht an
              Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Bestellungen</h2>
            <p className="mt-2">
              Angaben, die Sie im Bestellprozess eingeben (z. B. Name und Lieferadresse), werden
              ausschließlich zur Darstellung der Bestellbestätigung dieser Demo gespeichert. Es
              erfolgt keine reale Zahlungsabwicklung und keine reale Warenlieferung.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Warenkorb</h2>
            <p className="mt-2">
              Ihr Warenkorb wird lokal in Ihrem Browser gespeichert (Local Storage), damit er
              beim erneuten Besuch erhalten bleibt. Diese Daten verlassen Ihr Gerät nicht,
              bis Sie eine Bestellung abschließen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Cookies</h2>
            <p className="mt-2">
              Wir verwenden technisch notwendige Cookies bzw. Local-Storage-Einträge für den
              Warenkorb sowie zur Speicherung Ihrer Cookie-Einstellung. Optionale Cookies zur
              Reichweitenmessung werden in dieser Demo nicht eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink">Ihre Rechte</h2>
            <p className="mt-2">
              In einem realen Betrieb hätten Sie gemäß DSGVO das Recht auf Auskunft,
              Berichtigung, Löschung und Datenübertragbarkeit bezüglich Ihrer
              personenbezogenen Daten. Da es sich hier um eine Demo-Anwendung ohne reale
              Kundendaten handelt, wenden Sie sich bei Fragen bitte direkt an die
              Projektverantwortlichen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
