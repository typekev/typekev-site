import { createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import palette from 'resources/palette';
import { drawerWidth } from 'resources/constants';

export const themeMap = ({ background }) => ({
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
        background: background.default,
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
});

const getMuiTheme = SELECTED_COLOR_SCHEME =>
  createMuiTheme({
    palette: palette[SELECTED_COLOR_SCHEME],
    ...themeMap(palette[SELECTED_COLOR_SCHEME]),
  });

export default getMuiTheme;
