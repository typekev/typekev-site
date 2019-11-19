import React from 'react';
import ReactDOM from 'react-dom';
import InvertedText from 'components/InvertedText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InvertedText />, div);
  ReactDOM.unmountComponentAtNode(div);
});
