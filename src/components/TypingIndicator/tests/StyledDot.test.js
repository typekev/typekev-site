import React from 'react';
import ReactDOM from 'react-dom';
import StyledDot from 'components/TypingIndicator/StyledDot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StyledDot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
