import React, { useEffect } from 'react';
import useSocket from 'hooks/useSocket';
import useChat from 'hooks/useChat';
import Chat from 'routes/Explore/Chat';
import Form from 'routes/Explore/Form';

export const setInitialSocket = (streamUrl, socket, setSocket) =>
  streamUrl && !socket && setSocket(streamUrl);

export const getIsDisabled = (streamUrl, messagesLength) => !streamUrl || messagesLength === 0;

export default function Bot() {
  const [socket, setSocket, messages, clearMessages, prompts] = useSocket();
  const [{ streamUrl }, startChat, sendMessage] = useChat(clearMessages);

  const disabled = getIsDisabled(streamUrl, messages.filter(Boolean).length);

  useEffect(() => {
    startChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInitialSocket(streamUrl, socket, setSocket);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamUrl]);

  return (
    <>
      <Chat messages={messages} disabled={disabled} />
      <Form prompts={prompts} sendMessage={sendMessage} disabled={disabled} />
    </>
  );
}
