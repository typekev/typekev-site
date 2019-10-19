import styled, { css } from 'styled-components';
import Box from '@material-ui/core/Box';
import theme from 'resources/theme';
import { drawerWidth } from 'resources/constants';

const Root = styled(Box)`
  display: flex;
  flex-direction: column;
  float: right;
  transition: width 225ms;
  min-height: 100vh;
  width: 100%;

  ${[theme.breakpoints.up('sm')]} {
    ${({ open }) =>
      open &&
      css`
        width: calc(100% - ${drawerWidth}px);
      `}
  }
`;

export default Root;