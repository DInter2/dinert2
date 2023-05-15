'use client'

import { Paper } from "@mui/material";
import MarkdownView from "react-showdown";

export const ClientMarkdown = ({ text }: {text: string}) => {
  return (
    < Paper sx={{
      maxWidth: {xl: "75vw", lg: "70vw", xs: "90vw"},
      p: {md: 8, sm: 8, xs: 4},
      px:{md: 20, sm: 8, xs: 4},
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
