import { useEffect, useRef } from 'react';
import useSocket from 'hooks/useSockets';
import debounce from 'lodash.debounce';

export default function Bot({ startChat, streamUrl, setMessages }) {
  const [socket, setSocket, messages, clearMessages] = useSocket();
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() => {
    startChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (streamUrl && !socket) {
      setSocket(streamUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamUrl]);

  useEffect(() => {
    if (messages.length > 0) {
      debounce(() => {
        setMessages(messagesRef.current);
        clearMessages();
      }, 3000)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  return null;
}
