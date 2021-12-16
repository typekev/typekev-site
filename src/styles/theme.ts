import { createTheme } from '@mui/material/styles';
import { css, FlattenSimpleInterpolation } from 'styled-components/macro';

import { ThemeMode } from 'types';

import { palette } from './palette';

export const theme: Record<ThemeMode, FlattenSimpleInterpolation> = {
  light: css`
    --bg1: ${palette.retroOffWhite[400]};
    --bg2: ${palette.retroOffWhite[300]};
    --bg3: ${palette.retroOffWhite[200]};
    --bg4: ${palette.retroOffWhite[100]};
    --fg: ${palette.retroOffBlack[400]};
  `,
  dark: css`
    --bg1: ${palette.retroOffBlack[100]};
    --bg2: ${palette.retroOffBlack[200]};
    --bg3: ${palette.retroOffBlack[300]};
    --bg4: ${palette.retroOffBlack[400]};
    --fg: ${palette.retroOffWhite[100]};
  `,
};

export const getMuiTheme = (themeMode: ThemeMode) =>
  createTheme({
    palette: {
      mode: themeMode,
      background: {
        paper:
          themeMode === ThemeMode.light
            ? palette.retroOffWhite[100]
            : palette.retroOffBlack[400],
      },
      primary: {
        main:
          themeMode === ThemeMode.light
            ? palette.retroOffBlack[200]
            : palette.retroOffWhite[300],
      },
    },
    components: {
      MuiDrawer: {
        defaultProps: {
          disableRestoreFocus: true,
        },
        styleOverrides: {
          paper: {
            minWidth: '16em',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            borderRadius: '50%',
            minWidth: 0,
            padding: 0,
            fontSize: '1em',
            '&:hover': {
              color: 'inherit',
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            minWidth: '0.25em',
            borderRadius: '0.5em',
          },
        },
      },
    },
  });
