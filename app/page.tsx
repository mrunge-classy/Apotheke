import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Ihre Online-Apotheke in Wien",
  description:
    "Rezeptfreie Medikamente, Vitamine und Pflegeprodukte bequem online bestellen – persönlich beraten von Ihrer Apotheke am Stadtpark in Wien.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedProducts />
      <BlogTeaser />
      <NewsletterSection />
    </>
  );
}
