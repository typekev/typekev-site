import { useEffect, useRef } from 'react';
import useSocket from 'hooks/useSocket';
import debounce from 'lodash.debounce';

export const setInitialSocket = (streamUrl, socket, setSocket) =>
  streamUrl && !socket && setSocket(streamUrl);

export const handleSetMessage = (messagesRef, setMessages, clearMessages) => () => {
  setMessages(messagesRef.current);
  clearMessages();
};

export const debounceMessages = (messagesRef, setMessages, clearMessages) =>
  messagesRef.current.length > 0 &&
  debounce(handleSetMessage(messagesRef, setMessages, clearMessages), 1500)();

export default function Bot({ startChat, streamUrl, setMessages }) {
  const [socket, setSocket, messages, clearMessages] = useSocket();
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  // console.log(messages)

  useEffect(() => {
    startChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInitialSocket(streamUrl, socket, setSocket);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamUrl]);

  useEffect(() => {
    debounceMessages(messagesRef, setMessages, clearMessages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  return null;
}
