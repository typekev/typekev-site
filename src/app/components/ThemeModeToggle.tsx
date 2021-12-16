/**
 *
 * ThemeModeToggle
 *
 */
import { useContext, memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mdi/react';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

import { ThemeMode } from 'types';
import { ThemeModeContext } from 'contexts/ThemeModeContext';
import { translations } from 'locales/translations';
import { palette } from 'styles/palette';

export const ThemeModeToggle = memo(() => {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const { t } = useTranslation();
  const isDarkMode = themeMode === ThemeMode.dark;
  const tooltip = isDarkMode
    ? t(translations['Dark mode On'])
    : t(translations['Dark mode Off']);

  return (
    <ThemeModeTab
      onClick={toggleThemeMode}
      color="inherit"
      sx={{
        color: isDarkMode ? palette.moonGlow : palette.supernova,
        opacity: 1,
        ':hover': {
          color: isDarkMode ? palette.moonGlow : palette.supernova,
        },
      }}
      icon={
        <Tooltip title={tooltip} placement="right" arrow>
          <Icon
            color="inherit"
            path={isDarkMode ? mdiWeatherNight : mdiWeatherSunny}
          />
        </Tooltip>
      }
    />
  );
});

const ThemeModeTab = styled(Tab)`
  transition: color 750ms;

  > button {
    opacity: 1;
  }
`;
