import { createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from '@material-ui/core/styles/defaultTheme';

export const drawerWidth = 240;

export const themeMap = {
  palette: {
    primary: {
      main: '#9CB6D9',
    },
    secondary: {
      main: '#F2E6A7',
    },
    error: {
      main: '#D33332',
    },
    background: {
      default: '#D9CDB8',
    },
  },
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
        background: '#D9CDB8',
      },
    },
  },
};

export default createMuiTheme(themeMap);
