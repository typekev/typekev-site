import React from 'react';
import ReactDOM from 'react-dom';
import SocialMediaButton from 'routes/Contact/SocialMediaButton';

describe('SocialMediaButton route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialMediaButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
