/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { useThemeMode } from 'hooks/useThemeMode';

export function App() {
  const { i18n } = useTranslation();
  const [themeMode] = useThemeMode();

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
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
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
