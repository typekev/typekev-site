import { useState, useEffect, useRef } from 'react';

export const initialState = [];

export const onMessageReceived = (messages, setMessages) => ({ data }) =>
  setMessages([
    ...messages,
    ...JSON.parse(data)
      .activities.filter(({ from: { id }, text }) => text && id === 'typekev-bot')
      .map(({ text }) => text),
  ]);

export const getListener = (socket, messages, setMessages) =>
  socket && socket.addEventListener('message', onMessageReceived(messages, setMessages));

export const clearListener = (socket, listener) => () =>
  socket && socket.removeEventListener('message', listener);

const useSocket = () => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState(initialState);
  const [listener, setListener] = useState(initialState);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() => {
    setListener(getListener(socket, messagesRef.current, setMessages));
    return clearListener(socket, listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return [
    socket,
    (...args) => setSocket(new WebSocket(...args)),
    messages,
    () => setMessages(initialState),
  ];
};

export default useSocket;
