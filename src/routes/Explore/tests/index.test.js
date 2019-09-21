import React from 'react';
import ReactDOM from 'react-dom';
import Explore, { handleTyping, botIntroText } from 'routes/Explore';

describe('Explore route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Explore />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls type and returns messages if messages.length > 0 else returns botIntroText', () => {
    const messages = ['Test'];
    handleTyping(messages)({ type: (...args) => expect(...args).toBe(...messages) });
    handleTyping([])({ type: (...args) => expect(...args).toBe(...botIntroText) });
  });
});
