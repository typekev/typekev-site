/**
 *
 * TranslationToggle
 *
 */
import { memo, MouseEvent, useState } from "react";

import { mdiEarth } from "@mdi/js";
import Icon from "@mdi/react";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "hooks/useTranslation";
import { palette } from "theme";

import { TranslationMenu } from "./translationToggle/TranslationMenu";

export const TranslationToggle = memo(() => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const color = palette.aquamarineBlue;

  const handleClick = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Tab
        value={false}
        onClick={handleClick}
        sx={{ color, opacity: 1, ":hover": { color } }}
        icon={
          <Tooltip title={t("Language")} placement="right" arrow>
            <Icon color="inherit" path={mdiEarth} />
          </Tooltip>
        }
      />
      <TranslationMenu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      />
    </>
  );
});

TranslationToggle.displayName = TranslationToggle.name;
