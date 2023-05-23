'use client'

import { drawerWidth } from "@/app/Components/consts/drawerWidth";
import { Paper } from "@mui/material";
import { ReactNode } from "react";


export const ClientMarkdown = ({children }: {children: ReactNode}) => {

  return (
    < Paper sx={{
      borderRadius: 4,
      width: {xl: `calc(100vw - ${drawerWidth})`, lg: "70vw", sm: "90%", xs: "98vw"},
      marginX: {sm: "auto", xs: 0},
      maxWidth: {sm: "95%"},
      py: {md: 8, sm: 8, xs: 1},
      px:{md: 12, sm: 3, xs: 1},
      fontSize: "ms",
    }}>
      <div  className="max-w-full flex justify-center items-center">
        {children}
      </div>
    </Paper>
  );
}
