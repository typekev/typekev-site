import React from "react";
import Copyright from "components/Copyright";
import MuiBox from "@material-ui/core/Box";
import styled from "styled-components";

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
      <Box>
        <div />
      </Box>
      <Copyright />
    </Root>
  );
}
