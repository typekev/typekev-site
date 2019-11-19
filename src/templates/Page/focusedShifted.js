import { css } from 'styled-components';
import { drawerWidth } from 'resources/constants';
import theme from 'resources/theme';

const focusedShifted = css`
  ${[theme.breakpoints.up('sm')]} {
    right: calc(50% - 10vmin - ${drawerWidth / 2}px);
  }
`;

export default focusedShifted;
