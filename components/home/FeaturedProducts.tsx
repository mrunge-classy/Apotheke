import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { ProductCard } from "@/components/product/ProductCard";
import { getLatestProducts } from "@/lib/products";

export function FeaturedProducts() {
  const products = getLatestProducts(4);

  return (
    <section className="section-y bg-cream">
      <div className="container-shop">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-medium tracking-wide text-sage-dark uppercase">
              Neu im Sortiment
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Aktuelle Produkte
            </h2>
          </div>
          <Link
            href="/produkte"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-sage-dark"
          >
            Alle Produkte ansehen
            <Icon name="chevron-right" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
