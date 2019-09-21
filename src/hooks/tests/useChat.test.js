import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import useChat, { getConversation, initialState } from 'hooks/useChat';

const HookWrapper = ({ hook }) => <div hook={hook()} />;

HookWrapper.propTypes = {
  hook: PropTypes.func.isRequired,
};

const getProps = wrapper => wrapper.find('div').props();

describe('useChat hook', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns undefined conversationId, token, and streamUrl by default', () => {
    const wrapper = shallow(<HookWrapper hook={useChat} />);

    const {
      hook: [{ conversationId, token, streamUrl }, startChat, sendMessage],
    } = getProps(wrapper);

    expect(conversationId).toBe(undefined);
    expect(token).toBe(undefined);
    expect(streamUrl).toBe(undefined);
    expect(typeof startChat).toBe('function');
    expect(typeof sendMessage).toBe('function');
  });

  it('calls sendMessage and triggers a fetch when message is a string else returns false', () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    const wrapper = shallow(<HookWrapper hook={useChat} />);

    const {
      hook: [, , sendMessage],
    } = getProps(wrapper);

    const message = 'Test';
    expect(sendMessage(null)).toBe(false);
    expect(fetch.mock.calls.length).toBe(0);
    sendMessage(message);
    expect(fetch.mock.calls.length).toBe(1);
  });

  it('calls getConversation and returns null', () => {
    getConversation(conversation => expect(conversation).toBe(initialState));
  });
});
