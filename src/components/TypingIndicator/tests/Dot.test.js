import React from 'react';
import ReactDOM from 'react-dom';
import Dot from 'components/TypingIndicator/Dot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
