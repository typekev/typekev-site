import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { ThemeMode } from 'types';

import { palette } from 'styles/palette';

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
  const localThemeMode = localStorage.getItem(THEME_MODE_LOCAL_KEY);
  const initTheme =
    (stringIsThemeMode(localThemeMode) ? localThemeMode : null) ??
    (window.matchMedia(PREF_DARK_MEDIA).matches
      ? ThemeMode.dark
      : ThemeMode.light);
  const [themeMode, setThemeMode] = useState<ThemeMode>(initTheme);

  const toggleThemeMode = () => {
    const nextThemeMode =
      themeMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
    localStorage.setItem(THEME_MODE_LOCAL_KEY, nextThemeMode);
    setThemeMode(nextThemeMode);
  };

  useEffect(() => {
    if (stringIsThemeMode(localThemeMode)) {
      setThemeMode(localThemeMode);
    } else if (window.matchMedia(PREF_DARK_MEDIA).matches) {
      setThemeMode(ThemeMode.dark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (themeMode === ThemeMode.light) {
      document.body.style.setProperty('--bg1', palette.retroOffWhite[400]);
      document.body.style.setProperty('--bg2', palette.retroOffWhite[300]);
      document.body.style.setProperty('--bg3', palette.retroOffWhite[200]);
      document.body.style.setProperty('--bg4', palette.retroOffWhite[100]);
      document.body.style.setProperty('--fg', palette.retroOffBlack[400]);
    } else {
      document.body.style.setProperty('--bg1', palette.retroOffBlack[100]);
      document.body.style.setProperty('--bg2', palette.retroOffBlack[200]);
      document.body.style.setProperty('--bg3', palette.retroOffBlack[300]);
      document.body.style.setProperty('--bg4', palette.retroOffBlack[400]);
      document.body.style.setProperty('--fg', palette.retroOffWhite[100]);
    }
  }, [themeMode]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
