import { css } from 'styled-components/macro';

import { frames } from './keyframes';

export const animations = {
  bgSwayText: css`
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${frames.bgSway} 10s infinite ease both;
    border-radius: 1em;
    padding: 0.125em 0.25em;
    margin: 0 -0.25em;
  `,
};
