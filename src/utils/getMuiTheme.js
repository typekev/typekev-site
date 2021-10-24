import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import palette from 'resources/palette';
import { DRAWER_WIDTH } from 'resources/constants';

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

export const getGlobalCss = theme =>
  withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      button: {
        transition:
          // eslint-disable-next-line max-len
          'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-radius 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
        borderRadius: '50%',
      },
      '.active > button': {
        backgroundColor: `${fade(theme.palette.primary.contrastText, 0.15)} !important`,
        borderRadius: 0,
      },
    },
  })(() => null);

export default getMuiTheme;
