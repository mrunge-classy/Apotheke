"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import { Icon } from "@/components/shared/Icon";
import { ProductIllustration } from "@/components/product/ProductIllustration";

export function CartItemRow({ product, quantity }: { product: Product; quantity: number }) {
  const { setQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-line py-5 last:border-b-0">
      <Link href={`/produkte/${product.slug}`} className="shrink-0">
        <ProductIllustration categorySlug={product.categorySlug} size="sm" className="h-20 w-20" />
      </Link>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/produkte/${product.slug}`}>
              <h3 className="font-display text-base font-semibold text-ink hover:text-sage-dark">
                {product.name}
              </h3>
            </Link>
            <p className="text-xs text-ink-soft">{product.packSize}</p>
          </div>
          <span className="font-display font-semibold text-ink whitespace-nowrap">
            {formatPrice(product.price * quantity)}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center rounded-full border border-line">
            <button
              type="button"
              onClick={() => setQuantity(product.slug, quantity - 1)}
              className="flex h-9 w-9 items-center justify-center text-ink hover:text-sage-dark"
              aria-label="Menge verringern"
            >
              <Icon name="minus" className="h-3.5 w-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-medium">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(product.slug, quantity + 1)}
              className="flex h-9 w-9 items-center justify-center text-ink hover:text-sage-dark"
              aria-label="Menge erhöhen"
            >
              <Icon name="plus" className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.slug)}
            className="inline-flex items-center gap-1 text-xs text-ink-soft hover:text-error"
          >
            <Icon name="close" className="h-3.5 w-3.5" />
            Entfernen
          </button>
        </div>
      </div>
    </div>
  );
}
