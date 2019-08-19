import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@mdi/react';
import { mdiMenu, mdiMenuOpen } from '@mdi/js';

const Title = styled(Typography)`
  flex: 1 1 auto;
  white-space: pre;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default function Header({ open, toggleDrawer }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Title variant="h6" color="inherit">
          <strong>typekev</strong> | Software Engineer
        </Title>
        <Hidden xsDown>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer}>
            <Icon path={open ? mdiMenuOpen : mdiMenu} size={1} horizontal />
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
