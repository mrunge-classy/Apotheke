"use client";

import type { PaymentMethod } from "@/lib/types";
import { Icon, type IconName } from "@/components/shared/Icon";

const OPTIONS: { value: PaymentMethod; icon: IconName; title: string; detail: string }[] = [
  { value: "card", icon: "lock", title: "Kreditkarte", detail: "Visa, Mastercard" },
  { value: "sepa", icon: "cross", title: "SEPA-Lastschrift", detail: "Bequem per Bankeinzug" },
  { value: "invoice", icon: "mail", title: "Kauf auf Rechnung", detail: "Zahlbar innerhalb von 14 Tagen" },
];

export function PaymentOptions({
  value,
  onChange,
  onSubmit,
  onBack,
}: {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="mb-1 flex items-start gap-2 rounded-xl bg-terracotta-light px-4 py-3 text-xs text-terracotta-dark">
        <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0" />
        Dies ist eine Proof-of-Concept-Bestellung. Es wird keine echte Zahlung verarbeitet
        und keine Zahlungsdaten werden gespeichert.
      </div>

      {OPTIONS.map((option) => (
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
            name="payment"
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
        </label>
      ))}

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
          Zur Übersicht
          <Icon name="arrow-right" className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
