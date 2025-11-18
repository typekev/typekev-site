export type Theme = "light" | "dark";

const THEMES: Theme[] = ["light", "dark"];

export const getTheme = (): Theme | undefined => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme") as Theme | null;
    if (theme && THEMES.includes(theme)) return theme;
  }
};

export const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#ffffff");
};

export const storeTheme = (theme: Theme) => localStorage.setItem("theme", theme);

export const deleteTheme = () => localStorage.removeItem("theme");
