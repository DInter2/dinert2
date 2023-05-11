'use client'

import MarkdownView from "react-showdown";

export const ClientMarkdown = ({ text }: {text: string}) => {
  return (
    <div className="prose prose-2xl:">
      <MarkdownView
        markdown={text}
        options={{ tables: true, emoji: true }}
      />
    </div>
  );
}
