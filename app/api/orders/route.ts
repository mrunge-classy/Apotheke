import { NextResponse } from "next/server";
import { createOrder } from "@/lib/server/orders";
import { getProduct } from "@/lib/products";
import type { Address, OrderItem, PaymentMethod, ShippingMethod } from "@/lib/types";

const SHIPPING_METHODS: ShippingMethod[] = ["standard", "express", "pickup"];
const PAYMENT_METHODS: PaymentMethod[] = ["card", "sepa", "invoice"];
const FREE_SHIPPING_THRESHOLD = 40;
const SHIPPING_COSTS: Record<ShippingMethod, number> = {
  standard: 3.9,
  express: 6.9,
  pickup: 0,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidAddress(value: unknown): value is Address {
  if (!value || typeof value !== "object") return false;
  const a = value as Record<string, unknown>;
  return (
    typeof a.fullName === "string" &&
    a.fullName.trim().length > 1 &&
    typeof a.street === "string" &&
    a.street.trim().length > 1 &&
    typeof a.postalCode === "string" &&
    a.postalCode.trim().length >= 3 &&
    typeof a.city === "string" &&
    a.city.trim().length > 1 &&
    typeof a.country === "string" &&
    typeof a.email === "string" &&
    EMAIL_RE.test(a.email)
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { lines, address, shippingMethod, paymentMethod } = (body ?? {}) as {
    lines?: unknown;
    address?: unknown;
    shippingMethod?: unknown;
    paymentMethod?: unknown;
  };

  if (!Array.isArray(lines) || lines.length === 0) {
    return NextResponse.json({ error: "Ihr Warenkorb ist leer." }, { status: 400 });
  }
  if (!isValidAddress(address)) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder der Lieferadresse aus." },
      { status: 400 }
    );
  }
  if (!SHIPPING_METHODS.includes(shippingMethod as ShippingMethod)) {
    return NextResponse.json({ error: "Ungültige Versandart." }, { status: 400 });
  }
  if (!PAYMENT_METHODS.includes(paymentMethod as PaymentMethod)) {
    return NextResponse.json({ error: "Ungültige Zahlungsart." }, { status: 400 });
  }

  const items: OrderItem[] = [];
  for (const raw of lines) {
    const line = raw as { slug?: unknown; quantity?: unknown };
    if (typeof line.slug !== "string" || typeof line.quantity !== "number") continue;
    const product = getProduct(line.slug);
    if (!product) continue;
    const quantity = Math.max(1, Math.min(99, Math.floor(line.quantity)));
    items.push({
      slug: product.slug,
      name: product.name,
      quantity,
      unitPrice: product.price,
    });
  }

  if (items.length === 0) {
    return NextResponse.json({ error: "Keine gültigen Artikel im Warenkorb." }, { status: 400 });
  }

  const round2 = (value: number) => Math.round(value * 100) / 100;

  const subtotal = round2(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0));
  const method = shippingMethod as ShippingMethod;
  const shippingCost =
    method === "pickup" || (method === "standard" && subtotal >= FREE_SHIPPING_THRESHOLD)
      ? 0
      : SHIPPING_COSTS[method];
  const total = round2(subtotal + shippingCost);

  const order = await createOrder({
    items,
    subtotal,
    shippingCost,
    total,
    address: address as Address,
    shippingMethod: method,
    paymentMethod: paymentMethod as PaymentMethod,
  });

  return NextResponse.json({ order }, { status: 201 });
}
