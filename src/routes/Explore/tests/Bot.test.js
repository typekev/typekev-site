import React from 'react';
import ReactDOM from 'react-dom';
import Bot, { setInitialSocket, debounceMessages, handleSetMessage } from 'routes/Explore/Bot';

const streamUrl = 'wss://directline.botframework.com';
const messagesRef = { current: ['Test'] };

describe('Bot component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bot startChat={() => {}} streamUrl={streamUrl} setMessages={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls setInitialSocket and sets a stream url if socket evaluates to false', () => {
    setInitialSocket(streamUrl, undefined, returnedStreamUrl =>
      expect(returnedStreamUrl).toBe(streamUrl),
    );
    expect(setInitialSocket(streamUrl, true, () => {})).toBe(false);
  });

  it('calls debounceMessages and returns false if messages.length < 1', () => {
    const messagesRefEmpty = { current: [] };
    expect(debounceMessages(messagesRefEmpty)).toBe(false);
    expect(() => debounceMessages(messagesRef)).not.toThrow();
  });

  it('calls handleSetMessage and triggers setMessages with messages, then clearMessages', () => {
    const clearMessages = jest.fn();
    handleSetMessage(
      messagesRef,
      returnedMessages => expect(returnedMessages).toBe(messagesRef.current),
      clearMessages,
    )();

    expect(clearMessages.mock.calls.length).toBe(1);
  });
});
