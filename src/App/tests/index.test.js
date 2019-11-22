import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App, { togglePrefersColorScheme, Main, Explore, Discover, Work, Blog, Contact } from 'App';
import { TYPEKEV_SITE_PREFERS_COLOR_SCHEME, COLOR_SCHEME_CODE_MAP } from 'resources/constants';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls setCookie with passed preferences and toggles the color scheme', () => {
    const setCookie = jest.fn();
    togglePrefersColorScheme(COLOR_SCHEME_CODE_MAP.DARK, setCookie)();

    expect(setCookie.mock.calls.length).toBe(1);
    expect(setCookie.mock.calls[0][0]).toEqual(TYPEKEV_SITE_PREFERS_COLOR_SCHEME);
    expect(setCookie.mock.calls[0][1]).toEqual(COLOR_SCHEME_CODE_MAP.LIGHT);
    expect(setCookie.mock.calls[0][2].path).toEqual('/');
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
