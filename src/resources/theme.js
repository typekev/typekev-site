import { createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import palette from 'resources/palette';
import { drawerWidth } from 'resources/constants';

export const themeMap = {
  palette,
  overrides: {
    MuiBox: {
      root: {
        [defaultTheme.breakpoints.up('lg')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
      },
    },
    MuiDrawer: {
      paper: {
        width: drawerWidth,
        flexShrink: 0,
        background: palette.background.default,
      },
    },
    MuiInputBase: {
      input: {
        textAlign: 'center',
      },
    },
    MuiTextField: {
      root: {
        width: '32rem',
        maxWidth: '100%',
      },
    },
  },
};

export default createMuiTheme(themeMap);
