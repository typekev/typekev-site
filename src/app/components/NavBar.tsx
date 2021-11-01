/**
 *
 * NavBar
 *
 */
import { memo, PropsWithChildren } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';
import {
  mdiArrowDown,
  mdiAtom,
  mdiBookshelf,
  mdiHandWaveOutline,
} from '@mdi/js';

import { RouterPath } from 'types';
import { scrollTo } from 'utils/scrollTo';
import { translations } from 'locales/translations';

import { ThemeModeToggle } from './themeModeToggle/Loadable';

const NEXT_SECTION: Record<RouterPath, RouterPath> = {
  [RouterPath.about]: RouterPath.work,
  [RouterPath.work]: RouterPath.blog,
  [RouterPath.blog]: RouterPath.contact,
  [RouterPath.contact]: RouterPath.about,
};

interface Props {}

export const NavBar = memo(({ children }: PropsWithChildren<Props>) => {
  const { section = RouterPath.about } = useParams<{ section?: RouterPath }>();
  const { t } = useTranslation();

  const hasReachedEnd = section === RouterPath.contact;
  const arrowTitle = hasReachedEnd
    ? t(translations['About me'])
    : t(translations.Continue);

  return (
    <Bar>
      <Tooltip title={arrowTitle} placement="right" arrow>
        <Link
          to={NEXT_SECTION[section]}
          onClick={() => scrollTo(NEXT_SECTION[section])}
        >
          <IconButton color="inherit">
            <Icon
              path={mdiArrowDown}
              rotate={hasReachedEnd ? 180 : undefined}
            />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title={t(translations.Work) as string} placement="right" arrow>
        <Link to={RouterPath.work} onClick={() => scrollTo(RouterPath.work)}>
          <IconButton color="inherit">
            <Icon path={mdiAtom} />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip
        title={t(translations.Articles) as string}
        placement="right"
        arrow
      >
        <Link to={RouterPath.blog} onClick={() => scrollTo(RouterPath.blog)}>
          <IconButton color="inherit">
            <Icon path={mdiBookshelf} />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip
        title={t(translations.Contact) as string}
        placement="right"
        arrow
      >
        <Link
          to={RouterPath.contact}
          onClick={() => scrollTo(RouterPath.contact)}
        >
          <IconButton color="inherit">
            <Icon path={mdiHandWaveOutline} />
          </IconButton>
        </Link>
      </Tooltip>
      <ThemeModeToggle />
    </Bar>
  );
});

const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  svg {
    width: 2em;
    color: var(--fg);
    :hover {
      color: inherit;
    }
    transition: 250ms transform 250ms;
  }
`;
