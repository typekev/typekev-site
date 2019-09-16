import { useState } from 'react';
import { getDirectLineConversation, sendDirectLineMessage } from 'routes/Explore/api';

const getConversation = async setConversation => {
  try {
    const conversation = await getDirectLineConversation();
    setConversation(conversation);
  } catch (err) {
    setConversation(null);
  }
};

export default function useChat() {
  const [{ conversationId, token, streamUrl }, setConversation] = useState({});
  const startChat = () => getConversation(setConversation);
  const sendMessage = text => text && sendDirectLineMessage({ conversationId, token, text });
  return [{ conversationId, token, streamUrl }, startChat, sendMessage];
}
