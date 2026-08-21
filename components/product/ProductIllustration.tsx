import { getCategory } from "@/lib/categories";
import { getCategoryTheme } from "@/lib/category-theme";
import { Icon } from "@/components/shared/Icon";

export function ProductIllustration({
  categorySlug,
  size = "md",
  className,
}: {
  categorySlug: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const category = getCategory(categorySlug);
  const theme = getCategoryTheme(categorySlug);
  const iconSize = size === "lg" ? "w-16 h-16" : size === "sm" ? "w-7 h-7" : "w-10 h-10";
  const ringSize = size === "lg" ? "w-32 h-32" : size === "sm" ? "w-14 h-14" : "w-20 h-20";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${theme.bg} ${className ?? ""}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        aria-hidden="true"
      >
        <pattern
          id={`dots-${categorySlug}`}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" className={theme.fg} fill="currentColor" opacity="0.18" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#dots-${categorySlug})`} />
      </svg>
      <div
        className={`relative flex items-center justify-center rounded-full ring-8 ${theme.ring} ${theme.bg} ${ringSize}`}
      >
        <Icon name={category?.icon ?? "leaf"} className={`${iconSize} ${theme.fg}`} strokeWidth={1.4} />
      </div>
    </div>
  );
}
