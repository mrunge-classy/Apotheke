import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { CartProvider } from "@/lib/cart-context";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apotheke.zugriff.at";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apotheke am Stadtpark – Ihre Online-Apotheke in Wien",
    template: "%s | Apotheke am Stadtpark",
  },
  description:
    "Rezeptfreie Medikamente, Vitamine und Pflegeprodukte bequem online bestellen – persönlich beraten von Ihrer Apotheke in Wien.",
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Apotheke am Stadtpark",
    title: "Apotheke am Stadtpark – Ihre Online-Apotheke in Wien",
    description:
      "Rezeptfreie Medikamente, Vitamine und Pflegeprodukte bequem online bestellen – persönlich beraten von Ihrer Apotheke in Wien.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de-AT" className={`${fraunces.variable} ${publicSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream text-ink antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  );
}
