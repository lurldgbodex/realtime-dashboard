import { useEffect, useMemo, useState } from "react";
import { ThemeContext, type ThemeMode } from "./ThemeContext";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import LocalThemeStorage from "../../utils/storage/LocalThemeStorage";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const themeMode = LocalThemeStorage.getTheme();
    return themeMode ?? "light";
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    LocalThemeStorage.setTheme(mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#90caf9",
          },
        },
      }),
    [mode]
  );

  const value = useMemo(() => ({ mode, toggleTheme }), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
