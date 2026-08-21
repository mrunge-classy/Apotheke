"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/shared/Icon";

const STORAGE_KEY = "apotheke-stadtpark-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function respond(choice: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore storage failures
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper shadow-[0_-4px_20px_rgba(35,42,31,0.08)]">
      <div className="container-shop flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2.5 text-sm text-ink-soft">
          <Icon name="shield" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sage-dark" />
          Wir verwenden nur technisch notwendige Cookies für den Warenkorb sowie optionale
          Cookies zur Verbesserung unseres Angebots. Details finden Sie in unserer{" "}
          <Link href="/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-cream-dark"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="rounded-full bg-sage px-4 py-2 text-sm font-medium text-cream hover:bg-sage-dark"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
