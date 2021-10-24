import React from 'react';
import ReactDOM from 'react-dom';
import noop from 'lodash.noop';
import Bot, { setInitialSocket, getIsDisabled } from 'routes/Explore/Bot';

const streamUrl = 'wss://directline.botframework.com';

describe('Bot component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bot startChat={noop} streamUrl={streamUrl} setMessages={noop} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls setInitialSocket and sets a stream url if socket evaluates to false', () => {
    setInitialSocket(streamUrl, undefined, returnedStreamUrl =>
      expect(returnedStreamUrl).toBe(streamUrl),
    );
    expect(setInitialSocket(streamUrl, true, noop)).toBe(false);
  });

  it('calls getIsDisabled and returns true if messagesLength === 0 or streamUrl is falsy', () => {
    expect(getIsDisabled(undefined, 0)).toBe(true);
    expect(getIsDisabled('stream url', 0)).toBe(true);
    expect(getIsDisabled(undefined, 10)).toBe(true);
    expect(getIsDisabled('stream url', 10)).toBe(false);
  });
});
