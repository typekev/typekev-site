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
      secondary: {
        main: THEME_MODE_PALETTE_MAP[themeMode].secondary,
      },
      success: {
        main: THEME_MODE_PALETTE_MAP[themeMode].success,
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      fontFamilyAlt: "'Averia Serif Libre', serif",
      fontWeightBold: 700,
      fontWeightMedium: 400,
      fontWeightRegular: 300,
      fontWeightLight: 200,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          text: {
            fontSize: "inherit",
            textAlign: "inherit",
            textTransform: "inherit",
            lineHeight: "inherit",
            paddingTop: 0,
            paddingBottom: 0,
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
            backgroundColor: THEME_MODE_PALETTE_MAP[themeMode].drawer,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: "1.5em !important",
            transition: "all 375ms",
            backgroundColor: THEME_MODE_PALETTE_MAP[themeMode].input,
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
          outlined: {
            borderWidth: 2,
          },
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
            padding: "0.625em 0.875em",
          },
        },
      },
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
    },
  });
