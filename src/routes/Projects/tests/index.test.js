import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';
import Projects from 'routes/Projects';

const push = jest.fn();

describe('Projects route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Projects history={{ push }} match={{ params: { projectId: 'test-project' } }} />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Projects history={{ push }} match={{ params: {} }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('triggers a onClick event that pushes to history', () => {
    const wrapper = shallow(
      <Projects history={{ push }} match={{ params: { projectId: 'test-project' } }} />,
    );
    const button = wrapper.find(Button).at(1);
    button.props().onClick();
    expect(push.mock.calls.length).toEqual(1);
  });
});
