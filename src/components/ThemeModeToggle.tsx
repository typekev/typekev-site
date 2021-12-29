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

import { ThemeModeContext } from "contexts/ThemeModeContext";
import { useTranslation } from "hooks/useTranslation";
import { palette } from "theme";
import { ThemeMode } from "types.d";

export const ThemeModeToggle = memo(() => {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const { t } = useTranslation();
  const isDarkMode = themeMode === ThemeMode.dark;
  const tooltip = t(isDarkMode ? "Dark mode On" : "Dark mode Off");

  return (
    <ThemeModeTab
      onClick={toggleThemeMode}
      color="inherit"
      sx={{
        color: isDarkMode ? palette.moonGlow : palette.supernova,
        opacity: 1,
        ":hover": {
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

ThemeModeToggle.displayName = ThemeModeToggle.name;

const ThemeModeTab = styled(Tab)`
  transition: color 750ms;

  > button {
    opacity: 1;
  }
`;
