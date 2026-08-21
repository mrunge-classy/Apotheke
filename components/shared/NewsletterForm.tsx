"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export function NewsletterForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const isDark = variant === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
        return;
      }
      if (data.alreadySubscribed) {
        setStatus("duplicate");
        setMessage("Diese E-Mail-Adresse ist bereits angemeldet.");
        return;
      }
      setStatus("success");
      setMessage("Danke! Bitte bestätigen Sie Ihre Anmeldung über den Link, den wir Ihnen senden würden.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Verbindung fehlgeschlagen. Bitte versuchen Sie es später erneut.");
    }
  }

  if (status === "success" || status === "duplicate") {
    return (
      <div
        className={`flex items-start gap-3 rounded-2xl border px-4 py-4 text-sm ${
          isDark
            ? "border-cream/20 bg-cream/10 text-cream"
            : "border-sage-light bg-sage-lighter text-sage-dark"
        }`}
      >
        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div
        className={`flex items-center gap-2 rounded-full border p-1.5 pl-4 ${
          isDark ? "border-cream/25 bg-cream/5" : "border-line bg-paper"
        }`}
      >
        <Icon
          name="mail"
          className={`h-4 w-4 shrink-0 ${isDark ? "text-cream/60" : "text-ink-soft"}`}
        />
        <input
          type="email"
          required
          placeholder="ihre.email@beispiel.at"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:opacity-60 ${
            isDark ? "text-cream placeholder:text-cream" : "text-ink"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors disabled:opacity-60 ${
            isDark
              ? "bg-cream text-sage-dark hover:bg-cream/90"
              : "bg-sage text-cream hover:bg-sage-dark"
          }`}
        >
          {status === "loading" ? "…" : "Anmelden"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-error">{message}</p>
      )}
      <p className={`mt-2 text-xs ${isDark ? "text-cream/60" : "text-ink-soft"}`}>
        Mit der Anmeldung stimmen Sie unserer{" "}
        <Link href="/datenschutz" className="underline underline-offset-2">
          Datenschutzerklärung
        </Link>{" "}
        zu. Abmeldung jederzeit möglich.
      </p>
    </form>
  );
}
