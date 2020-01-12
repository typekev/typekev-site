import request, { logError } from 'utils/request';

const { REACT_APP_BOT_ORIGIN } = process.env;

export const getDirectLineConversation = token =>
  request(`${REACT_APP_BOT_ORIGIN}directline/conversations`, {
    method: 'POST',
    body: JSON.stringify({ token }),
  }).catch(logError);

export const connectToDirectLineConversation = (
  text,
  sendDirectLineMessage,
  setConversation,
) => () =>
  getDirectLineConversation()
    .then(({ conversationId, token, ...rest }) => {
      sendDirectLineMessage({ conversationId, token, text });
      return { conversationId, token, ...rest };
    })
    .then(setConversation);

export const sendDirectLineMessage = (
  { conversationId, token, text, type = 'message' },
  setConversation,
) =>
  request(
    `https://directline.botframework.com/v3/directline/conversations/${conversationId}/activities`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        from: {
          id: 'typekev-site-user',
        },
        text,
      }),
    },
  ).catch(connectToDirectLineConversation(text, sendDirectLineMessage, setConversation));

export default { getDirectLineConversation };
