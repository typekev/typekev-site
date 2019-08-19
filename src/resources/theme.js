import { createMuiTheme } from '@material-ui/core/styles';

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
    MuiDrawer: {
      paper: {
        width: 240,
        flexShrink: 0,
        background: '#D9CDB8',
      },
    },
  },
};

export default createMuiTheme(themeMap);
