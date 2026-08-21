import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { getCategory } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import { Icon } from "@/components/shared/Icon";
import { ProductIllustration } from "@/components/product/ProductIllustration";

export function BlogCard({ post }: { post: BlogPost }) {
  const category = getCategory(post.categorySlug);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-md"
    >
      <div className="p-4 pb-0">
        <ProductIllustration categorySlug={post.categorySlug} className="aspect-[16/9] w-full" size="sm" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium tracking-wide text-sage-dark uppercase">
          {category?.shortName}
        </span>
        <h3 className="font-display text-lg font-semibold text-ink group-hover:text-sage-dark">
          {post.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
        <div className="mt-2 flex items-center gap-3 text-xs text-ink-soft">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Icon name="clock" className="h-3.5 w-3.5" />
            {post.readTimeMinutes} Min. Lesezeit
          </span>
        </div>
      </div>
    </Link>
  );
}
