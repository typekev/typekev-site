import React from 'react';
import ReactDOM from 'react-dom';
import ProjectContent from 'routes/Projects/ProjectContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
