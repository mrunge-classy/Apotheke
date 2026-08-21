"use client";

import type { ShippingMethod } from "@/lib/types";
import { Icon, type IconName } from "@/components/shared/Icon";
import { formatPrice } from "@/lib/format";

const OPTIONS: {
  value: ShippingMethod;
  icon: IconName;
  title: string;
  detail: string;
  price: number | "free-over-threshold";
}[] = [
  {
    value: "standard",
    icon: "truck",
    title: "Standardversand",
    detail: "Lieferung in 1–2 Werktagen",
    price: "free-over-threshold",
  },
  {
    value: "express",
    icon: "arrow-right",
    title: "Expressversand",
    detail: "Lieferung am nächsten Werktag",
    price: 6.9,
  },
  {
    value: "pickup",
    icon: "pin",
    title: "Abholung in der Apotheke",
    detail: "Stadtparkgasse 12, 1030 Wien",
    price: 0,
  },
];

export function ShippingOptions({
  value,
  onChange,
  onSubmit,
  onBack,
  freeShippingEligible,
}: {
  value: ShippingMethod;
  onChange: (method: ShippingMethod) => void;
  onSubmit: () => void;
  onBack: () => void;
  freeShippingEligible: boolean;
}) {
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {OPTIONS.map((option) => {
        const isFree =
          option.price === 0 || (option.price === "free-over-threshold" && freeShippingEligible);
        const priceLabel = isFree
          ? "Gratis"
          : formatPrice(option.price === "free-over-threshold" ? 3.9 : option.price);

        return (
          <label
            key={option.value}
            className={`flex cursor-pointer items-center gap-4 rounded-xl border px-4 py-3.5 transition-colors ${
              value === option.value
                ? "border-sage bg-sage-lighter"
                : "border-line bg-paper hover:border-sage/50"
            }`}
          >
            <input
              type="radio"
              name="shipping"
              className="sr-only"
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-sage-dark">
              <Icon name={option.icon} className="h-4.5 w-4.5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-medium text-ink">{option.title}</span>
              <span className="block text-xs text-ink-soft">{option.detail}</span>
            </span>
            <span className="text-sm font-semibold text-ink">{priceLabel}</span>
          </label>
        );
      })}

      <div className="mt-2 flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:bg-cream-dark"
        >
          Zurück
        </button>
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream hover:bg-sage-dark"
        >
          Weiter zur Zahlung
          <Icon name="arrow-right" className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
