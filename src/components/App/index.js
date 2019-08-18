import React from 'react';
import styled from 'styled-components';
import MuiBox from '@material-ui/core/Box';
import Header from 'components/Header';
import Copyright from 'components/Copyright';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Box = styled(MuiBox)`
  flex: 1 1 auto;
`;

export default function App() {
  return (
    <Root>
      <Header />
      <Box>
        <div />
      </Box>
      <Copyright />
    </Root>
  );
}
