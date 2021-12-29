import type { AppProps } from "next/app";
import { memo, PropsWithChildren, useContext, useMemo } from "react";

import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { appWithTranslation } from "next-i18next";

import { ThemeModeContext, ThemeModeProvider } from "contexts/ThemeModeContext";
import { getMuiTheme } from "theme";
import { getGlobalStyles } from "theme/getGlobalStyles";
import createEmotionCache from "utils/createEmotionCache";

import nextI18NextConfig from "../../next-i18next.config";

const emotionCache = createEmotionCache();

export default appWithTranslation(({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeModeProvider>
        <ThemedApp>
          <Component {...pageProps} />
        </ThemedApp>
      </ThemeModeProvider>
    </CacheProvider>
  );
}, nextI18NextConfig);

const ThemedApp = memo(({ children }: PropsWithChildren<unknown>) => {
  const { themeMode } = useContext(ThemeModeContext);
  const theme = useMemo(() => themeMode && getMuiTheme(themeMode), [themeMode]);

  // Wait for user's preferred theme to load in order to avoid animation lag on first page load
  return theme ? (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={(theme) => getGlobalStyles(theme)} />
      {children}
    </ThemeProvider>
  ) : null;
});

ThemedApp.displayName = ThemedApp.name;
