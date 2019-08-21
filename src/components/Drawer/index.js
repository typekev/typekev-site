import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import MuiDrawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import MuiButton from '@material-ui/core/Button';
import Links from 'components/Drawer/Links';
import theme from 'resources/theme';

const breakpointHeight = css`
  height: 4rem;

  ${theme.breakpoints.down('xs')} {
    height: 3.5rem;
  }
`;

export const Spacer = styled.div`
  ${breakpointHeight}
`;

export const Button = styled(MuiButton)`
  padding: 0 5.5rem 0 2rem !important;
  justify-content: space-between !important;
  ${breakpointHeight}
`;

export default function Drawer({ open, toggleDrawer }) {
  const drawerContent = (
    <>
      <Spacer />
      <Links toggleDrawer={toggleDrawer} />
    </>
  );
  return (
    <nav aria-label="navigation">
      <Hidden smUp>
        <SwipeableDrawer
          open={open}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown>
        <MuiDrawer variant="persistent" open={open} onClose={toggleDrawer}>
          {drawerContent}
        </MuiDrawer>
      </Hidden>
      <Hidden mdDown>
        <MuiDrawer variant="permanent" open>
          {drawerContent}
        </MuiDrawer>
      </Hidden>
    </nav>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
