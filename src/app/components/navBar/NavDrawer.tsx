/**
 *
 * NavDrawer
 *
 */
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  mdiAt,
  mdiAtom,
  mdiBookshelf,
  mdiChevronRight,
  mdiHandWaveOutline,
} from '@mdi/js';
import Icon from '@mdi/react';

import { RouterPath } from 'types';
import { scrollTo } from 'utils/scrollTo';
import { translations } from 'locales/translations';
import { SyntheticEvent } from 'react';

interface Props extends SwipeableDrawerProps {
  selected: RouterPath;
}

export const NavDrawer = ({ selected, onClose, ...rest }: Props) => {
  const { t } = useTranslation();

  const onClick = (path: RouterPath) => (e: SyntheticEvent) => {
    scrollTo(path);
    onClose(e);
  };

  return (
    <SwipeableDrawer anchor="right" onClose={onClose} {...rest}>
      <List>
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <Icon path={mdiChevronRight} size={1.125} />
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          selected={selected === RouterPath.about}
          component={NavLink}
          to={RouterPath.about}
          onClick={onClick(RouterPath.about)}
        >
          <ListItemIcon>
            <Icon path={mdiHandWaveOutline} size={1.125} />
          </ListItemIcon>
          <ListItemText primary={t(translations['About me'])} />
        </ListItem>
        <ListItem
          button
          selected={selected === RouterPath.work}
          component={NavLink}
          to={RouterPath.work}
          onClick={onClick(RouterPath.work)}
        >
          <ListItemIcon>
            <Icon path={mdiAtom} size={1.125} />
          </ListItemIcon>
          <ListItemText primary={t(translations.Work)} />
        </ListItem>
        <ListItem
          button
          selected={selected === RouterPath.blog}
          component={NavLink}
          to={RouterPath.blog}
          onClick={onClick(RouterPath.blog)}
        >
          <ListItemIcon>
            <Icon path={mdiBookshelf} size={1.125} />
          </ListItemIcon>
          <ListItemText primary={t(translations.Articles)} />
        </ListItem>
        <ListItem
          button
          selected={selected === RouterPath.contact}
          component={NavLink}
          to={RouterPath.contact}
          onClick={onClick(RouterPath.contact)}
        >
          <ListItemIcon>
            <Icon path={mdiAt} size={1.125} />
          </ListItemIcon>
          <ListItemText primary={t(translations.Contact)} />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};
