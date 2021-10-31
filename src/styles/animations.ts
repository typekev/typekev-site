import { css } from 'styled-components/macro';

import { frames } from './keyframes';

export const animations = {
  bgPosSway: css`
    ${frames.bgPosSway} ${'10s infinite ease both'}
  `,
  axisSway: css`
    ${frames.axisSway} ${'2s infinite linear'}
  `,
  axisSwayFast: css`
    ${frames.axisSway} ${'750ms infinite linear'}
  `,
};
