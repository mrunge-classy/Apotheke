"use client";

import type { Address, CartLine, PaymentMethod, ShippingMethod } from "@/lib/types";
import { getProduct } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/shared/Icon";

const SHIPPING_LABELS: Record<ShippingMethod, string> = {
  standard: "Standardversand (1–2 Werktage)",
  express: "Expressversand (nächster Werktag)",
  pickup: "Abholung in der Apotheke",
};

const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  card: "Kreditkarte",
  sepa: "SEPA-Lastschrift",
  invoice: "Kauf auf Rechnung",
};

export function OrderReview({
  lines,
  address,
  shippingMethod,
  paymentMethod,
  subtotal,
  shippingCost,
  total,
  onEditStep,
  onConfirm,
  onBack,
  submitting,
  error,
}: {
  lines: CartLine[];
  address: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  subtotal: number;
  shippingCost: number;
  total: number;
  onEditStep: (step: 1 | 2 | 3) => void;
  onConfirm: () => void;
  onBack: () => void;
  submitting: boolean;
  error: string | null;
}) {
  return (
    <div className="flex flex-col gap-5">
      <section className="rounded-xl border border-line p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Lieferadresse</h3>
          <button type="button" onClick={() => onEditStep(1)} className="text-xs font-medium text-sage-dark underline underline-offset-2">
            Bearbeiten
          </button>
        </div>
        <p className="mt-1.5 text-sm text-ink-soft">
          {address.fullName}
          <br />
          {address.street}
          <br />
          {address.postalCode} {address.city}, {address.country}
          <br />
          {address.email}
        </p>
      </section>

      <section className="rounded-xl border border-line p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Versand</h3>
          <button type="button" onClick={() => onEditStep(2)} className="text-xs font-medium text-sage-dark underline underline-offset-2">
            Bearbeiten
          </button>
        </div>
        <p className="mt-1.5 text-sm text-ink-soft">{SHIPPING_LABELS[shippingMethod]}</p>
      </section>

      <section className="rounded-xl border border-line p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Zahlung</h3>
          <button type="button" onClick={() => onEditStep(3)} className="text-xs font-medium text-sage-dark underline underline-offset-2">
            Bearbeiten
          </button>
        </div>
        <p className="mt-1.5 text-sm text-ink-soft">{PAYMENT_LABELS[paymentMethod]}</p>
      </section>

      <section className="rounded-xl border border-line p-4">
        <h3 className="text-sm font-semibold text-ink">Artikel</h3>
        <ul className="mt-2 divide-y divide-line">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <li key={line.slug} className="flex justify-between py-2 text-sm">
                <span className="text-ink-soft">
                  {product.name} <span className="text-ink-soft/70">× {line.quantity}</span>
                </span>
                <span className="text-ink">{formatPrice(product.price * line.quantity)}</span>
              </li>
            );
          })}
        </ul>
        <dl className="mt-3 space-y-1.5 border-t border-line pt-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink-soft">Zwischensumme</dt>
            <dd className="text-ink">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink-soft">Versand</dt>
            <dd className="text-ink">{shippingCost === 0 ? "Gratis" : formatPrice(shippingCost)}</dd>
          </div>
          <div className="flex justify-between border-t border-line pt-2 font-display text-base font-semibold text-ink">
            <dt>Gesamtsumme</dt>
            <dd>{formatPrice(total)}</dd>
          </div>
        </dl>
      </section>

      {error && (
        <div className="rounded-xl bg-error/10 px-4 py-3 text-sm text-error">{error}</div>
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:bg-cream-dark"
        >
          Zurück
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={submitting}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream hover:bg-sage-dark disabled:opacity-60"
        >
          <Icon name="lock" className="h-4 w-4" />
          {submitting ? "Wird verarbeitet…" : "Zahlungspflichtig bestellen"}
        </button>
      </div>
      <p className="text-xs text-ink-soft">
        Demo-Bestellung – es wird keine echte Zahlung durchgeführt.
      </p>
    </div>
  );
}
