export function Badge({
  children,
  tone = "sage",
}: {
  children: React.ReactNode;
  tone?: "sage" | "terracotta";
}) {
  const toneClasses =
    tone === "terracotta"
      ? "bg-terracotta-light text-terracotta-dark"
      : "bg-sage-lighter text-sage-dark";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide uppercase ${toneClasses}`}
    >
      {children}
    </span>
  );
}
