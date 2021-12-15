/**
 *
 * ThemeModeToggle
 *
 */
import { useContext, memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
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
      <ColorBox
        color={isDarkMode ? palette.pastelBlue[100] : palette.pastelRed[100]}
      >
        <IconButton onClick={toggleThemeMode} color="inherit">
          <Toggle
            color="inherit"
            path={isDarkMode ? mdiWeatherNight : mdiWeatherSunny}
          />
        </IconButton>
      </ColorBox>
    </Tooltip>
  );
});

const ColorBox = styled(Box)`
  transition: color 1500ms;
`;

const Toggle = styled(Icon)`
  width: 1em;

  ${media.medium`
    width: 2em;
  `}
`;
