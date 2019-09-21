import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@mdi/react';
import {
  mdiDesktopClassic,
  mdiPostOutline,
  mdiRocket,
  mdiLighthouse,
  mdiMailboxUpOutline,
  mdiGithubFace,
} from '@mdi/js';
import { RouterLink } from 'components/Link';
import ExternalLink from 'components/Link/ExternalLink';

export const getLinks = (listItems, toggleDrawer) =>
  listItems.map(({ name, to, iconPath, component = RouterLink }) => {
    const path = to || `/${name.toLowerCase()}`;
    const selected = window.location.pathname === path;

    return (
      <ListItem
        button
        component={component}
        to={path}
        href={path}
        key={name}
        onClick={toggleDrawer}
        selected={selected}
      >
        <ListItemIcon>
          <Icon path={iconPath} size={1} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    );
  });

export default function Links({ toggleDrawer }) {
  return (
    <>
      <Divider />
      <List>
        {getLinks(
          [
            { name: 'Explore', to: '/', iconPath: mdiRocket },
            { name: 'Discover', iconPath: mdiLighthouse },
            { name: 'Work', iconPath: mdiDesktopClassic },
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
                to: 'https://github.com/typekev',
                component: ExternalLink,
                iconPath: mdiGithubFace,
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
  toggleDrawer: () => {},
};
