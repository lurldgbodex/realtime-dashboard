export interface ThemeStorage {
  getTheme: () => "light" | "dark";
  setTheme: (mode: "light" | "dark") => void;
}
