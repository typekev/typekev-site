import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from 'App';
import theme from 'resources/theme';

jest.mock('react-dom', () => ({ render: jest.fn() }));

it('renders without crashing', () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);

  // eslint-disable-next-line global-require
  require('./index.js');

  expect(ReactDOM.render).toHaveBeenCalledWith(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
    div,
  );
});
