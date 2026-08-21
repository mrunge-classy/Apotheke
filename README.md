# Apotheke am Stadtpark — Online-Shop (Proof of Concept)

Ein vollständiger, von Grund auf gebauter Online-Shop für eine fiktive Wiener Apotheke —
als Proof of Concept dafür, wie ein digitales Angebot für eine echte österreichische
Apotheke aussehen könnte: Startseite mit Marketing-Inhalten, ein Gesundheitsratgeber
(Blog), ein Produktkatalog mit funktionierendem Warenkorb und mehrstufigem Checkout sowie
eine Newsletter-Anmeldung.

Alles in diesem Repository ist lauffähiger, echter Code — kein Mockup, kein Design-Tool-Export.
Der Checkout schreibt echte Bestellungen, das Newsletter-Formular echte Anmeldungen; nur
die Zahlungsabwicklung selbst ist bewusst simuliert (siehe [Umfang & Grenzen](#umfang--grenzen-des-poc)).

**Live-Ziel:** `apotheke.zugriff.at`, Deployment auf eigenem Hetzner-Server (siehe
[`DEPLOYMENT.md`](./DEPLOYMENT.md)).

---

## Funktionsumfang

| Bereich | Umsetzung |
|---|---|
| **Startseite** | Hero, Trust-/Value-Props, aktuelle Produkte, Ratgeber-Teaser, Newsletter-Sektion |
| **Produkte** | 14 Produkte in 5 Kategorien, Kategorie-Filter, Detailseiten mit Wirkstoff, Anwendung, verwandten Produkten |
| **Warenkorb** | Persistiert in `localStorage`, Mengensteuerung, Live-Fortschritt bis zur Gratis-Versand-Schwelle |
| **Checkout** | 4 Schritte (Adresse → Versand → Zahlung → Übersicht), serverseitige Validierung, echte Bestellnummer |
| **Bestellbestätigung** | Eigene Seite pro Bestellung mit vollständiger Zusammenfassung |
| **Blog / Ratgeber** | 6 Artikel in glaubwürdiger Apotheker:innen-Stimme, nach Kategorie verknüpft |
| **Newsletter** | Eigene Seite + Formular in Footer/Homepage, Server-Validierung, Duplikatserkennung |
| **Rechtliches** | Impressum, Datenschutzerklärung, Cookie-Hinweis — alle klar als Demo gekennzeichnet |
| **SEO** | `sitemap.xml`, `robots.txt`, dynamisches Favicon, Metadata/OpenGraph pro Seite |

---

## Warum diese Entscheidungen

Ein Proof of Concept für eine Apotheke muss mehr können als "schön aussehen" — er muss
zeigen, dass die Person, die ihn gebaut hat, die Domäne versteht. Ein paar bewusste
Entscheidungen dahinter:

- **Nur freiverkäufliche Produkte im Sortiment.** Das Sortiment enthält ausschließlich
  rezeptfreie Produkte, mit einem expliziten Hinweis dazu auf jeder Produkt- und der
  Produktübersichtsseite. Das spiegelt die reale Rechtslage für den Online-Verkauf durch
  österreichische Apotheken (Apothekengesetz) — ein Detail, das bei einer generischen
  Shop-Vorlage fehlen würde.
- **Eigenes Illustrations- statt Stockfoto-System.** Alle Produkt- und Kategorie-„Fotos"
  sind ein selbst gebautes, konsistentes SVG-Icon- und Illustrationssystem
  (`components/shared/Icon.tsx`, `components/product/ProductIllustration.tsx`). Keine
  Lizenzfragen, keine gebrochenen externen Links, und optisch wirkt der Shop dadurch wie
  eine eigenständige Marke statt wie eine Demo mit Platzhalterbildern.
- **Echte Funktionalität statt Attrappe.** Warenkorb, Checkout und Newsletter-Formular
  funktionieren tatsächlich Ende-zu-Ende (siehe [Architektur](#architektur--technische-entscheidungen)) —
  ein Reviewer kann eine Bestellung abschließen und bekommt eine echte Bestellnummer, statt
  nur eine statische "Danke"-Seite zu sehen.
- **Österreichisches Deutsch, durchgängig.** Alle Inhalte — Produkttexte, Blogartikel,
  Fehlermeldungen, Checkout-Copy — sind auf österreichisches Deutsch abgestimmt, inklusive
  korrekter Berufsbezeichnung (*Mag. pharm.*) für die fiktiven Apotheker:innen.
- **Transparente Grenzen des POC.** Checkout und Rechtsseiten sind explizit als Demo
  gekennzeichnet, statt eine reale Geschäftstätigkeit vorzutäuschen — wichtig, sobald das
  Projekt unter einer echten Domain live geht.

---

## Screenshots

_Wird ergänzt, sobald Browser-Tools in dieser Session aktiviert sind._

---

## Architektur & technische Entscheidungen

| Bereich | Wahl | Begründung |
|---|---|---|
| Framework | **Next.js 16** (App Router), TypeScript, Tailwind CSS v4 | Ein Deploy-Artefakt (`next start`), SSR/SEO für Marketing- und Produktseiten, moderner DX |
| Inhalte | Typisierte Module in `lib/` (`products.ts`, `blog.ts`, `categories.ts`) | Kein DB-Setup für den POC nötig, aber `Product`/`BlogPost`-Typen (`lib/types.ts`) sind so geschnitten, dass ein Umstieg auf eine echte DB/ein Headless-CMS die Komponenten unverändert lässt |
| Warenkorb | React Context + `localStorage` (`lib/cart-context.tsx`) | Kein Server-Roundtrip fürs Warenkorb-Erlebnis, überlebt Seitenreloads |
| Bestellungen & Newsletter | API-Routen (`app/api/orders`, `app/api/newsletter`), serverseitig validiert, persistiert als JSON unter `data/` (`lib/server/`) | Funktioniert korrekt, weil auf einem eigenen Hetzner-Server als langlaufender Node-Prozess deployt wird (kein Serverless/Vercel) — Dateisystem-Schreibzugriffe sind damit unproblematisch |
| Preisberechnung | Serverseitig aus dem Produktkatalog neu berechnet, nie aus Client-Daten übernommen | Verhindert manipulierte Preise/Mengen aus dem Checkout-Request |
| Design-System | Eigenes SVG-Icon-Set + Farbpalette (Salbeigrün/Creme/Terrakotta) statt UI-Kit von der Stange | Konsistentes, markenfähiges Erscheinungsbild ohne externe Abhängigkeiten |

### Umfang & Grenzen des POC

Bewusst **nicht** Teil dieses Proof of Concept — und der logische nächste Schritt für einen
echten Kundenauftrag:

- **Zahlungsabwicklung**: Der Checkout ist vollständig, verarbeitet aber keine echte
  Zahlung (klar gekennzeichnet). Für den Live-Betrieb: Anbindung eines PSP mit
  österreichischer Relevanz (z. B. Mollie, Adyen, EPS-Überweisung).
- **Produktdatenverwaltung**: Aktuell statische TypeScript-Module. Für einen echten Kunden:
  Anbindung an ein Headless-CMS oder die bestehende Warenwirtschaft/Kassensystem der
  Apotheke, damit Apotheker:innen Produkte selbst pflegen können.
- **Bestell- und Kundendaten**: Aktuell dateibasiert für den POC. Für den Produktivbetrieb:
  echte Datenbank mit Backups, DSGVO-konformer Löschkonzept.
- **Rechtstexte**: Impressum/Datenschutz sind als Demo-Platzhalter markiert und müssten für
  einen echten Betrieb durch rechtlich geprüfte Texte (inkl. echter Gewerbeberechtigung,
  Apothekerkammer-Angaben, UID) ersetzt werden.
- **Barrierefreiheit & Performance**: Solide Basis (semantisches HTML, Tastaturbedienbarkeit
  der Formulare), aber kein formales A11y-Audit oder Lasttest — beides sinnvoll vor einem
  echten Launch.

---

## Projektstruktur

```
app/                     Routen (App Router)
  page.tsx                 Startseite
  produkte/                Produktübersicht + /produkte/[slug] Detailseiten
  warenkorb/                Warenkorb
  kasse/                    Mehrstufiger Checkout
  bestellung/[id]/          Bestellbestätigung
  blog/                     Ratgeber-Übersicht + /blog/[slug] Artikel
  newsletter/                Newsletter-Landingpage
  ueber-uns/, impressum/, datenschutz/
  api/newsletter/            POST-Route: Newsletter-Anmeldung
  api/orders/                POST-Route: Bestellung anlegen
  sitemap.ts, robots.ts, icon.tsx

components/
  layout/                  Header, Footer, Cookie-Hinweis
  home/                    Hero, Value Props, Produkt-/Blog-Teaser, Newsletter-Sektion
  product/                 Produktkarte, Kategorie-Filter, Illustrationssystem
  cart/, checkout/          Warenkorb- und Checkout-Flow-Komponenten
  blog/                    Blog-Karte und -Inhalt
  shared/                  Icon-System, Button, Badge, Newsletter-Formular

lib/
  products.ts, blog.ts, categories.ts, types.ts   Inhaltsdaten & Typen
  cart-context.tsx          Warenkorb-Logik (Client)
  category-theme.ts, format.ts
  server/                  Dateibasierte Persistenz für Bestellungen & Newsletter

data/                      Laufzeitdaten (gitignored, wird zur Laufzeit angelegt)
deploy/                    nginx-Beispielkonfiguration
ecosystem.config.js        PM2-Prozessdefinition für den Hetzner-Server
```

---

## Lokale Entwicklung

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Produktions-Build inkl. Typecheck
npm run start     # Produktions-Server (nach npm run build)
npm run lint
```

Verifiziert: `npm run build` (36 Routen) und `npm run lint` laufen sauber durch; Warenkorb,
Checkout, Bestellbestätigung und Newsletter-Anmeldung wurden Ende-zu-Ende getestet
(inkl. API-Validierung und Duplikatserkennung).

## Deployment

Siehe [`DEPLOYMENT.md`](./DEPLOYMENT.md) für die vollständige Anleitung (Node/PM2 auf dem
Hetzner-Server, nginx als Reverse Proxy, TLS via Let's Encrypt).

## Lizenz

MIT, siehe [`LICENSE`](./LICENSE).
