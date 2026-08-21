import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/shared/Icon";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Melden Sie sich für den Newsletter der Apotheke am Stadtpark an – Gesundheitstipps und Neuigkeiten direkt ins Postfach.",
};

const benefits: { icon: IconName; text: string }[] = [
  { icon: "leaf", text: "Saisonale Gesundheitstipps von unserem Apotheker-Team" },
  { icon: "sun", text: "Hinweise zu Vitaminen und Nahrungsergänzung passend zur Jahreszeit" },
  { icon: "mail", text: "Ein bis zwei E-Mails im Monat, jederzeit abbestellbar" },
];

export default function NewsletterPage() {
  return (
    <div className="container-shop py-16 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
          <Icon name="mail" className="h-6 w-6" />
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold text-ink">
          Bleiben Sie gesund informiert
        </h1>
        <p className="mt-3 text-ink-soft">
          Abonnieren Sie unseren Newsletter für verlässliche Gesundheitstipps direkt von
          unserem Apotheker-Team – unaufdringlich und ohne Werbe-Überflutung.
        </p>

        <ul className="mt-8 flex flex-col gap-3 text-left">
          {benefits.map((benefit) => (
            <li key={benefit.text} className="flex items-start gap-3 text-sm text-ink-soft">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
                <Icon name={benefit.icon} className="h-3.5 w-3.5" />
              </span>
              {benefit.text}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
