import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from 'components/Header';
import Copyright from 'components/Copyright';
import Drawer from 'components/Drawer';
import Root from 'App/Root';
import useDrawer from 'hooks/useDrawer';
import Page from 'templates/Page';

export const Exlpore = React.lazy(() => import('routes/Exlpore'));
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
          <Page>
            <Suspense fallback={<LinearProgress color="secondary" />}>
              <Route exact path="/" component={Exlpore} />
              <Route exact path="/discover" component={Discover} />
              <Route path="/work" component={Work} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Suspense>
          </Page>
        </Main>
        <Copyright />
      </Root>
    </Router>
  );
}
