import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <article className="propostas-prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
