import React from 'react';
import ReactDOM from 'react-dom';
import Chat, {
  handleTyping,
  defaultSentenceDelayRange,
  minSentenceVisibilityDurationRange,
  getSentenceDelayRange,
  getShouldDisplayChat,
} from 'routes/Explore/Chat';
import { initialState } from 'hooks/useSocket';

describe('Chat component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat messages={[]} handleTyping={handleTyping} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls type and returns messages if messages.length > 0 else returns botIntroText', () => {
    const messages = ['Test'];
    handleTyping(messages)({ type: (...args) => expect(...args).toEqual(...messages) });
    handleTyping([])({
      type: (...args) => expect(...args).toEqual(...initialState.filter(Number.isNaN)),
    });
  });

  it('returns defaultSentenceDelayRange or a calculated range based on messageLength', () => {
    const longSentenceDelayRange = getSentenceDelayRange(100);
    expect(longSentenceDelayRange).toEqual(defaultSentenceDelayRange);
    const shortSentenceDelayRange = getSentenceDelayRange(1);
    expect(shortSentenceDelayRange).toEqual(
      minSentenceVisibilityDurationRange.map(time => time / 1),
    );
  });

  it('returns true if shouldDisplayChat or displayingInitialMessage are truthy', () => {
    const shouldNotDisplayChat = getShouldDisplayChat(false, false);
    expect(shouldNotDisplayChat).toBe(false);
    const shouldDisplayChat = getShouldDisplayChat(true, false);
    expect(shouldDisplayChat).toBe(true);
  });
});
