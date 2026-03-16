import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME = "dark";

// Centralized theme state keeps App lean and makes toggling reusable.
export function useThemePreference() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
