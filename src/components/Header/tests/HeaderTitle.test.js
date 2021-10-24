import React from 'react';
import ReactDOM from 'react-dom';
import HeaderTitle from 'components/Header/HeaderTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
