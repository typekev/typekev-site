import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { CookiesProvider } from 'react-cookie';

jest.mock('react-dom', () => ({ render: jest.fn() }));

it('renders without crashing', () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);

  // eslint-disable-next-line global-require
  require('./index.js');

  expect(ReactDOM.render).toHaveBeenCalledWith(
    <CookiesProvider>
      <App />
    </CookiesProvider>,
    div,
  );
});
