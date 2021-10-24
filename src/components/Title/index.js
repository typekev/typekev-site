import React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  ${({
    theme: {
      palette: { background, primary },
    },
  }) => css`
    background-color: ${primary.dark} !important;
    border-color: ${primary.dark} !important;
    color: ${background.default} !important;
  `}

  text-align: left;
  display: flow-root !important;
  text-transform: initial !important;
`;

function Title({ ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <StyledButton
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      disabled
      variant="outlined"
      size="large"
    />
  );
}

export default withTheme(Title);
