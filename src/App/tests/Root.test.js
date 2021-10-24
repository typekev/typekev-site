import 'jest-styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Root from 'App/Root';
import { DRAWER_WIDTH } from 'resources/constants';

describe('Root component', () => {
  it('renders a Root component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Root component with a reduced width based on the drawer width', () => {
    const wrapper = mount(<Root open />);
    expect(wrapper).toHaveStyleRule('width', `calc(100% - ${DRAWER_WIDTH}px)`, {
      media: '(min-width:600px)',
    });
  });
});
