/**
 *
 * Robot
 *
 */
import { forwardRef, memo, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components/macro';
import { Icon } from '@mdi/react';
import {
  mdiRobotAngryOutline,
  mdiRobotConfusedOutline,
  mdiRobotExcitedOutline,
  mdiRobotHappyOutline,
  mdiRobotLoveOutline,
  mdiRobotOutline,
} from '@mdi/js';

import { media } from 'styles/media';
import { gradients } from 'styles/gradients';
import { animations } from 'styles/animations';

enum RobotEmotion {
  NEUTRAL = 'neutral',
  HAPPY = 'happy',
  EXCITED = 'excited',
  LOVE = 'love',
  CONFUSED = 'confused',
  ANGRY = 'angry',
}

const emotes: Record<RobotEmotion, string> = {
  [RobotEmotion.NEUTRAL]: mdiRobotOutline,
  [RobotEmotion.HAPPY]: mdiRobotHappyOutline,
  [RobotEmotion.EXCITED]: mdiRobotExcitedOutline,
  [RobotEmotion.LOVE]: mdiRobotLoveOutline,
  [RobotEmotion.CONFUSED]: mdiRobotConfusedOutline,
  [RobotEmotion.ANGRY]: mdiRobotAngryOutline,
};

interface Props {
  emote?: RobotEmotion;
}

export const Robot = memo(
  forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
    ({ emote = RobotEmotion.NEUTRAL, children }, ref) => {
      return (
        <RobotBox ref={ref}>
          {children}
          <RobotHead id="robot-head" path={emotes[emote]} color="transparent" />
        </RobotBox>
      );
    },
  ),
);

const RobotBox = styled.div`
  position: relative;
  float: right;
  top: 1em;
  margin-right: 1em;
  width: 5em;
  height: 5em;
  border-radius: 50%;

  ${css`
    ${media.small`
      margin-right: 2em;
      width: 9em;
      height: 9em;
    `}

    ${media.medium`
      margin-right: 4em;
      width: 12em;
      height: 12em;
    `}

    ${media.large`
      margin-right: 6vw;
      width: 14em;
      height: 14em;
      margin-top: 1em;
    `}
  `}

  :hover > svg {
    animation: ${animations.bgPosSway}, ${animations.axisSwayFast};
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${mdiRobotExcitedOutline}'/></svg>")
      center/contain;
  }
`;

const RobotHead = styled(Icon)`
  --sway-x: 0;

  ${css`
    ${media.small`
      --sway-x: 1em;
      margin-left: -0.5em;
    `}

    ${media.medium`
      --sway-x: 1.5em;
      margin-left: -0.75em;
    `}
  `}

  pointer-events: none;
  position: absolute;
  margin-top: -1em;
  width: inherit;
  background: ${gradients.bgFocused};
  background-size: 1000% 1000%;
  animation: ${animations.bgPosSway}, ${animations.axisSway};

  ${({ path }) => css`
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${path}'/></svg>")
      center/contain;
  `}
`;
