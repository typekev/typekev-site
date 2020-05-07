import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@mdi/react';
import {
  mdiPostOutline,
  mdiRocket,
  mdiLighthouse,
  mdiMailboxUpOutline,
  mdiGithub,
  mdiGamepadVariant,
} from '@mdi/js';
import { RouterLink } from 'components/Link';
import devoteamLogoPath from 'components/DevoteamLogo/devoteamLogoPath';
import { Tooltip } from '@material-ui/core';

export const getCurrentPath = currentPath => (currentPath === '' ? 'explore' : currentPath);

export const getLinks = (listItems, toggleDrawer) =>
  listItems.map(
    ({ name, href, iconPath, secondaryAction, transform, component = RouterLink, target }) => {
      const path = name.toLowerCase();
      const to = `/${path}/`;
      const currentPath = getCurrentPath(window.location.pathname.split('/')[1]);
      const selected = currentPath === path;

      return (
        <ListItem
          button
          key={name}
          component={component}
          to={to}
          href={href}
          onClick={toggleDrawer}
          selected={selected}
          target={target}
        >
          <ListItemIcon>
            <Icon path={iconPath} size={1} color="currentColor" transform={transform} />
          </ListItemIcon>
          <ListItemText primary={name} />
          {secondaryAction && <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>}
        </ListItem>
      );
    },
  );

export default function Links({ toggleDrawer }) {
  return (
    <>
      <Divider />
      <List>
        {getLinks(
          [
            { name: 'Explore', iconPath: mdiLighthouse },
            {
              name: 'Discover',
              iconPath: mdiRocket,
              secondaryAction: (
                <RouterLink to="/discover/projects/" onClick={toggleDrawer}>
                  <Tooltip arrow title="Discover projects" placement="top">
                    <IconButton edge="end">
                      <Icon path={mdiGamepadVariant} size={1} color="currentColor" />
                    </IconButton>
                  </Tooltip>
                </RouterLink>
              ),
            },
            { name: 'Work', iconPath: devoteamLogoPath, transform: 'translate(2, 2)' },
            { name: 'Blog', iconPath: mdiPostOutline },
          ],
          toggleDrawer,
        )}
        <Divider />
        {getLinks([{ name: 'Contact', iconPath: mdiMailboxUpOutline }], toggleDrawer)}
        <Hidden smUp>
          <Divider />
          {getLinks(
            [
              {
                name: 'Contributions to OS',
                href: 'https://github.com/typekev',
                component: 'a',
                target: '_blank',
                iconPath: mdiGithub,
              },
            ],
            toggleDrawer,
          )}
        </Hidden>
      </List>
    </>
  );
}

Links.propTypes = {
  toggleDrawer: PropTypes.func,
};

Links.defaultProps = {
  toggleDrawer: noop,
};
