/**
 *
 * ThemeModeToggle
 *
 */
import { useContext, memo } from 'react';
import styled, { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

import { ThemeMode } from 'types';
import { ThemeModeContext } from 'contexts/ThemeModeContext';
import { translations } from 'locales/translations';
import { media } from 'styles/media';
import { palette } from 'styles/palette';

export const ThemeModeToggle = memo(() => {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const { t } = useTranslation();
  const isDarkMode = themeMode === ThemeMode.dark;
  const tooltip = isDarkMode
    ? t(translations['Dark mode On'])
    : t(translations['Dark mode Off']);

  return (
    <Tooltip title={tooltip} placement="right" arrow>
      <IconButton onClick={toggleThemeMode} color="inherit">
        <Toggle
          color={isDarkMode ? palette.pastelBlue[100] : palette.pastelRed[200]}
          path={isDarkMode ? mdiWeatherNight : mdiWeatherSunny}
        />
      </IconButton>
    </Tooltip>
  );
});

const Toggle = styled(Icon)`
  width: 1em;

  ${media.medium`
    width: 2em;
  `}
`;
