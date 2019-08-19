import React from 'react';
import styled from 'styled-components';
import MuiBox from '@material-ui/core/Box';
import Header from 'components/Header';
import Copyright from 'components/Copyright';
import Drawer from 'components/Drawer';
import useDrawer from '../../hooks/useDrawer';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Box = styled(MuiBox)`
  flex: 1 1 auto;
`;

export default function App() {
  const [open, toggleDrawer] = useDrawer();

  return (
    <>
      <Root>
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Box>
          <div />
        </Box>
        <Copyright />
      </Root>
      <Drawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
