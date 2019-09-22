import React, { useMemo } from 'react';
import Keyboard, { Cursor } from 'react-mk';
import Title from 'components/Title';

export const botIntroText = [
  // 400,
  'Welcome, visitor',
  // "I'm Kevin's autonomous assistant",
  // 'What can I help you with?',
];

export const handleTyping = messages => ({ type }) =>
  messages.length > 0 ? type(...messages) : type(...botIntroText);

export default function Chat({ messages }) {
  return useMemo(
    () => (
      <Title variant="h6" align="center">
        <Keyboard sentenceDelayPerCharRange={[0, 0]}>{handleTyping(messages)}</Keyboard>
        <Cursor />
      </Title>
    ),
    [messages],
  );
}
