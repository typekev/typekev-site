import React, { useState } from 'react';
import Grow from '@material-ui/core/Grow';
import useChat from 'hooks/useChat';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Form from 'routes/Explore/Form';
import Bot from 'routes/Explore/Bot';
import Chat from 'routes/Explore/Chat';

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
        <Chat messages={messages} handleTyping={handleTyping} />
        <Form sendMessage={sendMessage} />
      </Content>
    </Transition>
  );
}
