import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/Header';
import Copyright from 'components/Copyright';
import Drawer from 'components/Drawer';
import Root from 'App/Root';
import useDrawer from 'hooks/useDrawer';

export const Home = React.lazy(() => import('routes/Home'));
export const About = React.lazy(() => import('routes/About'));
export const Work = React.lazy(() => import('routes/Work'));
export const Blog = React.lazy(() => import('routes/Blog'));
export const Contact = React.lazy(() => import('routes/Contact'));

export const Main = styled.div`
  flex: 1 1 auto;
`;

export default function App() {
  const [open, toggleDrawer] = useDrawer();

  return (
    <Router>
      <Drawer open={open} toggleDrawer={toggleDrawer} />
      <Root open={open}>
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Suspense>
        </Main>
        <Copyright />
      </Root>
    </Router>
  );
}
