import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/shared/Icon";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Apotheke am Stadtpark in Wien – persönliche Beratung, pharmazeutische Kompetenz und ein sorgfältig ausgewähltes Online-Sortiment.",
};

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "badge-check",
    title: "Pharmazeutische Kompetenz",
    text: "Unser gesamtes Team ist ausgebildetes Apotheken-Fachpersonal – online wie vor Ort.",
  },
  {
    icon: "leaf",
    title: "Sorgfältige Auswahl",
    text: "Wir nehmen nur Produkte ins Sortiment, hinter denen wir fachlich stehen können.",
  },
  {
    icon: "shield",
    title: "Verantwortungsvoll",
    text: "Nur freiverkäufliche Produkte online – bei allem anderen beraten wir Sie persönlich.",
  },
];

const team = [
  {
    name: "Mag. pharm. Julia Berger",
    role: "Apothekerin & Betriebsleitung",
    bio: "Seit 2014 in der Apotheke am Stadtpark, mit Schwerpunkt Ernährung und Nahrungsergänzung.",
  },
  {
    name: "Mag. pharm. Thomas Egger",
    role: "Apotheker",
    bio: "Berät schwerpunktmäßig zu Kinder- und Familiengesundheit sowie Reisemedizin.",
  },
];

export default function UeberUnsPage() {
  return (
    <div>
      <section className="border-b border-line bg-paper">
        <div className="container-shop py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-wide text-sage-dark uppercase">
              Über uns
            </span>
            <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Eine Apotheke aus Wien, online für ganz Österreich
            </h1>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Die Apotheke am Stadtpark ist seit vielen Jahren fixer Bestandteil des dritten
              Wiener Gemeindebezirks. Mit unserem Online-Shop möchten wir dieselbe sorgfältige
              Beratung, die unsere Kundinnen und Kunden vor Ort schätzen, auch digital
              zugänglich machen – ehrlich, unaufgeregt und immer mit einem offenen Ohr für
              Ihre Fragen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-shop">
          <h2 className="font-display text-2xl font-semibold text-ink">Wofür wir stehen</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{value.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-paper">
        <div className="container-shop">
          <h2 className="font-display text-2xl font-semibold text-ink">Unser Team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex gap-4 rounded-2xl border border-line p-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
                  <Icon name="badge-check" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{member.name}</h3>
                  <p className="text-sm font-medium text-sage-dark">{member.role}</p>
                  <p className="mt-1.5 text-sm text-ink-soft">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sage-dark text-cream">
        <div className="container-shop grid gap-8 py-14 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Icon name="pin" className="h-5 w-5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold">Standort</h3>
              <p className="mt-1 text-sm text-cream/75">Stadtparkgasse 12, 1030 Wien</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="clock" className="h-5 w-5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold">Öffnungszeiten</h3>
              <p className="mt-1 text-sm text-cream/75">Mo–Fr 8–18 Uhr, Sa 8–12 Uhr</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="phone" className="h-5 w-5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold">Kontakt</h3>
              <p className="mt-1 text-sm text-cream/75">+43 1 234 567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
