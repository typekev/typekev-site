/**
 *
 * Robot
 *
 */
import { forwardRef, memo, useMemo } from 'react';
import {
  createHtmlPortalNode,
  InPortal,
  OutPortal,
} from 'react-reverse-portal';
import styled, { css } from 'styled-components/macro';
import { Icon } from '@mdi/react';
import {
  mdiRobotAngryOutline,
  mdiRobotConfusedOutline,
  mdiRobotExcitedOutline,
  mdiRobotOutline,
} from '@mdi/js';

import { media } from 'styles/media';
import { gradients } from 'styles/gradients';
import { animations } from 'styles/animations';

import { RobotChatBubble } from './robot/RobotChatBubble';

enum RobotEmotion {
  NEUTRAL = 'neutral',
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  CONFUSED = 'confused',
}

const emotes: Record<RobotEmotion, string> = {
  [RobotEmotion.NEUTRAL]: mdiRobotOutline,
  [RobotEmotion.POSITIVE]: mdiRobotExcitedOutline,
  [RobotEmotion.NEGATIVE]: mdiRobotAngryOutline,
  [RobotEmotion.CONFUSED]: mdiRobotConfusedOutline,
};

interface Props {
  emote?: RobotEmotion;
}

export const Robot = memo(({ emote = RobotEmotion.NEUTRAL }: Props) => {
  const node = useMemo(() => robotPortalNode, []);
  return (
    <InPortal node={node}>
      <RobotChatBubble message="Click me!" />
      <RobotHeadContainer>
        <RobotHead id="robot-head" path={emotes[emote]} color="transparent" />
      </RobotHeadContainer>
    </InPortal>
  );
});

export const RobotOutPortal = memo(
  forwardRef<HTMLDivElement, Props>((props, ref) => {
    const node = useMemo(() => robotPortalNode, []);
    return (
      <OutPortalContainer ref={ref}>
        <OutPortal node={node} {...props} />
      </OutPortalContainer>
    );
  }),
);

const robotPortalNode = createHtmlPortalNode();

const OutPortalContainer = styled.div`
  position: relative;

  > * {
    --float-x: 0em;

    ${css`
      ${media.small`
        --float-x: 0.125em;
      `}

      ${media.medium`
        --float-x: 0.5em;
      `}
    `}

    position: absolute;
    display: flex;
    float: right;
    align-items: center;
    right: 1.25em;
    gap: 0.5em;
    animation: ${animations.float};

    ${css`
      ${media.small`
        right: 2em;
        gap: 1em;
      `}

      ${media.medium`
        right: 3em;
        gap: 1.5em;
      `}

      ${media.large`
        right: 7em;
        gap: 2em;
      `}
    `}
  }
`;

const RobotHeadContainer = styled.div`
  cursor: pointer;
  position: relative;
  float: right;
  min-width: 5em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin-top: 0.5em;
  margin-bottom: 1em;

  ${css`
    ${media.small`
      min-width: 6em;
      width: 9em;
      height: 9em;
      margin-bottom: 2em;
    `}

    ${media.medium`
      min-width: 10em;
      width: 12em;
      height: 12em;
      margin-top: 1em;
      margin-bottom: 3em;
    `}

    ${media.large`
      min-width: 11em;
      width: 14em;
      height: 14em;
      margin-top: 3em;
      margin-bottom: 4em;
    `}
  `}

  :hover > svg {
    animation: ${animations.bgPosSway}, ${animations.axisSwayFast};
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${mdiRobotExcitedOutline}'/></svg>")
      center/contain;
  }
`;

const RobotHead = styled(Icon)`
  --sway-x: 0em;

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
  width: inherit;
  background: ${gradients.bgFocused};
  background-size: 550% 150%;
  animation: ${animations.bgPosSway}, ${animations.axisSway};

  ${({ path }) => css`
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${path}'/></svg>")
      center/contain;
  `}
`;
