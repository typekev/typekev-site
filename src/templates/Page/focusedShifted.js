import { css } from 'styled-components';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import { DRAWER_WIDTH } from 'resources/constants';

const focusedShifted = css`
  ${[defaultTheme.breakpoints.up('sm')]} {
    right: calc(50% - 10vmin - ${DRAWER_WIDTH / 2}px);
  }
`;

export default focusedShifted;
