import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'components/Transition';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Transition component="div">Test</Transition>, div);
  ReactDOM.unmountComponentAtNode(div);
});
