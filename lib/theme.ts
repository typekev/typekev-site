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

export const getCurrentTheme = (): Theme => getTheme() ?? getSystemTheme();

export const getServerTheme = (): Theme => "light";

export const subscribeTheme = (onChange: () => void) => {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onChange);
  window.addEventListener("themechange", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener("themechange", onChange);
    window.removeEventListener("storage", onChange);
  };
};

export const storeTheme = (theme: Theme) => {
  localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event("themechange"));
};

export const deleteTheme = () => {
  localStorage.removeItem("theme");
  window.dispatchEvent(new Event("themechange"));
};
