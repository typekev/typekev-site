import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@mdi/react';
import { mdiMenu, mdiBackburger } from '@mdi/js';
import Title from 'components/Title';

export const getPath = open => (open ? mdiBackburger : mdiMenu);

export default function Header({ open, toggleDrawer }) {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open navigation drawer"
            onClick={toggleDrawer}
          >
            <Hidden smUp>
              <Icon path={getPath(open)} size={1} />
            </Hidden>
            <Hidden xsDown>
              <Icon path={getPath(open)} size={1.125} />
            </Hidden>
          </IconButton>
        </Hidden>
        <Hidden smUp>
          <Title variant="h6">
            <strong>typekev</strong> | software engineer
          </Title>
        </Hidden>
        <Hidden xsDown>
          <Title>
            <strong>typekev</strong> | software engineer
          </Title>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
