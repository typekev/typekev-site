/**
 *
 * NavBar
 *
 */
import { memo } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Hidden from '@mui/material/Hidden';
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

const NEXT_SECTION: Record<RouterPath, RouterPath> = {
  [RouterPath.about]: RouterPath.work,
  [RouterPath.work]: RouterPath.blog,
  [RouterPath.blog]: RouterPath.contact,
  [RouterPath.contact]: RouterPath.about,
};

export const NavBar = memo(() => {
  const { section = RouterPath.about } = useParams<{ section?: RouterPath }>();
  const { t } = useTranslation();

  const hasLeftStart = section !== RouterPath.about;
  const hasReachedEnd = section === RouterPath.contact;
  const arrowTitle = hasReachedEnd
    ? t(translations['Back to top'])
    : t(translations.Continue);

  return (
    <Bar retract={hasLeftStart}>
      <Hidden mdUp>
        <IconButton color="inherit">
          <Icon path={mdiMenu} size={2} />
        </IconButton>
      </Hidden>
      <Hidden mdDown>
        <Tabs orientation="vertical" value={section}>
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
          <Tab
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
            aria-label={arrowTitle}
          />
          <Tab
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
            aria-label={arrowTitle}
          />
          <Tab
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
            aria-label={arrowTitle}
          />
          <Tab
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
            aria-label={arrowTitle}
          />
          <ThemeModeToggle />
        </Tabs>
      </Hidden>
    </Bar>
  );
});

const Bar = styled.nav<{ retract: boolean }>`
  position: fixed;
  right: 0;
  transition: right 250ms;

  ${({ retract }) =>
    retract &&
    css`
      right: -1.75em;
    `}

  ${media.medium`
    display: flex;
    flex-direction: column;
    right: 0;
    bottom: 1em;

    svg {
      width: 4.25em;
      padding: 0.75em;

      ${media.large`
        width: 5.25em;
        padding: 0.875em;
      `}
      
      transition: 500ms transform 100ms, color 500ms;
      filter: drop-shadow(0.075em 0.025em 0.0625em rgba(0, 0, 0, 0.15));

      :hover {
        color: inherit;
      }
    }
  `}
`;
