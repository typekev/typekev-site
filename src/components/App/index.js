import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Copyright from 'components/Copyright';
import Drawer from 'components/Drawer';
import Root from 'components/App/Root';
import useDrawer from 'hooks/useDrawer';

export const Main = styled.div`
  flex: 1 1 auto;
`;

export default function App() {
  const [open, toggleDrawer] = useDrawer();

  return (
    <>
      <Root open={open}>
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Main>
          <div />
        </Main>
        <Copyright />
      </Root>
      <Drawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
