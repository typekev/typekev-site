import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from 'templates/Page';

describe('Page template', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Page>Test</Page>
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
