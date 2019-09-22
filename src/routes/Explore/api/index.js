import request from 'utils/request';

const { REACT_APP_BOT_ORIGIN } = process.env;

export const getDirectLineConversation = () =>
  request(`${REACT_APP_BOT_ORIGIN}/directline/conversations`, { method: 'POST' });

export const sendDirectLineMessage = ({ conversationId, token, text, type = 'message' }) =>
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
  );

export default { getDirectLineConversation };
