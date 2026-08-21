import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-sage text-cream hover:bg-sage-dark",
  secondary: "bg-transparent text-sage-dark border border-sage/40 hover:border-sage hover:bg-sage-lighter",
  ghost: "bg-transparent text-ink hover:bg-cream-dark",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  rel,
}: CommonProps & { href: string; target?: string; rel?: string }) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
