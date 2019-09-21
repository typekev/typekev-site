import React, { useMemo } from 'react';
import Keyboard, { Cursor } from 'react-mk';
import Title from 'components/Title';

export default function Chat({ messages, handleTyping }) {
  return useMemo(
    () => (
      <Title variant="h6" align="center">
        <Keyboard sentenceDelayPerCharRange={[0, 0]}>{handleTyping(messages)}</Keyboard>
        <Cursor />
      </Title>
    ),
    [messages, handleTyping],
  );
}
