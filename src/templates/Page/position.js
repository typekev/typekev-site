import { css } from 'styled-components';
import defaultTheme from '@material-ui/core/styles/defaultTheme';

const position = css`
  position: fixed;
  right: -25vmin;
  margin-top: calc(50vh - 25vmin - 3.5rem);
  margin-bottom: calc(50vh - 25vmin);
  width: 50vmin;
  height: 50vmin;
  max-height: 100%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  transition: all 1s cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${[defaultTheme.breakpoints.up('sm')]} {
    margin-top: calc(50vh - 25vmin - 4rem);
  }
`;

export default position;
