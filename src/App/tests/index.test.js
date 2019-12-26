import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App, {
  togglePrefersColorScheme,
  normalizePath,
  getHelmet,
  Main,
  Explore,
  Discover,
  Work,
  Blog,
  Contact,
} from 'App';
import { TYPEKEV_SITE_PREFERS_COLOR_SCHEME, COLOR_SCHEME_CODE_MAP } from 'resources/constants';

const hash = '#/work';

describe('App component', () => {
  it('renders without crashing', () => {
    window.location.hash = hash;
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
    togglePrefersColorScheme(COLOR_SCHEME_CODE_MAP.LIGHT, setCookie)();
    expect(setCookie.mock.calls.length).toBe(2);
    expect(setCookie.mock.calls[1][0]).toEqual(TYPEKEV_SITE_PREFERS_COLOR_SCHEME);
    expect(setCookie.mock.calls[1][1]).toEqual(COLOR_SCHEME_CODE_MAP.DARK);
    expect(setCookie.mock.calls[1][2].path).toEqual('/');
  });

  it('normalizes a hashed path to a proper route', () => {
    const path = normalizePath(hash);

    expect(path).toEqual(hash.slice(1));
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
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Work />
        </Suspense>
      </Router>,
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

  it('renders a Helmet with a light theme', () => {
    const div = document.createElement('div');
    ReactDOM.render(<div>{getHelmet(false)}</div>, div);
  });

  it('renders a Helmet with a dark theme', () => {
    const div = document.createElement('div');
    ReactDOM.render(<div>{getHelmet(true)}</div>, div);
  });
});
