/**
 *
 * ThemeModeToggle
 *
 */
import { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

import { ThemeMode } from 'types';
import { useThemeMode } from 'hooks/useThemeMode';
import { translations } from 'locales/translations';
import { media } from 'styles/media';

export const ThemeModeToggle = memo(
  ({ themeMode, toggleThemeMode }: ReturnType<typeof useThemeMode>) => {
    const { t } = useTranslation();

    return (
      <Tooltip title={t(translations.Deloitte) as string}>
        <ThemeModeSwitch onClick={toggleThemeMode} color="inherit">
          <Toggle
            path={
              themeMode === ThemeMode.dark ? mdiWeatherNight : mdiWeatherSunny
            }
          />
        </ThemeModeSwitch>
      </Tooltip>
    );
  },
);

const ThemeModeSwitch = styled(IconButton)`
  position: fixed;
  top: 0em;
  left: 0em;
`;

const Toggle = styled(Icon)`
  width: 1em;

  ${media.medium`
    width: 2em;
  `}
`;
