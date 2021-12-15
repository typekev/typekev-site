import { css } from 'styled-components/macro';

import { frames } from './keyframes';

export const animations = {
  bgPosSway: css`
    ${frames.bgPosSway} ${'7500ms infinite ease'}
  `,
  axisSway: css`
    ${frames.axisSway} ${'2750ms infinite linear'}
  `,
  axisSwayFast: css`
    ${frames.axisSway} ${'1250ms infinite linear'}
  `,
  float: css`
    ${frames.float} ${`4500ms infinite ease`}
  `,
};
