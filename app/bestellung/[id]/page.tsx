import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrder } from "@/lib/server/orders";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/shared/Icon";
import { LinkButton } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Bestellbestätigung",
};

const SHIPPING_LABELS: Record<string, string> = {
  standard: "Standardversand (1–2 Werktage)",
  express: "Expressversand (nächster Werktag)",
  pickup: "Abholung in der Apotheke",
};

const PAYMENT_LABELS: Record<string, string> = {
  card: "Kreditkarte",
  sepa: "SEPA-Lastschrift",
  invoice: "Kauf auf Rechnung",
};

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await getOrder(id);
  if (!order) notFound();

  return (
    <div className="container-shop py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Vielen Dank für Ihre Bestellung!
        </h1>
        <p className="mt-2 text-ink-soft">
          Bestellnummer <span className="font-medium text-ink">{order.id}</span> – eine
          Bestätigung würden wir an <span className="font-medium text-ink">{order.address.email}</span> senden.
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-terracotta-light px-3 py-1.5 text-xs font-medium text-terracotta-dark">
          <Icon name="shield" className="h-3.5 w-3.5" />
          Demo-Bestellung – es wurde keine echte Zahlung verarbeitet
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-line bg-paper p-6 text-left">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-ink">Lieferadresse</h2>
            <p className="mt-1.5 text-sm text-ink-soft">
              {order.address.fullName}
              <br />
              {order.address.street}
              <br />
              {order.address.postalCode} {order.address.city}, {order.address.country}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Versand &amp; Zahlung</h2>
            <p className="mt-1.5 text-sm text-ink-soft">
              {SHIPPING_LABELS[order.shippingMethod]}
              <br />
              {PAYMENT_LABELS[order.paymentMethod]}
            </p>
          </div>
        </div>

        <h2 className="mt-6 border-t border-line pt-6 text-sm font-semibold text-ink">Artikel</h2>
        <ul className="mt-2 divide-y divide-line">
          {order.items.map((item) => (
            <li key={item.slug} className="flex justify-between py-2 text-sm">
              <span className="text-ink-soft">
                {item.name} <span className="text-ink-soft/70">× {item.quantity}</span>
              </span>
              <span className="text-ink">{formatPrice(item.unitPrice * item.quantity)}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-3 space-y-1.5 border-t border-line pt-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink-soft">Zwischensumme</dt>
            <dd className="text-ink">{formatPrice(order.subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink-soft">Versand</dt>
            <dd className="text-ink">
              {order.shippingCost === 0 ? "Gratis" : formatPrice(order.shippingCost)}
            </dd>
          </div>
          <div className="flex justify-between border-t border-line pt-2 font-display text-base font-semibold text-ink">
            <dt>Gesamtsumme</dt>
            <dd>{formatPrice(order.total)}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <LinkButton href="/produkte" variant="secondary">
          Weiter einkaufen
        </LinkButton>
        <Link href="/" className="inline-flex items-center text-sm font-medium text-ink hover:text-sage-dark">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
