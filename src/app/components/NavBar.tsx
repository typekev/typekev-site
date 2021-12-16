/**
 *
 * NavBar
 *
 */
import { memo, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Icon from '@mdi/react';
import {
  mdiArrowDown,
  mdiAt,
  mdiAtom,
  mdiBookshelf,
  mdiHandWaveOutline,
  mdiMenu,
} from '@mdi/js';

import { RouterPath } from 'types';
import { scrollTo } from 'utils/scrollTo';
import { translations } from 'locales/translations';
import { media } from 'styles/media';

import { ThemeModeToggle } from './themeModeToggle/Loadable';
import { NavDrawer } from './navBar/Loadable';

const NEXT_SECTION: Record<RouterPath, RouterPath> = {
  [RouterPath.about]: RouterPath.work,
  [RouterPath.work]: RouterPath.blog,
  [RouterPath.blog]: RouterPath.contact,
  [RouterPath.contact]: RouterPath.about,
};

export const NavBar = memo(() => {
  const { section = RouterPath.about } = useParams<{ section?: RouterPath }>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useTranslation();

  const hasLeftStart = section !== RouterPath.about;
  const hasReachedEnd = section === RouterPath.contact;
  const arrowTitle = hasReachedEnd
    ? t(translations['Back to top'])
    : t(translations.Continue);

  const onCloseDrawer = () => setDrawerOpen(false);
  const onOpenDrawer = () => setDrawerOpen(true);

  return (
    <Bar retract={hasLeftStart}>
      <IconButton
        color="inherit"
        onClick={onOpenDrawer}
        sx={{ display: { md: 'none' } }}
      >
        <Icon path={mdiMenu} />
      </IconButton>
      <NavDrawer
        open={drawerOpen}
        onOpen={onOpenDrawer}
        onClose={onCloseDrawer}
        sx={{ display: { md: 'none' } }}
        selected={section}
      />
      <Tabs orientation="vertical" value={section}>
        <ThemeModeToggle />
        <Tab
          sx={{ display: { xs: 'none', md: 'block' } }}
          value={RouterPath.about}
          component={NavLink}
          icon={
            <Tooltip
              title={t(translations['About me']) as string}
              placement="right"
              arrow
            >
              <Icon path={mdiHandWaveOutline} color="inherit" />
            </Tooltip>
          }
          to={RouterPath.about}
          onClick={() => scrollTo(RouterPath.about)}
          aria-label={RouterPath.about}
        />
        <Tab
          sx={{ display: { xs: 'none', md: 'block' } }}
          value={RouterPath.work}
          component={NavLink}
          icon={
            <Tooltip
              title={t(translations.Work) as string}
              placement="right"
              arrow
            >
              <Icon path={mdiAtom} color="inherit" />
            </Tooltip>
          }
          to={RouterPath.work}
          onClick={() => scrollTo(RouterPath.work)}
          aria-label={RouterPath.work}
        />
        <Tab
          sx={{ display: { xs: 'none', md: 'block' } }}
          value={RouterPath.blog}
          component={NavLink}
          icon={
            <Tooltip
              title={t(translations.Articles) as string}
              placement="right"
              arrow
            >
              <Icon path={mdiBookshelf} color="inherit" />
            </Tooltip>
          }
          to={RouterPath.blog}
          onClick={() => scrollTo(RouterPath.blog)}
          aria-label={RouterPath.blog}
        />
        <Tab
          sx={{ display: { xs: 'none', md: 'block' } }}
          value={RouterPath.contact}
          component={NavLink}
          icon={
            <Tooltip
              title={t(translations.Contact) as string}
              placement="right"
              arrow
            >
              <Icon path={mdiAt} />
            </Tooltip>
          }
          to={RouterPath.contact}
          onClick={() => scrollTo(RouterPath.contact)}
          aria-label={RouterPath.contact}
        />
        <Tab
          component={Link}
          icon={
            <Tooltip title={arrowTitle} placement="right" arrow>
              <Icon
                path={mdiArrowDown}
                rotate={hasReachedEnd ? 180 : undefined}
              />
            </Tooltip>
          }
          to={NEXT_SECTION[section]}
          onClick={() => scrollTo(NEXT_SECTION[section])}
          aria-label={arrowTitle}
        />
      </Tabs>
    </Bar>
  );
});

const Bar = styled.nav<{ retract: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  height: 100%;
  justify-content: space-between;

  a,
  button {
    z-index: 1200;
  }

  > button:first-of-type {
    transform: translateX(0);
    transition: transform 250ms;
    > svg {
      width: 2em;
      padding: 0;
    }

    ${({ retract }) =>
      retract &&
      css`
        transform: translateX(1em);
      `}
  }

  ${media.medium`
    right: 0;
    bottom: 1em;
    height: auto;
  `}

  svg {
    width: 3.5em;
    padding: 0.5em 0.25em;

    ${media.medium`
      width: 4em;
      padding: 0.75em;
    `}

    ${media.large`
      width: 4.5em;
      padding: 0.75em;
    `}

    transition: 500ms transform 100ms, color 500ms;
    filter: drop-shadow(0.075em 0.025em 0.0625em rgba(0, 0, 0, 0.15));

    :hover {
      color: inherit;
    }
  }
`;
