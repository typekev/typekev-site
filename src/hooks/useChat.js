import { useState } from 'react';
import { getDirectLineConversation, sendDirectLineMessage } from 'routes/Explore/api';

export const initialState = {};

export const getConversation = async setConversation => {
  try {
    const conversation = (await getDirectLineConversation()) || initialState;
    setConversation(conversation);
  } catch (err) {
    setConversation(initialState);
  }
};

export default function useChat(clearMessages) {
  const [{ conversationId, token, streamUrl }, setConversation] = useState(initialState);
  const startChat = () => getConversation(setConversation);
  const sendMessage = text =>
    typeof text === 'string' &&
    sendDirectLineMessage({ conversationId, token, text }, clearMessages());
  return [{ conversationId, token, streamUrl }, startChat, sendMessage];
}
