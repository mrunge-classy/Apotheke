"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart, FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING_COST } from "@/lib/cart-context";
import type { Address, PaymentMethod, ShippingMethod } from "@/lib/types";
import { StepIndicator } from "@/components/checkout/StepIndicator";
import { AddressForm } from "@/components/checkout/AddressForm";
import { ShippingOptions } from "@/components/checkout/ShippingOptions";
import { PaymentOptions } from "@/components/checkout/PaymentOptions";
import { OrderReview } from "@/components/checkout/OrderReview";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { LinkButton } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";

const EXPRESS_SHIPPING_COST = 6.9;

const emptyAddress: Address = {
  fullName: "",
  street: "",
  postalCode: "",
  city: "",
  country: "Österreich",
  email: "",
  phone: "",
};

export default function KassePage() {
  const router = useRouter();
  const { lines, subtotal, clear, isHydrated } = useCart();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [address, setAddress] = useState<Address>(emptyAddress);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const freeShippingEligible = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost =
    shippingMethod === "pickup"
      ? 0
      : shippingMethod === "standard" && freeShippingEligible
        ? 0
        : shippingMethod === "standard"
          ? STANDARD_SHIPPING_COST
          : EXPRESS_SHIPPING_COST;
  const total = subtotal + shippingCost;

  async function handleConfirm() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines, address, shippingMethod, paymentMethod }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Die Bestellung konnte nicht abgeschlossen werden.");
        setSubmitting(false);
        return;
      }
      clear();
      router.push(`/bestellung/${data.order.id}`);
    } catch {
      setError("Verbindung fehlgeschlagen. Bitte versuchen Sie es erneut.");
      setSubmitting(false);
    }
  }

  if (!isHydrated) {
    return <div className="container-shop py-16" />;
  }

  if (lines.length === 0) {
    return (
      <div className="container-shop py-20 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-lighter text-sage-dark">
          <Icon name="cart" className="h-7 w-7" />
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold text-ink">
          Ihr Warenkorb ist leer
        </h1>
        <p className="mt-2 text-ink-soft">Fügen Sie zuerst Produkte hinzu, um zur Kasse zu gehen.</p>
        <LinkButton href="/produkte" className="mt-6">
          Produkte entdecken
          <Icon name="arrow-right" className="h-4 w-4" />
        </LinkButton>
      </div>
    );
  }

  return (
    <div className="container-shop py-10 md:py-14">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Kasse</h1>
      <div className="mt-6">
        <StepIndicator current={step} />
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-line bg-paper p-6">
          {step === 1 && (
            <AddressForm value={address} onChange={setAddress} onSubmit={() => setStep(2)} />
          )}
          {step === 2 && (
            <ShippingOptions
              value={shippingMethod}
              onChange={setShippingMethod}
              onSubmit={() => setStep(3)}
              onBack={() => setStep(1)}
              freeShippingEligible={freeShippingEligible}
            />
          )}
          {step === 3 && (
            <PaymentOptions
              value={paymentMethod}
              onChange={setPaymentMethod}
              onSubmit={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          )}
          {step === 4 && (
            <OrderReview
              lines={lines}
              address={address}
              shippingMethod={shippingMethod}
              paymentMethod={paymentMethod}
              subtotal={subtotal}
              shippingCost={shippingCost}
              total={total}
              onEditStep={(target) => setStep(target)}
              onConfirm={handleConfirm}
              onBack={() => setStep(3)}
              submitting={submitting}
              error={error}
            />
          )}
        </div>

        <CheckoutSummary
          lines={lines}
          subtotal={subtotal}
          shippingCost={shippingCost}
          total={total}
          shippingMethod={shippingMethod}
        />
      </div>
    </div>
  );
}
