import { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { TYPEKEV_SITE_PREV_WELCOMED } from 'resources/constants';

export const sampleQuestions = ['Who is Kevin?', 'What does Kevin do?', 'Where does Kevin work?'];

export const getSampleQuestion = () =>
  sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];

export const initialState = [
  2000,
  'Welcome, visitor.',
  "I'm Kevin's autonomous assistant.",
  `Ask me something like '${getSampleQuestion()}'`,
];

export const returnedVisitorWelcome = [2000, 'Welcome back, visitor.'];

export const onMessageReceived = (messagesRef, setMessages, setPrompts) => ({ data }) => {
  const { activities } = JSON.parse(data);
  const messageActivities = activities.filter(
    ({ from: { id }, text }) => text && id === 'typekev-bot',
  );

  if (!messageActivities.length) {
    return;
  }

  const prompts = messageActivities
    .filter(({ suggestedActions }) => suggestedActions)
    .reduce(
      (accumulatedPrompts, { suggestedActions }) => [
        ...accumulatedPrompts,
        ...suggestedActions.actions.map(({ title }) => title),
      ],
      [],
    );

  const messages = [...messagesRef.current, ...messageActivities.map(({ text }) => text)];
  setMessages(messages);
  setPrompts(prompts);
};

export const getListener = (socket, messagesRef, setMessages, setPrompts) =>
  socket &&
  socket.addEventListener('message', onMessageReceived(messagesRef, setMessages, setPrompts));

export const clearListener = (socket, listener) => () =>
  socket && socket.removeEventListener('message', listener);

const useSocket = () => {
  const [cookies, setCookie] = useCookies([TYPEKEV_SITE_PREV_WELCOMED]);
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState(
    cookies[TYPEKEV_SITE_PREV_WELCOMED] ? returnedVisitorWelcome : initialState,
  );
  const [prompts, setPrompts] = useState([]);

  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() =>
    setCookie(
      TYPEKEV_SITE_PREV_WELCOMED,
      ['/', '/explore/'].includes(window.location.pathname) ? 'true' : '',
      {
        path: '/',
      },
    ),
  );

  useEffect(() => {
    const listener = getListener(socket, messagesRef, setMessages, setPrompts);
    return clearListener(socket, listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return [
    socket,
    (...args) => setSocket(new WebSocket(...args)),
    messagesRef.current,
    () => setMessages(['']),
    prompts,
  ];
};

export default useSocket;
