/**
 *
 * RobotChatBubble
 *
 */
import { memo, useCallback, useContext } from 'react';
import Keyboard from 'react-mk';
import styled, { css } from 'styled-components/macro';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

import { ThemeModeContext } from 'contexts/ThemeModeContext';
import { media } from 'styles/media';
import { palette } from 'styles/palette';
import { alpha } from '@mui/material';
import { animations } from 'styles/animations';

interface Props {
  message?: string;
}

export const RobotChatBubble = memo(({ message }: Props) => {
  const { themeMode } = useContext(ThemeModeContext);

  const type = useCallback(({ type }) => type(500, message), [message]);

  return (
    <BubbleContainer>
      <Grow in={!!message} timeout={1000} style={{ transitionDelay: '500ms' }}>
        <Bubble sx={{ boxShadow: 1, ...bubbleTheme[themeMode] }}>
          {message && <Keyboard>{type}</Keyboard>}
        </Bubble>
      </Grow>
    </BubbleContainer>
  );
});

const bubbleTheme = {
  light: {
    background: alpha(palette.retroOffWhite[100], 0.94),
    borderLeftColor: palette.retroOffWhite[100],
  },
  dark: {
    background: alpha(palette.retroOffBlack[100], 0.94),
    borderLeftColor: palette.retroOffBlack[100],
  },
};

const BubbleContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Bubble = styled(Box)`
  padding: 0.75em 0.5em;
  border-radius: 1em;
  text-align: center;
  font-weight: 300;
  font-size: 1em;
  animation: ${animations.float};

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

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 50%;
    transform: translateY(50%);
    right: -0.375em;
    border: 0.375em solid transparent;
    border-right: none;
    border-left-color: inherit;
    margin-top: -0.5rem;

    filter: drop-shadow(0.0375em 0.05em 0.025em rgba(0, 0, 0, 0.19));
  }
`;
