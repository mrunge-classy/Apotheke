import Link from "next/link";
import { categories } from "@/lib/categories";
import { Icon } from "@/components/shared/Icon";
import { getCategoryTheme } from "@/lib/category-theme";

export function CategoryFilter({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      <Link
        href="/produkte"
        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
          !active
            ? "border-sage bg-sage text-cream"
            : "border-line bg-paper text-ink hover:border-sage/50"
        }`}
      >
        Alle Produkte
      </Link>
      {categories.map((category) => {
        const isActive = category.slug === active;
        const theme = getCategoryTheme(category.slug);
        return (
          <Link
            key={category.slug}
            href={`/produkte?kategorie=${category.slug}`}
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-sage bg-sage text-cream"
                : "border-line bg-paper text-ink hover:border-sage/50"
            }`}
          >
            <Icon
              name={category.icon}
              className={`h-4 w-4 ${isActive ? "text-cream" : theme.fg}`}
            />
            {category.shortName}
          </Link>
        );
      })}
    </div>
  );
}
