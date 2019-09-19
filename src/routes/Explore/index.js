import React, { useState } from 'react';
import Keyboard, { Cursor } from 'react-mk';
import Grow from '@material-ui/core/Grow';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Title from 'components/Title';
import useChat from 'hooks/useChat';
import Form from 'routes/Explore/Form';
import Bot from 'routes/Explore/Bot';

export const botIntroText = [
  // 400,
  'Welcome, visitor',
  // "I'm Kevin's autonomous assistant",
  // 'What can I help you with?',
];

export const handleTyping = messages => ({ type }) =>
  messages.length > 0 ? type(...messages) : type(...botIntroText);

export default function Explore() {
  const [{ streamUrl }, startChat, sendMessage] = useChat();
  const [messages, setMessages] = useState([]);

  return (
    <Transition in component={Grow}>
      <Content align="center" maxWidth="md">
        <Bot startChat={startChat} streamUrl={streamUrl} setMessages={setMessages} />
        <Title variant="h6" align="center">
          <Keyboard sentenceDelayPerCharRange={[0, 0]}>{handleTyping(messages)}</Keyboard>
          <Cursor />
        </Title>
        <Form sendMessage={sendMessage} />
      </Content>
    </Transition>
  );
}
