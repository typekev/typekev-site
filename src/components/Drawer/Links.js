import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@mdi/react';
import { mdiInformationVariant, mdiDesktopClassic, mdiPostOutline, mdiAt } from '@mdi/js';
import { Link } from '@material-ui/core';

export default function Links({ toggleDrawer }) {
  const getLinks = listItems =>
    listItems.map(({ name, iconPath }) => (
      <Link color="inherit" href="/#/" key={name} onClick={toggleDrawer}>
        <ListItem button>
          <ListItemIcon>
            <Icon path={iconPath} size={1} />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      </Link>
    ));
  return (
    <>
      <Divider />
      <List>
        {getLinks([{ name: 'About', iconPath: mdiInformationVariant }])}
        {getLinks([{ name: 'Work', iconPath: mdiDesktopClassic }])}
        {getLinks([{ name: 'Blog', iconPath: mdiPostOutline }])}
        <Divider />
        {getLinks([{ name: 'Contact', iconPath: mdiAt }])}
      </List>
    </>
  );
}

Links.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
