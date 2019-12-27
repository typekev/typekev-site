import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Keyboard, { Cursor } from 'react-mk';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Transition from 'components/Transition';
import TypingIndicator from 'components/TypingIndicator';
import { initialState } from 'hooks/useSocket';

export const defaultSentenceDelayRange = [50, 75];
export const minSentenceVisibilityDurationRange = [1000, 1200];
export const getSentenceDelayRange = messageLength =>
  messageLength * defaultSentenceDelayRange[0] > minSentenceVisibilityDurationRange[0]
    ? defaultSentenceDelayRange
    : minSentenceVisibilityDurationRange.map(time => time / messageLength);

export const handleTyping = messages => ({ type }) => type(...messages);

export const getShouldDisplayChat = (hasMessages, displayingInitialMessage) =>
  hasMessages || displayingInitialMessage;

export default function Chat({ messages, disabled }) {
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const displayingInitialMessage = messages[0] === initialState[0];
  const hasMessages = messages.filter(Boolean).length > 0;

  return (
    <Typography variant="h6" align="center">
      <Transition
        component={Fade}
        in={!!getShouldDisplayChat(hasMessages, displayingInitialMessage)}
        timeout={hasMessages ? 500 : 0}
        delay={0}
      >
        <div>
          {useMemo(
            () =>
              hasMessages && (
                <Keyboard
                  sentenceDelayPerCharRange={
                    /* istanbul ignore next */
                    disabled && !displayingInitialMessage
                      ? [0, 0]
                      : getSentenceDelayRange(
                          Math.min(...messages.map(message => message.length).filter(Boolean)),
                        )
                  }
                  keyPressDelayRange={[65, 80]}
                >
                  {handleTyping(messages)}
                </Keyboard>
              ),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [messages],
          )}
          <Cursor />
        </div>
      </Transition>
      <Transition
        component={Fade}
        in={!getShouldDisplayChat(hasMessages, displayingInitialMessage)}
        timeout={500}
        delay={0}
      >
        <TypingIndicator />
      </Transition>
    </Typography>
  );
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  disabled: PropTypes.bool.isRequired,
};
