/**
 *
 * ThemeModeToggle
 *
 */
import { useContext, memo } from "react";

import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
import Icon from "@mdi/react";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import { AudioContext } from "contexts/AudioContext";
import { ThemeModeContext } from "contexts/ThemeModeContext";
import { useTranslation } from "hooks/useTranslation";
import { palette } from "theme";
import { ThemeMode } from "types.d";

export const ThemeModeToggle = memo(() => {
  const { t } = useTranslation();
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const { themeSwitchAudio } = useContext(AudioContext);

  const isDarkMode = themeMode === ThemeMode.dark;
  const tooltip = t(isDarkMode ? "Dark mode On" : "Dark mode Off");
  const color = isDarkMode ? palette.moonGlow : palette.supernova;

  const handleClick = () => {
    toggleThemeMode();
    themeSwitchAudio?.load();
    themeSwitchAudio?.play();
  };

  return (
    <ThemeModeTab
      value={false}
      onClick={handleClick}
      sx={{ color, opacity: 1, ":hover": { color } }}
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

ThemeModeToggle.displayName = ThemeModeToggle.name;

const ThemeModeTab = styled(Tab)`
  transition: ${({ theme }) =>
    theme.transitions.create("color", {
      duration: theme.transitions.duration.complex,
    })};
`;
