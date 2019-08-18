import React from 'react';
import ReactDOM from 'react-dom';
import Copyright from "components/Copyright";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Copyright />, div);
  ReactDOM.unmountComponentAtNode(div);
});
