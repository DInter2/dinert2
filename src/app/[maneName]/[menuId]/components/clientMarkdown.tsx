'use client'

import { drawerWidth } from "@/app/Components/consts/drawerWidth";
import { Paper } from "@mui/material";
import { ReactNode } from "react";


export const ClientMarkdown = ({children }: {children: ReactNode}) => {

  return (
    < Paper sx={{
      borderRadius: 4,
      width: {xl: `calc(100vw - ${drawerWidth})`, lg: "70vw", md: "90vw", sm: "95vw", xs: "98vw"},
      marginX: { xs: 0},
      maxWidth: {sm: "95%"},
      py: {md: 8, sm: 8, xs: 2},
      px:{md: 3, sm: 3, xs: 1},
      fontSize: "ms",
      mb: 4,
      mt: 2
    }}
    className="max-w-full flex justify-center items-center"
    >
        {children}
    </Paper>
  );
}
