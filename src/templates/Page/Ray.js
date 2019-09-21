import { withRouter } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import position from 'templates/Page/position';
import focused from 'templates/Page/focused';
import focusedShifted from 'templates/Page/focusedShifted';
import theme from 'resources/theme';

const {
  palette: { secondary },
} = theme;

const blast = keyframes`
  0% {
     transform:scale(.7);
     opacity: 1;
     border-color: ${secondary.light};
     border-width: 1rem;
  }
  50% {
    transform:scale(2.5);
    opacity: 0;
    border-color: ${secondary.light};
    border-width: 0rem;
  }
`;

const Ray = styled.div`
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
  border-width: 0;
  border-style: solid;
  animation: ${blast} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({ delay }) => delay + 8}s;
`;

export default withRouter(Ray);
