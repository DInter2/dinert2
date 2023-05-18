'use client'

import { Paper } from "@mui/material";
import MarkdownView from "react-showdown";

export const ClientMarkdown = ({ text }: {text: string}) => {

  return (
    < Paper sx={{
      maxWidth: {xl: "66vw", lg: "70vw", xs: "90vw"},
      py: {md: 8, sm: 8, xs: 1},
      px:{md: 12, sm: 8, xs: 0},
      fontSize: "ms",
    }}>
      <div  className="max-w-full overflow-auto">
        <MarkdownView
          className="prose "
          markdown={text}
          options={{ tables: true, emoji: true }}
        />
      </div>
    </Paper>
  );
}
