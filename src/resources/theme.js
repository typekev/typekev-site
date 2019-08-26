import { createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from '@material-ui/core/styles/defaultTheme';

export const drawerWidth = 256;

const palette = {
  primary: {
    main: '#AFC8E0',
  },
  secondary: {
    main: '#F9F3AA',
  },
  error: {
    main: '#D33332',
  },
  background: {
    default: '#EDE8DD',
  },
};

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
  },
};

export default createMuiTheme(themeMap);
