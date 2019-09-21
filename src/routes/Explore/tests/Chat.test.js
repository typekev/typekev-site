import React from 'react';
import ReactDOM from 'react-dom';
import Chat from 'routes/Explore/Chat';

describe('Chat component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat messages={[]} handleTyping={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
