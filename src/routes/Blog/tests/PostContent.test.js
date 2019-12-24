import React from 'react';
import ReactDOM from 'react-dom';
import PostContent from 'routes/Blog/PostContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
