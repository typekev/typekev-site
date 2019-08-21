import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@mdi/react';
import { mdiMenu, mdiMenuOpen } from '@mdi/js';
import Title from 'components/Title';

export const getPath = open => (open ? mdiMenuOpen : mdiMenu);

export default function Header({ open, toggleDrawer }) {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Title variant="h6" color="inherit">
          <strong>typekev</strong> | Software Engineer
        </Title>
        <Hidden xsDown lgUp>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer}>
            <Icon path={getPath(open)} size={1} horizontal />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
