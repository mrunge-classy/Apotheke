import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { BlogCard } from "@/components/blog/BlogCard";
import { getLatestBlogPosts } from "@/lib/blog";

export function BlogTeaser() {
  const posts = getLatestBlogPosts(3);

  return (
    <section className="section-y border-t border-line bg-paper">
      <div className="container-shop">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-medium tracking-wide text-sage-dark uppercase">
              Aus unserem Ratgeber
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Gesundheitstipps von unserem Team
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-sage-dark"
          >
            Alle Beiträge
            <Icon name="chevron-right" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
