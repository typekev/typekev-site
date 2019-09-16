import { useState, useEffect, useRef } from 'react';

const initialState = [];

const useSocket = () => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState(initialState);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  useEffect(() => {
    if (socket) {
      socket.addEventListener('message', ({ data }) =>
        setMessages([
          ...messagesRef.current,
          ...JSON.parse(data)
            .activities.filter(({ from: { id }, text }) => text && id === 'typekev-bot')
            .map(({ text }) => text),
        ]),
      );
    }
    return () => {
      if (socket) {
        socket.removeEventListener('message');
      }
    };
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
