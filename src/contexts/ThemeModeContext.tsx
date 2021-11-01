import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { ThemeMode } from 'types';

const THEME_MODE_LOCAL_KEY = 'themeMode';
const PREF_DARK_MEDIA = '(prefers-color-scheme: dark)';
const POSSIBLE_THEME_MODES = Object.values(ThemeMode);

const stringIsThemeMode = (maybeTM: string | null): maybeTM is ThemeMode =>
  POSSIBLE_THEME_MODES.includes(maybeTM as ThemeMode);

export const ThemeModeContext = createContext({
  themeMode: ThemeMode.light,
  toggleThemeMode: () => {},
});

export const ThemeModeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.light);

  const toggleThemeMode = () => {
    const nextThemeMode =
      themeMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
    localStorage.setItem(THEME_MODE_LOCAL_KEY, nextThemeMode);
    setThemeMode(nextThemeMode);
  };

  useEffect(() => {
    const localThemeMode = localStorage.getItem(THEME_MODE_LOCAL_KEY);
    if (stringIsThemeMode(localThemeMode)) {
      setThemeMode(localThemeMode);
    } else if (window.matchMedia(PREF_DARK_MEDIA).matches) {
      setThemeMode(ThemeMode.dark);
    }
  }, []);

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
