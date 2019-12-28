import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import noop from 'lodash.noop';
import Links, { getLinks } from 'components/Drawer/Links';

describe('Links component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Links toggleDrawer={noop} />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing even when toggleDrawer is not passed', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Links />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('returns undefined', () => {
    const result = Links.defaultProps.toggleDrawer();
    expect(result).toBe(undefined);
  });

  it('returns an array containing a single ListItem that that points to contact page', () => {
    const TestList = getLinks([{ name: 'Contact', iconPath: '' }], noop);
    expect(TestList.length).toBe(1);
    const TestListItem = shallow(TestList[0]);
    expect(TestListItem.props().to).toBe('/contact/');
  });

  it('returns an array containing a single ListItem that that points to explore page', () => {
    const TestList = getLinks([{ name: 'Explore', iconPath: '' }], noop);
    expect(TestList.length).toBe(1);
    const TestListItem = shallow(TestList[0]);
    expect(TestListItem.props().to).toBe('/explore/');
  });
});
