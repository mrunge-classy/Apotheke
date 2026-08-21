import { getProduct } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import type { CartLine, ShippingMethod } from "@/lib/types";
import { Icon } from "@/components/shared/Icon";

export function CheckoutSummary({
  lines,
  subtotal,
  shippingCost,
  total,
}: {
  lines: CartLine[];
  subtotal: number;
  shippingCost: number;
  total: number;
  shippingMethod: ShippingMethod;
}) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-6">
      <h2 className="font-display text-lg font-semibold text-ink">Ihre Bestellung</h2>
      <ul className="mt-4 space-y-3">
        {lines.map((line) => {
          const product = getProduct(line.slug);
          if (!product) return null;
          return (
            <li key={line.slug} className="flex items-center justify-between gap-3 text-sm">
              <span className="text-ink-soft">
                {product.name} <span className="text-ink-soft/70">× {line.quantity}</span>
              </span>
              <span className="shrink-0 text-ink">{formatPrice(product.price * line.quantity)}</span>
            </li>
          );
        })}
      </ul>

      <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
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
      <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-soft">
        <Icon name="lock" className="h-3.5 w-3.5" />
        Ihre Daten werden ausschließlich für diese Demo-Bestellung verwendet.
      </p>
    </div>
  );
}
