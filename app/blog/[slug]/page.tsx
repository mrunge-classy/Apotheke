import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedBlogPosts } from "@/lib/blog";
import { getCategory } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import { Icon } from "@/components/shared/Icon";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogCard } from "@/components/blog/BlogCard";
import { ProductIllustration } from "@/components/product/ProductIllustration";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const category = getCategory(post.categorySlug);
  const related = getRelatedBlogPosts(post);

  return (
    <article className="container-shop py-10 md:py-14">
      <nav className="flex items-center gap-1.5 text-sm text-ink-soft">
        <Link href="/blog" className="hover:text-sage-dark">Ratgeber</Link>
        <Icon name="chevron-right" className="h-3.5 w-3.5" />
        <span className="text-ink">{post.title}</span>
      </nav>

      <div className="mx-auto mt-6 max-w-2xl">
        <span className="text-xs font-medium tracking-wide text-sage-dark uppercase">
          {category?.shortName}
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-ink-soft">
          <span>{post.author}, {post.authorRole}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Icon name="clock" className="h-3.5 w-3.5" />
            {post.readTimeMinutes} Min. Lesezeit
          </span>
        </div>
      </div>

      <ProductIllustration
        categorySlug={post.categorySlug}
        size="lg"
        className="mx-auto mt-8 aspect-[21/9] w-full max-w-3xl"
      />

      <div className="mx-auto mt-10 max-w-2xl">
        <BlogContent blocks={post.content} />
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-sage-light bg-sage-lighter px-5 py-4 text-sm text-sage-dark">
        Dieser Beitrag ersetzt keine individuelle medizinische Beratung. Bei anhaltenden oder
        starken Beschwerden wenden Sie sich bitte an Ihre Ärztin, Ihren Arzt oder direkt an uns
        in der Apotheke.
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-14 max-w-4xl border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold text-ink">Weitere Beiträge</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
