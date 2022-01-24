/**
 *
 * AudioToggle
 *
 */
import { useContext, memo } from "react";

import { mdiVolumeHigh, mdiVolumeOff } from "@mdi/js";
import Icon from "@mdi/react";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import { AudioContext } from "contexts/AudioContext";
import { useTranslation } from "hooks/useTranslation";
import { palette } from "theme";

export const AudioToggle = memo(() => {
  const { t } = useTranslation();
  const { isMute, toggleMute } = useContext(AudioContext);

  const tooltip = t(isMute ? "Sound Off" : "Sound On");
  const color = isMute ? palette.geraldine : palette.surf;

  return (
    <AudioTab
      value={false}
      onClick={toggleMute}
      sx={{ color, opacity: 1, ":hover": { color } }}
      icon={
        <Tooltip title={tooltip} placement="right" arrow>
          <Icon color="inherit" path={isMute ? mdiVolumeOff : mdiVolumeHigh} />
        </Tooltip>
      }
    />
  );
});

AudioToggle.displayName = AudioToggle.name;

const AudioTab = styled(Tab)`
  transition: ${({ theme }) =>
    theme.transitions.create("color", {
      duration: theme.transitions.duration.short,
    })};
`;
