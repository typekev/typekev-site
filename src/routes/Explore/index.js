import React, { useState } from 'react';
import Grow from '@material-ui/core/Grow';
import useChat from 'hooks/useChat';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Form from 'routes/Explore/Form';
import Bot from 'routes/Explore/Bot';
import Chat from 'routes/Explore/Chat';

export default function Explore() {
  const [{ streamUrl }, startChat, sendMessage] = useChat();
  const [messages, setMessages] = useState([]);

  const disabled = !streamUrl;

  return (
    <Transition in component={Grow}>
      <Content align="center" maxWidth="md">
        <Bot startChat={startChat} streamUrl={streamUrl} setMessages={setMessages} />
        <Chat messages={messages} />
        <Form sendMessage={sendMessage} disabled={disabled} />
      </Content>
    </Transition>
  );
}
