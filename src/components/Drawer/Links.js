import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@mdi/react';
import {
  mdiDesktopClassic,
  mdiPostOutline,
  mdiRocket,
  mdiLighthouse,
  mdiMailboxUpOutline,
} from '@mdi/js';

const getLinks = (listItems, toggleDrawer) =>
  listItems.map(({ name, to, iconPath }) => {
    const path = to || `/${name.toLowerCase()}`;
    return (
      <ListItem
        button
        component={Link}
        color="inherit"
        to={path}
        key={name}
        onClick={toggleDrawer}
        selected={window.location.pathname === path}
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
            { name: 'Exlpore', to: '/', iconPath: mdiRocket },
            { name: 'Discover', iconPath: mdiLighthouse },
            { name: 'Work', iconPath: mdiDesktopClassic },
            { name: 'Blog', iconPath: mdiPostOutline },
          ],
          toggleDrawer,
        )}
        <Divider />
        {getLinks([{ name: 'Contact', iconPath: mdiMailboxUpOutline }], toggleDrawer)}
      </List>
    </>
  );
}

Links.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
