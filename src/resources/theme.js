import { createMuiTheme } from '@material-ui/core/styles';

export const themeMap = {
  palette: {
    primary: {
      main: '#74ABC6',
    },
    secondary: {
      main: '#F7F3A9',
    },
    error: {
      main: '#D33332',
    },
    background: {
      default: '#E9DFC8',
    },
  },
};

export default createMuiTheme(themeMap);
