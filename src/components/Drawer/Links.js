import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@mdi/react';
import {
  mdiPostOutline,
  mdiRocket,
  mdiLighthouse,
  mdiMailboxUpOutline,
  mdiGithubFace,
} from '@mdi/js';
import { RouterLink } from 'components/Link';
import ExternalLink from 'components/Link/ExternalLink';
import devoteamLogoPath from 'components/DevoteamLogo/devoteamLogoPath';

export const getLinks = (listItems, toggleDrawer) =>
  listItems.map(({ name, href, iconPath, component = RouterLink, transform }) => {
    const path = name.toLowerCase();
    const to = `/${path}/`;
    const selected = window.location.pathname.split('/')[1] === path;

    return (
      <ListItem
        button
        key={name}
        component={component}
        to={to}
        href={href}
        onClick={toggleDrawer}
        selected={selected}
      >
        <ListItemIcon>
          <Icon path={iconPath} size={1} color="currentColor" transform={transform} />
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
            { name: 'Explore', iconPath: mdiLighthouse },
            { name: 'Discover', iconPath: mdiRocket },
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
  toggleDrawer: noop,
};
