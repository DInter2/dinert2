'use client'
import { drawerWidth } from "@/app/Components/consts/drawerWidth";
import { Paper } from "@mui/material";
import { ReactNode } from "react";


export const ClientMarkdown = ({children }: {children: ReactNode}) => {

  return (
    < Paper sx={{
      borderRadius: 4,
      maxWidth: {xl: `calc(100vw - ${drawerWidth})`, lg: "70vw", md: "90vw", sm: "95vw", xs: "100%"},
      marginX: "auto",
      boxSizing: "border-box",
      py: { xs: 2},
      px:{ xs: 1},
      fontSize: "ms",
      mb: 4,
      mt: 2,
    }}
    className="flex justify-center items-center"
    >
        {children}
    </Paper>
  );
}
