"use client";

import type { Address } from "@/lib/types";
import { Icon } from "@/components/shared/Icon";

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/70 focus:border-sage";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function AddressForm({
  value,
  onChange,
  onSubmit,
}: {
  value: Address;
  onChange: (next: Address) => void;
  onSubmit: () => void;
}) {
  function set<K extends keyof Address>(key: K, val: Address[K]) {
    onChange({ ...value, [key]: val });
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <label className={labelClass} htmlFor="fullName">Vor- und Nachname</label>
        <input
          id="fullName"
          required
          className={inputClass}
          value={value.fullName}
          onChange={(e) => set("fullName", e.target.value)}
          placeholder="Maria Musterfrau"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">E-Mail-Adresse</label>
        <input
          id="email"
          type="email"
          required
          className={inputClass}
          value={value.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="maria@beispiel.at"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="street">Straße und Hausnummer</label>
        <input
          id="street"
          required
          className={inputClass}
          value={value.street}
          onChange={(e) => set("street", e.target.value)}
          placeholder="Stadtparkgasse 12/4"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="postalCode">PLZ</label>
          <input
            id="postalCode"
            required
            className={inputClass}
            value={value.postalCode}
            onChange={(e) => set("postalCode", e.target.value)}
            placeholder="1030"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">Ort</label>
          <input
            id="city"
            required
            className={inputClass}
            value={value.city}
            onChange={(e) => set("city", e.target.value)}
            placeholder="Wien"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="country">Land</label>
        <select
          id="country"
          className={inputClass}
          value={value.country}
          onChange={(e) => set("country", e.target.value)}
        >
          <option value="Österreich">Österreich</option>
        </select>
        <p className="mt-1.5 text-xs text-ink-soft">Wir liefern derzeit nur innerhalb Österreichs.</p>
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">Telefon (optional)</label>
        <input
          id="phone"
          className={inputClass}
          value={value.phone ?? ""}
          onChange={(e) => set("phone", e.target.value)}
          placeholder="+43 664 1234567"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream hover:bg-sage-dark"
      >
        Weiter zum Versand
        <Icon name="arrow-right" className="h-4 w-4" />
      </button>
    </form>
  );
}
