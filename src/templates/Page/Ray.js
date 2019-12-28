import { withRouter } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import position from 'templates/Page/position';
import focused from 'templates/Page/focused';
import focusedShifted from 'templates/Page/focusedShifted';

const blast = keyframes`
  0% {
     transform:scale(.7);
     opacity: 1;
     border-width: 1rem;
  }
  50% {
    transform:scale(2.5);
    opacity: 0;
    border-width: 0rem;
  }
`;

const Ray = styled.div`
  ${position}
  ${({ theme }) => css`
    border-color: ${theme.palette.secondary.main};
  `}
  ${({ open, location: { pathname } }) =>
    (pathname === '/' || pathname === '/explore/') &&
    css`
      ${focused}
      ${open && focusedShifted}
      ${({ theme }) => [theme.breakpoints.up('lg')]} {
        ${focusedShifted}
      }
    `};
  border-width: 0;
  border-style: solid;
  animation: ${blast} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({ delay }) => delay + 8}s;
`;

export default withRouter(withTheme(Ray));
