"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import { Icon } from "@/components/shared/Icon";
import { Badge } from "@/components/shared/Badge";
import { ProductIllustration } from "@/components/product/ProductIllustration";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product.slug, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-md">
      <Link href={`/produkte/${product.slug}`} className="block p-4 pb-0">
        <ProductIllustration categorySlug={product.categorySlug} className="aspect-[4/3] w-full" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          {product.isNew && <Badge tone="terracotta">Neu</Badge>}
          <span className="text-xs tracking-wide text-ink-soft uppercase">{product.brand}</span>
        </div>
        <Link href={`/produkte/${product.slug}`}>
          <h3 className="font-display text-base font-semibold text-ink group-hover:text-sage-dark">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 flex-1 text-sm text-ink-soft">{product.shortDescription}</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-display text-lg font-semibold text-ink">
              {formatPrice(product.price)}
            </span>
            <span className="ml-1 text-xs text-ink-soft">{product.packSize}</span>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-lighter text-sage-dark transition-colors hover:bg-sage hover:text-cream"
            aria-label={`${product.name} in den Warenkorb legen`}
          >
            <Icon name={added ? "check" : "cart"} className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
