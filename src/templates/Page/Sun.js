import { withRouter } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import { withTheme } from '@material-ui/core/styles';
import position from 'templates/Page/position';
import focused from 'templates/Page/focused';
import focusedShifted from 'templates/Page/focusedShifted';

const breath = keyframes`
  0% {
    transform:scale(.7);
  }
  50% {
    transform:scale(1.5);
  }
  100% {
    transform:scale(.7);
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
  ${({ theme }) => css`
    background-color: ${theme.palette.secondary.main};
  `}
  ${({ open, location: { pathname } }) =>
    (pathname === '/' || pathname === '/explore/') &&
    css`
      ${focused}
      ${open && focusedShifted}
      ${[defaultTheme.breakpoints.up('lg')]} {
        ${focusedShifted}
      }
    `};
  opacity: 0;
  animation: ${fade} 1100ms cubic-bezier(0.4, 0, 0.2, 1) forwards 550ms,
    ${breath} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 225ms;
`;

export default withRouter(withTheme(Sun));
