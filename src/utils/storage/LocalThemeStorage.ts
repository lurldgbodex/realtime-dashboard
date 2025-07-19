import type { ThemeStorage } from "./ThemeStorage";

const STORAGE_KEY = "app-theme-mode";

const LocalThemeStorage: ThemeStorage = {
  getTheme: () => {
    const theme = localStorage.getItem(STORAGE_KEY);
    return theme === "light" || theme === "dark" ? theme : "light";
  },
  setTheme: (mode) => {
    localStorage.setItem(STORAGE_KEY, mode);
  },
};
export default LocalThemeStorage;
