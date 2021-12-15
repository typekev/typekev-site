import { css } from 'styled-components/macro';

import { frames } from './keyframes';

export const animations = {
  bgPosSway: css`
    ${frames.bgPosSway} ${'10s infinite ease both'}
  `,
  axisSway: css`
    ${frames.axisSway} ${'2250ms infinite linear'}
  `,
  axisSwayFast: css`
    ${frames.axisSway} ${'1250ms infinite linear'}
  `,
  float: css`
    ${frames.float} ${`4s infinite linear`}
  `,
};
