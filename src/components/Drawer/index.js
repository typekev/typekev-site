import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '@material-ui/core/styles/defaultTheme';
import MuiDrawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import MuiButton from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Transition from 'components/Transition';
import Links from 'components/Drawer/Links';

const breakpointHeight = css`
  height: 4rem;

  ${defaultTheme.breakpoints.down('xs')} {
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

function Drawer({ open, toggleDrawer }) {
  const drawerContent = (
    <>
      <Spacer />
      <Links />
    </>
  );
  return (
    <Transition in component={Fade} timeout={550}>
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
            <Spacer />
            <Links toggleDrawer={toggleDrawer} />
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown>
          <MuiDrawer variant="persistent" open={open}>
            {drawerContent}
          </MuiDrawer>
        </Hidden>
        <Hidden mdDown>
          <MuiDrawer variant="permanent">{drawerContent}</MuiDrawer>
        </Hidden>
      </nav>
    </Transition>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default withRouter(Drawer);
