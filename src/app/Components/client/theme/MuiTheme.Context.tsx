'use client'
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ReactNode, createContext } from "react";
import { useAppTheme } from "./MuiTheme.Hook";
import { lightTheme } from "./MuiTheme.Theme";

export const CustonThemeContext = createContext({theme: lightTheme, toggleTheme: (isDarkTheme: boolean)=>{}});

export const CustonThemeProvider = ({children} : {children : ReactNode}) => {
  const [ theme, toggleTheme ] = useAppTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustonThemeContext.Provider value={{theme, toggleTheme}}>
          {children}
      </CustonThemeContext.Provider>
    </ThemeProvider>
  )
};
