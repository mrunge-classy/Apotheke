import type { Metadata } from "next";
import { getCategory } from "@/lib/categories";
import { products, getProductsByCategory } from "@/lib/products";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { ProductCard } from "@/components/product/ProductCard";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Rezeptfreie Medikamente, Vitamine, Erkältungsmittel und Pflegeprodukte aus der Apotheke am Stadtpark.",
};

export default async function ProduktePage({
  searchParams,
}: {
  searchParams: Promise<{ kategorie?: string }>;
}) {
  const { kategorie } = await searchParams;
  const category = kategorie ? getCategory(kategorie) : undefined;
  const list = category ? getProductsByCategory(category.slug) : products;

  return (
    <div className="container-shop py-12 md:py-16">
      <div className="max-w-2xl">
        <span className="text-xs font-medium tracking-wide text-sage-dark uppercase">
          Sortiment
        </span>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
          {category ? category.name : "Alle Produkte"}
        </h1>
        <p className="mt-3 text-ink-soft">
          {category
            ? category.description
            : "Freiverkäufliche Medikamente, Vitamine und Pflegeprodukte – ausgewählt und geprüft von unserem Apotheker-Team."}
        </p>
      </div>

      <div className="mt-8">
        <CategoryFilter active={category?.slug} />
      </div>

      {list.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-ink-soft">
          In dieser Kategorie sind aktuell keine Produkte verfügbar.
        </p>
      )}

      <p className="mt-12 max-w-2xl border-t border-line pt-6 text-sm text-ink-soft">
        Hinweis: Wir bieten ausschließlich freiverkäufliche, rezeptfreie Produkte online an.
        Rezeptpflichtige Arzneimittel erhalten Sie weiterhin persönlich in unserer Apotheke.
      </p>
    </div>
  );
}
