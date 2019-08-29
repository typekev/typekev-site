import { css } from 'styled-components';
import theme from 'resources/theme';

const sunPositioning = css`
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

  ${[theme.breakpoints.up('sm')]} {
    margin-top: calc(50vh - 25vmin - 4rem);
  }
`;

export default sunPositioning;
