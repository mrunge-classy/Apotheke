import { Icon } from "@/components/shared/Icon";

const STEPS = [
  { step: 1, label: "Lieferadresse" },
  { step: 2, label: "Versand" },
  { step: 3, label: "Zahlung" },
  { step: 4, label: "Übersicht" },
] as const;

export function StepIndicator({ current }: { current: number }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {STEPS.map(({ step, label }, index) => {
        const state = step < current ? "done" : step === current ? "active" : "upcoming";
        return (
          <li key={step} className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                state === "done"
                  ? "bg-sage text-cream"
                  : state === "active"
                    ? "bg-sage-dark text-cream"
                    : "bg-cream-dark text-ink-soft"
              }`}
            >
              {state === "done" ? <Icon name="check" className="h-4 w-4" /> : step}
            </span>
            <span
              className={`text-sm ${state === "upcoming" ? "text-ink-soft" : "font-medium text-ink"}`}
            >
              {label}
            </span>
            {index < STEPS.length - 1 && (
              <Icon name="chevron-right" className="ml-1 h-4 w-4 text-line" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
