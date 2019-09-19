import { useEffect, useRef } from 'react';
import useSocket from 'hooks/useSockets';
import debounce from 'lodash.debounce';

export const setInitialSocket = (streamUrl, socket, setSocket) =>
  streamUrl && !socket && setSocket(streamUrl);

export const handleSetMessage = (setMessages, messagesRef, clearMessages) => () => {
  setMessages(messagesRef.current);
  clearMessages();
};

export const debounceMessages = (messages, setMessages, messagesRef, clearMessages) =>
  messages.length > 0 &&
  debounce(handleSetMessage(setMessages, messagesRef, clearMessages), 3000)();

export default function Bot({ startChat, streamUrl, setMessages }) {
  const [socket, setSocket, messages, clearMessages] = useSocket();
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() => {
    startChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInitialSocket(streamUrl, socket, setSocket);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamUrl]);

  useEffect(() => {
    debounceMessages(messages, setMessages, messagesRef, clearMessages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  return null;
}
