import { withRouter } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import position from 'templates/Page/position';
import focused from 'templates/Page/focused';
import focusedShifted from 'templates/Page/focusedShifted';
import theme from 'resources/theme';

const {
  palette: { secondary },
} = theme;

const breath = keyframes`
  0% {
     transform:scale(.7);
     background-color: ${secondary.main};
  }
  50% {
    transform:scale(1.5);
    background-color: ${secondary.light};
  }
  100% {
    transform:scale(.7);
    background-color: ${secondary.main};
  }
`;

const Sun = styled.div`
  ${position}
  ${({ open, location: { pathname } }) =>
    pathname === '/' &&
    css`
      ${focused}
      ${open && focusedShifted}
    `};
  animation: ${breath} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

export default withRouter(Sun);
