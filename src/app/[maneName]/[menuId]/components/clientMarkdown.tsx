'use client'

import { drawerWidth } from "@/app/Components/consts/drawerWidth";
import { Paper } from "@mui/material";
import MarkdownView from "react-showdown";

export const ClientMarkdown = ({ text }: {text: string}) => {

  return (
    < Paper sx={{
      width: {xl: `calc(100vw - ${drawerWidth})`, lg: "70vw", xs: "90vw"},
      py: {md: 8, sm: 8, xs: 1},
      px:{md: 12, sm: 8, xs: 1},
      ml: {xs: "-3"},
      fontSize: "ms",
    }}>
      <div  className="max-w-full flex justify-center items-center">
        <MarkdownView
          className="xl:prose-2xl xs:prose-xl max-w-full"
          markdown={text}
          options={{ tables: true, emoji: true }}
        />
      </div>
    </Paper>
  );
}
