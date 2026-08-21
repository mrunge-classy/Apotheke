import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "kopfschmerzen",
    name: "Kopfschmerzen & Schmerz",
    shortName: "Kopfschmerzen",
    description:
      "Rezeptfreie Schmerzmittel und pflanzliche Alternativen bei Kopfschmerzen und leichten Schmerzen.",
    icon: "head",
  },
  {
    slug: "erkaeltung",
    name: "Erkältung & Immunsystem",
    shortName: "Erkältung",
    description:
      "Halsschmerzen, Schnupfen und Husten lindern – und Ihr Immunsystem für die kalte Jahreszeit stärken.",
    icon: "snowflake",
  },
  {
    slug: "vitamine",
    name: "Vitamine & Nahrungsergänzung",
    shortName: "Vitamine",
    description:
      "Vitamine, Mineralstoffe und Nahrungsergänzungsmittel für den täglichen Bedarf.",
    icon: "sun",
  },
  {
    slug: "baby-kind",
    name: "Baby & Kind",
    shortName: "Baby & Kind",
    description:
      "Sanfte Pflege- und Gesundheitsprodukte, speziell abgestimmt auf Babys und Kinder.",
    icon: "baby",
  },
  {
    slug: "hautpflege",
    name: "Haut & Pflege",
    shortName: "Hautpflege",
    description:
      "Pflegeprodukte für Gesicht, Hände und Körper – von der Apotheke empfohlen.",
    icon: "droplet",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
