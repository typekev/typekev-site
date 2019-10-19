import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Keyboard, { Cursor } from 'react-mk';
import Fade from '@material-ui/core/Fade';
import debounce from 'lodash.debounce';
import Transition from 'components/Transition';
import Title from 'components/Title';
import TypingIndicator from 'components/TypingIndicator';
import { initialState } from 'hooks/useSocket';

export const delay = 3000;
export const defaultSentenceDelayRange = [50, 75];
export const minSentenceVisibilityDurationRange = [1000, 1200];
export const getSentenceDelayRange = messageLength =>
  messageLength * defaultSentenceDelayRange[0] > minSentenceVisibilityDurationRange[0]
    ? defaultSentenceDelayRange
    : minSentenceVisibilityDurationRange.map(time => time / messageLength);

export const handleTyping = messages => ({ type }) => type(...messages);

export const getDelay = disabled => (disabled ? 0 : delay);

export const getShouldDisplayChat = (shouldDisplayChat, displayingInitialMessage) =>
  shouldDisplayChat || displayingInitialMessage;

export default function Chat({ messages, disabled }) {
  const [debouncedMessages, setDebouncedMessages] = useState(initialState);
  const [shouldDisplayChat, setShouldDisplayChat] = useState(initialState);

  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const debouncedMessagesRef = useRef(debouncedMessages);
  debouncedMessagesRef.current = debouncedMessages;

  const disabledRef = useRef(disabled);
  disabledRef.current = disabled;

  const receivingInitialMessage = messagesRef.current[0] === initialState[0];
  const displayingInitialMessage = debouncedMessagesRef.current[0] === initialState[0];

  useEffect(() => {
    if (!receivingInitialMessage) {
      debounce(
        /* istanbul ignore next */
        () => setDebouncedMessages(messagesRef.current),
        getDelay(disabledRef.current),
      )();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  useEffect(() => {
    debounce(
      /* istanbul ignore next */
      () =>
        setShouldDisplayChat(
          debouncedMessagesRef.current.filter(Boolean).length > 0 && !disabledRef.current,
        ),
      getDelay(disabledRef.current),
    )();
  });

  return (
    <Title variant="h6" align="center">
      <Transition
        component={Fade}
        in={getShouldDisplayChat(shouldDisplayChat, displayingInitialMessage)}
        timeout={delay / 2}
        delay={0}
      >
        <div>
          {useMemo(
            () => (
              <Keyboard
                sentenceDelayPerCharRange={
                  /* istanbul ignore next */
                  disabled && !displayingInitialMessage
                    ? [0, 0]
                    : getSentenceDelayRange(
                        Math.min(
                          ...debouncedMessages.map(message => message.length).filter(Boolean),
                        ),
                      )
                }
                keyPressDelayRange={[75, 100]}
              >
                {handleTyping(debouncedMessages)}
              </Keyboard>
            ),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [debouncedMessages],
          )}
          <Cursor />
        </div>
      </Transition>
      <Transition
        component={Fade}
        in={!getShouldDisplayChat(shouldDisplayChat, displayingInitialMessage)}
        timeout={delay / 2}
        delay={0}
      >
        <TypingIndicator />
      </Transition>
    </Title>
  );
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool.isRequired,
};
