import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import {
  Typography,
  Toolbar,
  IconButton,
  AppBar,
  Badge,
  Tooltip,
} from '@material-ui/core';
import { Bell, Menu, GithubCircle, Copyright } from 'mdi-material-ui';
import { SkeletonTheme } from 'react-loading-skeleton';

import logo from 'images/typekev-red-logo.svg';

import {
  accentColor,
  backgroundContrast,
  backgroundContrastLight,
} from 'static/Colors';
import CardExpander from './CardExpander';
import CardContainer from './CardContainer';
import BreathingCircle from './BreathingCircle';
import BreathingCircleAccent from './BreathingCircleAccent';
import Footer from './Footer';
import HeaderLogo from './HeaderLogo';

const styles = {
  flex: {
    paddingLeft: '1rem',
  },
  menuButton: {
    marginTop: '0.125rem',
    color: accentColor,
  },
  menu: {
    width: '1.75rem',
    height: '1.75rem',
  },
  copyright: {
    width: '1rem',
    height: '1rem',
  },
};

const year = new Date().getFullYear();

function Layout({ children, openNotif, openMenu, menuItemsList }) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            className="hide-for-large"
            color="inherit"
            aria-label="Menu"
            style={styles.menuButton}
            onClick={openMenu}
          >
            <Menu style={styles.menu} />
          </IconButton>
          <Typography
            className="flex"
            variant="title"
            component="h1"
            color="inherit"
            style={styles.flex}
            noWrap
          >
            <Link to="/">
              <span className="show-for-large">
                <HeaderLogo src={logo} alt="typekev logo" />
              </span>
              <span>typekev</span>
              <span className="show-for-medium font-weight-very-light">
                {' '}
                fullstack developer
              </span>
            </Link>
          </Typography>
          {menuItemsList}
          <Tooltip title="My open source work">
            <IconButton
              color="inherit"
              href="https://github.com/typekev"
              target="_blank"
            >
              <GithubCircle />
            </IconButton>
          </Tooltip>
          <IconButton
            color="inherit"
            onClick={() =>
              openNotif('contact', 'Need a React or Blockchain specialist?')
            }
          >
            <Badge
              badgeContent={<h2 className="font-weight-normal">!</h2>}
              color="error"
            >
              <Bell />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <CardContainer>
        <SkeletonTheme
          color={backgroundContrastLight}
          highlightColor={backgroundContrast}
        >
          <CardExpander>{children}</CardExpander>
        </SkeletonTheme>
        <BreathingCircle />
        <BreathingCircleAccent />
      </CardContainer>
      <Footer position="absolute">
        <Toolbar>
          <div className="flex" />
          <Typography component="h3" color="inherit">
            <span className="font-weight-light">
              <Copyright style={styles.copyright} /> typekev {year}
            </span>
          </Typography>
        </Toolbar>
      </Footer>
    </div>
  );
}

export default withRouter(Layout);
