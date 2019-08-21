import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Divider from '@material-ui/core/Divider';
import MuiDrawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import MuiButton from '@material-ui/core/Button';
import Icon from '@mdi/react';
import { mdiMenuOpen } from '@mdi/js';
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

const drawer = (
  <>
    <Divider />
  </>
);

export default function Drawer({ open, toggleDrawer }) {
  return (
    <nav aria-label="navigation">
      <Hidden smUp>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Spacer>
            <Button color="inherit" aria-label="open drawer" onClick={toggleDrawer} fullWidth>
              <Icon path={mdiMenuOpen} size={1.25} horizontal /> Close
            </Button>
          </Spacer>
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown>
        <MuiDrawer variant="persistent" anchor="right" open={open} onClose={toggleDrawer}>
          <Spacer />
          {drawer}
        </MuiDrawer>
      </Hidden>
      <Hidden mdDown>
        <MuiDrawer variant="permanent" anchor="right" open>
          <Spacer />
          {drawer}
        </MuiDrawer>
      </Hidden>
    </nav>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
