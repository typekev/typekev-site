import React from 'react';
import ReactDOM from 'react-dom';
import TypingIndicatorContainer from 'components/TypingIndicator/TypingIndicatorContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypingIndicatorContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
