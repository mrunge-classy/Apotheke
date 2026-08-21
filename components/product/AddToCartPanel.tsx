"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Icon } from "@/components/shared/Icon";

export function AddToCartPanel({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(slug, quantity);
    setAdded(true);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-line">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-11 w-11 items-center justify-center text-ink hover:text-sage-dark"
            aria-label="Menge verringern"
          >
            <Icon name="minus" className="h-4 w-4" />
          </button>
          <span className="w-8 text-center text-sm font-medium">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(20, q + 1))}
            className="flex h-11 w-11 items-center justify-center text-ink hover:text-sage-dark"
            aria-label="Menge erhöhen"
          >
            <Icon name="plus" className="h-4 w-4" />
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-sage-dark"
        >
          <Icon name="cart" className="h-4 w-4" />
          In den Warenkorb
        </button>
      </div>
      {added && (
        <div className="flex items-center justify-between gap-3 rounded-xl bg-sage-lighter px-4 py-3 text-sm text-sage-dark">
          <span className="inline-flex items-center gap-2">
            <Icon name="check" className="h-4 w-4" />
            Zum Warenkorb hinzugefügt
          </span>
          <Link href="/warenkorb" className="font-medium underline underline-offset-2">
            Warenkorb ansehen
          </Link>
        </div>
      )}
    </div>
  );
}
