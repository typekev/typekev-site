import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Icon from '@mdi/react';
import { mdiMenu, mdiBackburger, mdiGithubFace } from '@mdi/js';
import Transition from 'components/Transition';
import Title from 'components/Title';
import HeaderText from 'components/Header/HeaderText';

export const getPath = open => (open ? mdiBackburger : mdiMenu);

export default function Header({ open, toggleDrawer }) {
  return (
    <Transition in component={Fade} delay={337} timeout={775}>
      <AppBar position="sticky" color="primary" elevation={2}>
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
              <HeaderText />
            </Title>
          </Hidden>
          <Hidden xsDown>
            <Title>
              <HeaderText />
            </Title>
          </Hidden>
          <Hidden xsDown>
            <Tooltip title="Contributions to open source" placement="left">
              <IconButton href="https://github.com/typekev" target="_blank">
                <Icon path={mdiGithubFace} size={1.125} />
              </IconButton>
            </Tooltip>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Transition>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
