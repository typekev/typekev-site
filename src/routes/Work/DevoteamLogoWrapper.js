import styled, { css, keyframes } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import position from 'templates/Page/position';
import defaultTheme from '@material-ui/core/styles/defaultTheme';

const breath = keyframes`
  0% {
    transform:scale(.3);
  }
  50% {
    transform:scale(.4);
  }
  100% {
    transform:scale(.3);
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

const sway = keyframes`
  0% {
    right: -22vmin;
  }
  50% {
    right: -18vmin;
  }
  100% {
    right: -22vmin;
  }
`;

const DevoteamLogoWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ theme }) => css`
    color: ${theme.palette.background.default};
  `}

  & svg {
    ${position}
    margin-top: calc(50vh - (25vmin + 3rem) - 3.5rem);
    opacity: 0;
    animation: ${fade} 3300ms cubic-bezier(0.4, 0, 0.2, 1) forwards 500ms,
      ${breath} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 0ms,
      ${sway} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 0ms;
    z-index: -1;

    ${[defaultTheme.breakpoints.up('sm')]} {
      margin-top: calc(50vh - (25vmin + 3.5rem) - 3.5rem);
    }
  }
`;

export default withTheme(DevoteamLogoWrapper);
