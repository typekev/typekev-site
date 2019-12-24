import styled, { css } from 'styled-components';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import Box from '@material-ui/core/Box';
import { DRAWER_WIDTH } from 'resources/constants';

const Root = styled(Box)`
  display: flex;
  flex-direction: column;
  float: right;
  transition: width 225ms;
  min-height: 100vh;
  width: 100%;

  ${[defaultTheme.breakpoints.up('sm')]} {
    ${({ open }) =>
      open &&
      css`
        width: calc(100% - ${DRAWER_WIDTH}px);
      `}
  }

  ${[defaultTheme.breakpoints.up('lg')]} {
    width: calc(100% - ${DRAWER_WIDTH}px);
  }
`;

export default Root;
