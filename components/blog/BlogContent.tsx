import type { ContentBlock } from "@/lib/types";

export function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="font-display mt-2 text-xl font-semibold text-ink">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="leading-relaxed text-ink-soft">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={index} className="list-disc space-y-2 pl-5 text-ink-soft">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="rounded-xl border-l-4 border-sage bg-sage-lighter px-5 py-4 text-sage-dark"
              >
                <p className="leading-relaxed italic">&ldquo;{block.text}&rdquo;</p>
                {block.attribution && (
                  <cite className="mt-2 block text-sm font-medium not-italic">— {block.attribution}</cite>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
