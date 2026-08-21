export type CategoryTheme = {
  bg: string;
  fg: string;
  ring: string;
};

export const categoryTheme: Record<string, CategoryTheme> = {
  kopfschmerzen: { bg: "bg-sage-lighter", fg: "text-sage-dark", ring: "ring-sage-light" },
  erkaeltung: { bg: "bg-cream-dark", fg: "text-ink-soft", ring: "ring-line" },
  vitamine: { bg: "bg-terracotta-light", fg: "text-terracotta-dark", ring: "ring-terracotta-light" },
  "baby-kind": { bg: "bg-sage-light", fg: "text-sage-dark", ring: "ring-sage-light" },
  hautpflege: { bg: "bg-cream-dark", fg: "text-sage-dark", ring: "ring-line" },
};

export function getCategoryTheme(slug: string): CategoryTheme {
  return categoryTheme[slug] ?? { bg: "bg-sage-lighter", fg: "text-sage-dark", ring: "ring-sage-light" };
}
