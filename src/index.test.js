import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from 'components/App';
import theme from 'resources/theme';

jest.mock('react-dom', () => ({ render: jest.fn() }));

it('should render without crashing', () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);

  // eslint-disable-next-line global-require
  require('./index.js');

  expect(ReactDOM.render).toHaveBeenCalledWith(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    div,
  );
});
