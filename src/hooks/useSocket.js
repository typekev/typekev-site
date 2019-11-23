import { useState, useEffect, useRef } from 'react';

export const sampleQuestions = ['Who is Kevin?', 'What does Kevin do?', 'Where does Kevin work?'];

export const getSampleQuestion = () =>
  sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];

export const initialState = [
  1000,
  'Welcome, visitor',
  "I'm Kevin's autonomous assistant.",
  `Ask me something like '${getSampleQuestion()}`,
];

export const onMessageReceived = (messagesRef, setMessages) => ({ data }) =>
  setMessages([
    ...messagesRef.current,
    ...JSON.parse(data)
      .activities.filter(({ from: { id }, text }) => text && id === 'typekev-bot')
      .map(({ text }) => text),
  ]);

export const getListener = (socket, messagesRef, setMessages) =>
  socket && socket.addEventListener('message', onMessageReceived(messagesRef, setMessages));

export const clearListener = (socket, listener) => () =>
  socket && socket.removeEventListener('message', listener);

const useSocket = () => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState(initialState);

  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() => {
    const listener = getListener(socket, messagesRef, setMessages);
    return clearListener(socket, listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return [
    socket,
    (...args) => setSocket(new WebSocket(...args)),
    messagesRef.current,
    () => setMessages(['']),
  ];
};

export default useSocket;
