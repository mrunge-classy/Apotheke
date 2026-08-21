import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getRelatedProducts, products } from "@/lib/products";
import { getCategory } from "@/lib/categories";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/shared/Icon";
import { Badge } from "@/components/shared/Badge";
import { ProductIllustration } from "@/components/product/ProductIllustration";
import { AddToCartPanel } from "@/components/product/AddToCartPanel";
import { ProductCard } from "@/components/product/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);
  const related = getRelatedProducts(product);

  return (
    <div className="container-shop py-10 md:py-14">
      <nav className="flex items-center gap-1.5 text-sm text-ink-soft">
        <Link href="/produkte" className="hover:text-sage-dark">Produkte</Link>
        <Icon name="chevron-right" className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link href={`/produkte?kategorie=${category.slug}`} className="hover:text-sage-dark">
              {category.shortName}
            </Link>
            <Icon name="chevron-right" className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-14">
        <ProductIllustration categorySlug={product.categorySlug} size="lg" className="aspect-square w-full" />

        <div>
          <div className="flex items-center gap-2">
            {product.isNew && <Badge tone="terracotta">Neu</Badge>}
            <span className="text-xs font-medium tracking-wide text-ink-soft uppercase">
              {product.brand}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-ink-soft">{product.shortDescription}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-ink">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-ink-soft">{product.packSize}</span>
          </div>

          <div className="mt-6">
            <AddToCartPanel slug={product.slug} />
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-xl border border-sage-light bg-sage-lighter px-4 py-3 text-sm text-sage-dark">
            <Icon name="shield" className="h-4 w-4 shrink-0" />
            Freiverkäufliches Produkt – keine Verschreibung erforderlich.
          </div>

          <dl className="mt-8 space-y-6 border-t border-line pt-6">
            <div>
              <dt className="text-sm font-semibold text-ink">Beschreibung</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{product.description}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">Anwendung</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{product.usage}</dd>
            </div>
            {product.activeIngredient && (
              <div>
                <dt className="text-sm font-semibold text-ink">Wirkstoff</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{product.activeIngredient}</dd>
              </div>
            )}
          </dl>

          <p className="mt-6 text-xs text-ink-soft">
            Bitte lesen Sie die Packungsbeilage und fragen Sie im Zweifel Ihre Apothekerin oder
            Ihren Apotheker. Bei anhaltenden Beschwerden konsultieren Sie eine Ärztin oder einen Arzt.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold text-ink">Das könnte Sie auch interessieren</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
