import { Icon, type IconName } from "@/components/shared/Icon";

const items: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "badge-check",
    title: "Pharmazeutisch geprüft",
    text: "Jedes Produkt wird von unserem Apotheker-Team ausgewählt und beraten.",
  },
  {
    icon: "truck",
    title: "Schnelle Lieferung",
    text: "Bestellung vor 14 Uhr, Lieferung am nächsten Werktag in ganz Österreich.",
  },
  {
    icon: "lock",
    title: "Sicherer Ablauf",
    text: "Klarer, transparenter Bestellprozess vom Warenkorb bis zur Bestätigung.",
  },
  {
    icon: "shield",
    title: "Nur freiverkäuflich",
    text: "Ausschließlich rezeptfreie Produkte – verantwortungsvoll ausgewählt.",
  },
];

export function ValueProps() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-shop grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
