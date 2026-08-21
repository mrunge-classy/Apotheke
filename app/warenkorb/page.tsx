"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProduct } from "@/lib/products";
import { Icon } from "@/components/shared/Icon";
import { LinkButton } from "@/components/shared/Button";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { CartSummary } from "@/components/cart/CartSummary";

export default function WarenkorbPage() {
  const { lines, isHydrated } = useCart();

  const items = lines
    .map((line) => ({ line, product: getProduct(line.slug) }))
    .filter((entry): entry is { line: typeof entry.line; product: NonNullable<typeof entry.product> } =>
      Boolean(entry.product)
    );

  if (!isHydrated) {
    return <div className="container-shop py-16" />;
  }

  if (items.length === 0) {
    return (
      <div className="container-shop py-20 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
          <Icon name="cart" className="h-7 w-7" />
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold text-ink">
          Ihr Warenkorb ist leer
        </h1>
        <p className="mt-2 text-ink-soft">
          Entdecken Sie unser Sortiment an rezeptfreien Produkten.
        </p>
        <LinkButton href="/produkte" className="mt-6">
          Produkte entdecken
          <Icon name="arrow-right" className="h-4 w-4" />
        </LinkButton>
      </div>
    );
  }

  return (
    <div className="container-shop py-10 md:py-14">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Warenkorb</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-line bg-paper px-5">
          {items.map(({ line, product }) => (
            <CartItemRow key={line.slug} product={product} quantity={line.quantity} />
          ))}
        </div>

        <CartSummary />
      </div>

      <Link
        href="/produkte"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-sage-dark"
      >
        <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
        Weiter einkaufen
      </Link>
    </div>
  );
}
