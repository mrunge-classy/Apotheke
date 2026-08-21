import { Icon } from "@/components/shared/Icon";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="section-y bg-sage-dark text-cream">
      <div className="container-shop flex flex-col items-center gap-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10">
          <Icon name="mail" className="h-5 w-5" />
        </span>
        <h2 className="font-display max-w-lg text-3xl font-semibold">
          Gesundheitstipps direkt ins Postfach
        </h2>
        <p className="max-w-md text-sm text-cream/75">
          Saisonale Empfehlungen, Neuigkeiten aus der Apotheke und exklusive Angebote –
          unaufdringlich, ein bis zwei Mal im Monat.
        </p>
        <NewsletterForm variant="dark" />
      </div>
    </section>
  );
}
