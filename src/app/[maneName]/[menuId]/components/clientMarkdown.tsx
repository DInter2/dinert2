'use client'

import MarkdownView from "react-showdown";

export const ClientMarkdown = ({ text }: {text: string}) => {
  return (
    <MarkdownView
      markdown={text}
      options={{ tables: true, emoji: true }}
    />
  );
}
