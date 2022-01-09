/**
 *
 * NavDrawer
 *
 */
import Link from "next/link";
import { memo, SyntheticEvent } from "react";

import {
  mdiAt,
  mdiCodeBracesBox,
  mdiChevronRight,
  mdiCommentTextOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@mui/material/SwipeableDrawer";

import { useTranslation } from "hooks/useTranslation";
import { Section } from "types.d";
import { scrollToSection } from "utils/scrollToSection";

import { K } from "./K";

interface Props extends SwipeableDrawerProps {
  selected?: Section;
}

export const NavDrawer = memo(({ selected, onClose, ...rest }: Props) => {
  const { t } = useTranslation();

  const onClick = (path: Section) => (e: SyntheticEvent) => {
    scrollToSection(path);
    onClose(e);
  };

  return (
    <SwipeableDrawer anchor="right" onClose={onClose} {...rest}>
      <List>
        <ListItemButton onClick={onClose}>
          <ListItemIcon>
            <Icon path={mdiChevronRight} size={1.125} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <Link href={`/${Section.about}`} passHref shallow>
          <ListItemButton
            selected={selected === Section.about}
            onClick={onClick(Section.about)}
          >
            <ListItemIcon>
              <K />
            </ListItemIcon>
            <ListItemText primary={t("About me")} />
          </ListItemButton>
        </Link>
        <Link href={`/${Section.work}`} passHref shallow>
          <ListItemButton
            selected={selected === Section.work}
            onClick={onClick(Section.work)}
          >
            <ListItemIcon>
              <Icon path={mdiCodeBracesBox} size={1.125} />
            </ListItemIcon>
            <ListItemText primary={t("Work")} />
          </ListItemButton>
        </Link>
        <Link href={`/${Section.blog}`} passHref shallow>
          <ListItemButton
            selected={selected === Section.blog}
            onClick={onClick(Section.blog)}
          >
            <ListItemIcon>
              <Icon path={mdiCommentTextOutline} size={1.125} />
            </ListItemIcon>
            <ListItemText primary={t("Articles")} />
          </ListItemButton>
        </Link>
        <Link href={`/${Section.contact}`} passHref shallow>
          <ListItemButton
            selected={selected === Section.contact}
            onClick={onClick(Section.contact)}
          >
            <ListItemIcon>
              <Icon path={mdiAt} size={1.125} />
            </ListItemIcon>
            <ListItemText primary={t("Contact")} />
          </ListItemButton>
        </Link>
      </List>
    </SwipeableDrawer>
  );
});

NavDrawer.displayName = NavDrawer.name;
