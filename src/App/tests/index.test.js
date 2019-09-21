import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App, { Main, Explore, Discover, Work, Blog, Contact } from 'App';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Main component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Explore route without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Explore />
      </Suspense>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Discover route without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Discover />
      </Suspense>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Work route without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Work />
      </Suspense>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Blog route without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Blog />
      </Suspense>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Contact route without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
