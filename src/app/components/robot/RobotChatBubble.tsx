/**
 *
 * RobotChatBubble
 *
 */
import { memo } from 'react';
import Keyboard from 'react-mk';
import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

interface Props {
  message?: string;
}

export const RobotChatBubble = memo(({ message }: Props) => {
  return (
    <Grow in={!!message} timeout={1000} style={{ transitionDelay: '500ms' }}>
      <Bubble sx={{ boxShadow: 1 }}>
        {message && <Keyboard>{({ type }) => type(500, message)}</Keyboard>}
      </Bubble>
    </Grow>
  );
});

const Bubble = styled(Box)`
  position: absolute;
  margin-left: -55vw;
  width: 50vw;
  text-align: center;

  background-color: #fff;
  padding: 0.75em 0.5em;
  border-radius: 1em;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 50%;
    transform: translateY(50%);
    right: -0.5em;
    border: 0.75em solid transparent;
    border-right: none;
    border-left-color: #fff;
    margin-top: -0.5rem;

    filter: drop-shadow(0.125em 0 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;
