import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

import {
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  accentColor,
  accentColorDark,
  accentColorLight,
  text,
  primaryText,
  secondaryText,
  accentText,
  backgroundColor,
  errorColor,
  backgroundContrast,
  backgroundColorDark,
  backgroundDarkGradient,
  backgroundLightGradient,
  backgroundContrastDarkGradient,
  backgroundContrastLightGradient,
} from './Colors';

const TypekevTheme = createMuiTheme({
  typography: {
    fontFamily: '"Inconsolata", sans-serif',
    fontSize: 15,
  },

  palette: {
    primary: {
      light: primaryColorLight,
      main: primaryColor,
      dark: primaryColorDark,
      contrastText: primaryText,
    },
    secondary: {
      light: accentColorLight,
      main: accentColor,
      dark: accentColorDark,
      contrastText: primaryText,
    },
    error: { main: errorColor },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },

  overrides: {
    MuiAppBar: {
      colorPrimary: {
        background: backgroundDarkGradient,
        backgroundColor: 'transparent',
      },
      positionAbsolute: {
        top: "auto",
      },
    },
    MuiButton: {
      label: {
        fontFamily: '"Montserrat", sans-serif',
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: primaryColorDark,
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: backgroundColorDark,
        color: primaryText,
      },
    },
    MuiTooltip: {
      tooltip: {
        background: backgroundDarkGradient,
      },
    },
    MuiLinearProgress: {
      root: {
        height: '0.25rem',
      },
      colorSecondary: {
        backgroundColor: 'transparent',
      },
    },
  },
});

export default TypekevTheme;
