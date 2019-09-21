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

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Sun = styled.div`
  ${position}
  ${({ open, location: { pathname } }) =>
    pathname === '/' &&
    css`
      ${focused}
      ${open && focusedShifted}
      ${[theme.breakpoints.up('lg')]} {
        ${focusedShifted}
      }
    `};
  opacity: 0;
  animation: ${fade} 1100ms cubic-bezier(0.4, 0, 0.2, 1) forwards 550ms,
    ${breath} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 225ms;
`;

export default withRouter(Sun);
