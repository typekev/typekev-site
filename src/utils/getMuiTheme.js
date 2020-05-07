import { createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import palette from 'resources/palette';
import { DRAWER_WIDTH } from 'resources/constants';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const themeMap = ({ secondary, background }) => ({
  overrides: {
    MuiDrawer: {
      paper: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        backgroundColor: background.default,
        [defaultTheme.breakpoints.up('sm')]: {
          backgroundColor: fade(background.default, 0.2),
        },
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
    MuiTooltip: {
      tooltip: {
        backgroundColor: secondary.main,
        color: 'inherit',
      },
      arrow: {
        color: secondary.main,
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
