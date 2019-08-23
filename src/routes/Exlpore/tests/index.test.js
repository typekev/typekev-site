import React from 'react';
import ReactDOM from 'react-dom';
import Exlpore from 'routes/Exlpore';

describe('Exlpore route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Exlpore />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
