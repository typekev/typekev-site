import { getDirectLineConversation, sendDirectLineMessage } from 'routes/Explore/api';

const response = {
  conversationId: 'conversationId',
  token: 'token',
  expires_in: 3600,
  streamUrl: 'streamUrl',
  referenceGrammarId: 'referenceGrammarId',
};

describe('Explore route APIs', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('gets a conversation and returns a response containing a token', () => {
    fetch.mockResponseOnce(JSON.stringify(response));

    getDirectLineConversation().then(res => {
      expect(res.token).toEqual(response.token);
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3978/directline/conversations');
  });

  it('sends a POST to the bot and returns a conversationId', () => {
    fetch.mockResponseOnce(JSON.stringify({ id: response.conversationId }));

    const text = 'Test';
    const baseUrl = 'https://directline.botframework.com/';

    sendDirectLineMessage({
      conversationId: response.conversationId,
      token: response.token,
      text,
    }).then(res => {
      expect(res.id).toEqual(response.conversationId);
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `${baseUrl}v3/directline/conversations/${response.conversationId}/activities`,
    );
    expect(fetch.mock.calls[0][1]).toEqual({
      method: 'POST',
      headers: {
        Authorization: `Bearer ${response.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'message',
        from: {
          id: 'typekev-site-user',
        },
        text,
      }),
    });
  });
});
