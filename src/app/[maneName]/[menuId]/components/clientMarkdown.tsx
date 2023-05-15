'use client'

import { Paper } from "@mui/material";
import MarkdownView from "react-showdown";

export const ClientMarkdown = ({ text }: {text: string}) => {
  return (
    < Paper sx={{
      maxWidth: {xl: "75vw", lg: "70vw", xs: "85vw"},
      p: 8,
      px:20,
      fontSize: "ms"
    }}>
      <div  className="prose max-w-full">
        <MarkdownView
          markdown={text}
          options={{ tables: true, emoji: true }}
        />
      </div>
    </Paper>
  );
}
