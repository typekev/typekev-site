/**
 *
 * RobotChatBubble
 *
 */
import { memo, useContext } from 'react';
import Keyboard from 'react-mk';
import styled, { css } from 'styled-components/macro';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

import { ThemeModeContext } from 'contexts/ThemeModeContext';
import { media } from 'styles/media';
import { THEME_MODE_PALETTE_MAP } from 'styles/palette';
import { alpha } from '@mui/material';
import { animations } from 'styles/animations';

interface Props {
  message: string;
}

export const RobotChatBubble = memo(({ message }: Props) => {
  const { themeMode } = useContext(ThemeModeContext);

  const { background, accent, text } = THEME_MODE_PALETTE_MAP[themeMode];
  const backgroundColor = alpha(background, 0.94);
  const borderColor = alpha(accent, 0.94);

  return (
    <Grow
      unmountOnExit
      style={{ transformOrigin: 'center right' }}
      in={!!message}
    >
      <BubbleContainer>
        <Bubble
          sx={{
            boxShadow: 1,
            backgroundColor,
            borderColor,
            borderLeftColor: borderColor,
            color: text,
          }}
        >
          <span>
            <Keyboard keyPressDelayRange={[50, 80]}>{message || ''}</Keyboard>
          </span>
        </Bubble>
      </BubbleContainer>
    </Grow>
  );
});

const BubbleContainer = styled(Box)`
  position: relative;
  z-index: 1;
`;

const Bubble = styled(Box)`
  --float-x: 0.25em;
  padding: 0.5em;
  border-radius: 1em;
  text-align: center;
  font-weight: 400;
  font-size: 1em;
  animation: ${animations.float};
  transition: color 750ms, background-color 750ms, border-color 750ms;
  border-style: solid;
  min-width: 4em;
  min-height: 37.5px;

  ${css`
    ${media.small`
      font-size: 1.5em;
    `}

    ${media.medium`
      font-size: 2em;
    `}

    ${media.large`
      font-size: 2.5em;
    `}
  `}

  & span:empty:before {
      content: '\xa0';
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 50%;
    transform: translateY(50%);
    right: -1.25em;
    border-width: 0.625em;
    ${css`
      ${media.medium`
        right: -1em;
        border-width: 0.5em;
      `}

      ${media.large`
        right: -0.75em;
        border-width: 0.375em;
      `}
    `}

    border-style: solid;
    border-color: transparent;
    border-left-color: inherit;
    margin-top: -0.5rem;

    filter: drop-shadow(0.0375em 0.05em 0.025em rgba(0, 0, 0, 0.19));
  }
`;
