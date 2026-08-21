"use client";

import { LinkButton } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { useCart, FREE_SHIPPING_THRESHOLD } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

export function CartSummary() {
  const { subtotal, shippingCost, total, amountToFreeShipping } = useCart();
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="rounded-2xl border border-line bg-paper p-6">
      <h2 className="font-display text-lg font-semibold text-ink">Zusammenfassung</h2>

      <div className="mt-4">
        {amountToFreeShipping > 0 ? (
          <p className="text-sm text-ink-soft">
            Noch <span className="font-semibold text-sage-dark">{formatPrice(amountToFreeShipping)}</span> bis
            zum gratis Versand.
          </p>
        ) : (
          <p className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-dark">
            <Icon name="check" className="h-4 w-4" />
            Sie erhalten gratis Versand!
          </p>
        )}
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-cream-dark">
          <div
            className="h-full rounded-full bg-sage transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <dl className="mt-5 space-y-2.5 border-t border-line pt-5 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-soft">Zwischensumme</dt>
          <dd className="text-ink">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-soft">Versand</dt>
          <dd className="text-ink">{shippingCost === 0 ? "Gratis" : formatPrice(shippingCost)}</dd>
        </div>
      </dl>
      <div className="mt-3 flex justify-between border-t border-line pt-3">
        <span className="font-display font-semibold text-ink">Gesamtsumme</span>
        <span className="font-display text-lg font-semibold text-ink">{formatPrice(total)}</span>
      </div>

      <LinkButton href="/kasse" className="mt-6 w-full">
        Zur Kasse
        <Icon name="arrow-right" className="h-4 w-4" />
      </LinkButton>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-soft">
        <Icon name="lock" className="h-3.5 w-3.5" />
        Sicherer, transparenter Bestellablauf
      </p>
    </div>
  );
}
