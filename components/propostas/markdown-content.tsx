import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ProseVariant = "default" | "programa";

export function MarkdownContent({
  content,
  variant = "default",
}: {
  content: string;
  variant?: ProseVariant;
}) {
  const className =
    variant === "programa"
      ? "propostas-prose mw-programa-prose max-w-none"
      : "propostas-prose max-w-none";

  return (
    <article className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
