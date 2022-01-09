import { createTheme } from "@mui/material/styles";

import type { ThemeMode } from "types.d";

import { palette, THEME_MODE_PALETTE_MAP } from "./palette";

export const getMuiTheme = (themeMode: ThemeMode) =>
  createTheme({
    palette: {
      mode: themeMode,
      common: {
        white: palette.retroOffWhite[100],
        black: palette.retroOffBlack[100],
      },
      background: {
        default: THEME_MODE_PALETTE_MAP[themeMode].background,
        paper: THEME_MODE_PALETTE_MAP[themeMode].background,
      },
      primary: {
        contrastText: THEME_MODE_PALETTE_MAP[themeMode].text,
        main: THEME_MODE_PALETTE_MAP[themeMode].primary,
      },
    },
    typography: {
      fontFamily: "Inter",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          text: {
            fontSize: "unset",
            textAlign: "unset",
            textTransform: "unset",
            lineHeight: "unset",
            paddingTop: "unset",
            paddingBottom: "unset",
          },
        },
      },
      MuiDrawer: {
        defaultProps: {
          disableRestoreFocus: true,
        },
        styleOverrides: {
          paper: {
            minWidth: "16em",
          },
        },
      },
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            borderRadius: "50%",
            minWidth: 0,
            padding: 0,
            fontSize: "1em",
            "&:hover": {
              color: "inherit",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            minWidth: "0.25em",
            borderRadius: "0.5em",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            textAlign: "center",
            fontSize: "0.875em",
            maxWidth: "unset",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: "1.5em !important",
            transition: "all 1s",
            backgroundColor: THEME_MODE_PALETTE_MAP[themeMode].background,
          },
        },
      },
    },
  });
