'use client'
import { createTheme } from "@mui/material";

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarColor: "#6b6b6b #2b2b2b",
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          backgroundColor: "#2b2b2b",
          borderRadius: 10,
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: 8,
          backgroundColor: "#6b6b6b",
          minHeight: 24,
          border: "3px solid #2b2b2b",
        },
        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
          backgroundColor: "#959595",
        },
        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
          backgroundColor: "#959595",
        },
        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#959595",
        },
        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
          backgroundColor: "#2b2b2b",
        },
      },
    },
  },
};
export const darkTheme = createTheme({
   components: components,
  palette: {
    background: { default: "#222222" },
    mode: "dark",
    primary: { main: "#f5f5f1" },
    secondary: { main: "#D35400" },
    text: { primary: "#f5f5f1" },

  },
});

export const lightTheme = createTheme({
  components: components,
  palette: {
    background: {default: "#faf6cf", paper: "rgba(255, 255, 255, 1)"},
    mode: "light",
    primary: { main: "#e53509" },
    secondary: {main: "#D35400" },
    text: {
      primary: "#222222",
      secondary: "#585858"
    },
  },

});
