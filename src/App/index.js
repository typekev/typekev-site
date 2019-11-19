import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from 'components/Header';
import Copyright from 'components/Copyright';
import Drawer from 'components/Drawer';
import Root from 'App/Root';
import useDrawer from 'hooks/useDrawer';
import Page from 'templates/Page';
import './index.css';

export const Explore = React.lazy(() => import('routes/Explore'));
export const Discover = React.lazy(() => import('routes/Discover'));
export const Work = React.lazy(() => import('routes/Work'));
export const Blog = React.lazy(() => import('routes/Blog'));
export const Contact = React.lazy(() => import('routes/Contact'));

export const Main = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

export default function App() {
  const [open, toggleDrawer] = useDrawer();

  return (
    <Router>
      <Drawer open={open} toggleDrawer={toggleDrawer} />
      <Root open={open}>
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Main>
          <Page open={open}>
            <Suspense fallback={<LinearProgress color="secondary" />}>
              <Switch>
                <Route exact path="/" component={Explore} />
                <Route path="/discover" component={Discover} />
                <Route path="/work" component={Work} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </Page>
        </Main>
        <Copyright />
      </Root>
    </Router>
  );
}
