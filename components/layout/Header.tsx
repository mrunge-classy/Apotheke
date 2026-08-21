"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { href: "/produkte", label: "Produkte" },
  { href: "/blog", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/newsletter", label: "Newsletter" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="hidden border-b border-line/70 bg-sage-dark text-cream sm:block">
        <div className="container-shop flex items-center justify-between py-2 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="clock" className="h-3.5 w-3.5" />
            Pharmazeutische Beratung: Mo–Fr 8–18 Uhr, Sa 8–12 Uhr
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="pin" className="h-3.5 w-3.5" />
            Stadtparkgasse 12, 1030 Wien
          </span>
        </div>
      </div>

      <div className="container-shop flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-cream">
            <Icon name="mortar" className="h-5 w-5" />
          </span>
          <span className="font-display leading-tight">
            <span className="block text-lg font-semibold text-ink">Apotheke am Stadtpark</span>
            <span className="block text-[0.65rem] tracking-[0.2em] text-ink-soft uppercase">
              Wien
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sage-dark ${
                  active ? "text-sage-dark" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/warenkorb"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream-dark"
            aria-label="Warenkorb"
          >
            <Icon name="cart" className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[0.65rem] font-semibold text-cream">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-cream-dark md:hidden"
            aria-label="Menü"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-cream md:hidden">
          <div className="container-shop flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink hover:bg-cream-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
