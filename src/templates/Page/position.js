import { css } from 'styled-components';
import theme from 'resources/theme';

const position = css`
  position: fixed;
  margin-top: calc(50vh - 25vmin - 3.5rem);
  margin-bottom: calc(50vh - 25vmin);
  margin-left: -25vmin;
  width: 50vmin;
  height: 50vmin;
  border-radius: 50%;
  max-height: 100%;
  z-index: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${[theme.breakpoints.up('sm')]} {
    margin-top: calc(50vh - 25vmin - 4rem);
  }
`;

export default position;
