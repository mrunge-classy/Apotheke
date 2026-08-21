import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Ratgeber",
  description:
    "Gesundheitstipps von unserem Apotheker-Team: Kopfschmerzen, Erkältung, Vitamine, Babypflege und Hautpflege.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <div className="container-shop py-12 md:py-16">
      <div className="max-w-2xl">
        <span className="text-xs font-medium tracking-wide text-sage-dark uppercase">Ratgeber</span>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
          Gesundheitstipps von unserem Team
        </h1>
        <p className="mt-3 text-ink-soft">
          Fundierte, verständliche Beiträge unserer Apothekerinnen und Apotheker – zu den
          Themen, die uns in der Beratung am häufigsten begegnen.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
