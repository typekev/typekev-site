import { memo, PropsWithChildren, useContext, useMemo } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";

import { ThemeModeContext } from "contexts/ThemeModeContext";
import { getMuiTheme } from "theme";
import { getGlobalStyles } from "theme/getGlobalStyles";

export const ThemedApp = memo(({ children }: PropsWithChildren<unknown>) => {
  const { themeMode } = useContext(ThemeModeContext);
  const theme = useMemo(() => themeMode && getMuiTheme(themeMode), [themeMode]);

  // Wait for user's preferred theme to load in order to avoid animation lag on first page load
  if (!theme) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={(theme) => getGlobalStyles(theme)} />
      {children}
    </ThemeProvider>
  );
});

ThemedApp.displayName = ThemedApp.name;
