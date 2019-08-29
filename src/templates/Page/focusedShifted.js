import { css } from 'styled-components';
import { drawerWidth } from 'resources/constants';

const focusedShifted = css`
  margin-left: calc(50% - 10vmin - ${drawerWidth / 2}px);
`;

export default focusedShifted;
