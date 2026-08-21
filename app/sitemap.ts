import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";
import { categories } from "@/lib/categories";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apotheke.zugriff.at";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/produkte",
    "/warenkorb",
    "/blog",
    "/newsletter",
    "/ueber-uns",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${siteUrl}/produkte?kategorie=${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${siteUrl}/produkte/${p.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
