/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { useContext, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components/macro';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';

import { RouterPath } from 'types';
import { ThemeModeContext } from 'contexts/ThemeModeContext';
import { GlobalStyle, GlobalStyleProperties } from 'styles/global-styles';
import { getMuiTheme } from 'styles/theme';

import { Sections } from './Sections';

export function App() {
  const { i18n } = useTranslation();
  const { themeMode } = useContext(ThemeModeContext);
  const muiTheme = useMemo(() => getMuiTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <MuiThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <Helmet
            titleTemplate="Kevin Gonzalez — %s"
            defaultTitle="Software Engineer"
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta
              name="description"
              content="The personal website of Kevin Gonzalez"
            />
          </Helmet>

          <Switch>
            <Route
              exact
              path={`/:section(${Object.values(RouterPath).join('|')})?`}
              component={Sections}
            />
            <Redirect to={RouterPath.about} />
          </Switch>
          <GlobalStyle />
        </BrowserRouter>
      </MuiThemeProvider>
      <GlobalStyleProperties />
    </ThemeProvider>
  );
}
