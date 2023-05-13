'use client'

import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./MuiTheme.Theme";
import { useLocalStorage } from "../localStorage/Storage.Hook";

export function useAppTheme() {
  const [theme, setTheme] = useState(lightTheme);
  const [soredThemeMode, setStoredThemeMode] = useLocalStorage<
    "dark" | "light"
  >("themeMode", "dark");
  const toggleTheme = (isDarkTheme: boolean) => {
    const currentTheme = !isDarkTheme ? lightTheme : darkTheme;
    setTheme(currentTheme);
    setStoredThemeMode(currentTheme.palette.mode);
  };

  useEffect(() => {
    const currentTheme = soredThemeMode === "dark" ? darkTheme : lightTheme;
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [soredThemeMode]);

  return [theme, toggleTheme] as const;
}
