export type Theme = "light" | "dark";

const THEMES: Theme[] = ["light", "dark"];

export const getTheme = (): Theme | undefined => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme") as Theme | null;
    if (theme && THEMES.includes(theme)) return theme;
  }
};
