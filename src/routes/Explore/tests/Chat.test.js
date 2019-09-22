import React from 'react';
import ReactDOM from 'react-dom';
import Chat, { handleTyping, botIntroText } from 'routes/Explore/Chat';

describe('Chat component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat messages={[]} handleTyping={handleTyping} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('calls type and returns messages if messages.length > 0 else returns botIntroText', () => {
    const messages = ['Test'];
    handleTyping(messages)({ type: (...args) => expect(...args).toBe(...messages) });
    handleTyping([])({ type: (...args) => expect(...args).toBe(...botIntroText) });
  });
});
