/**
 *
 * NavBar
 *
 */
import { memo, SyntheticEvent, useState } from "react";

import {
  mdiArrowDown,
  mdiAt,
  mdiCodeBracesBox,
  mdiCommentTextOutline,
  mdiMenu,
} from "@mdi/js";
import Icon from "@mdi/react";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Tooltip from "@mui/material/Tooltip";
import { styled, css } from "@mui/material/styles";

import { useRouter } from "hooks/useRouter";
import { useTranslation } from "hooks/useTranslation";
import { Section } from "types.d";
import { getSectionFromPath } from "utils/getSectionFromPath";
import { scrollToSection } from "utils/scrollToSection";

import { AudioToggle } from "./navBar/AudioToggle";
import { K } from "./navBar/K";
import { NavDrawer } from "./navBar/NavDrawer";
import { ThemeModeToggle } from "./navBar/ThemeModeToggle";
import { TranslationToggle } from "./navBar/TranslationToggle";

const NEXT_SECTION: Record<Section, Section> = {
  [Section.about]: Section.work,
  [Section.work]: Section.blog,
  [Section.blog]: Section.contact,
  [Section.contact]: Section.about,
};

export const NavBar = memo(() => {
  const { t } = useTranslation();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const section = getSectionFromPath(router.asPath);
  const hasLeftStart = section !== Section.about;
  const hasReachedEnd = section === Section.contact;
  const isInPost = section === Section.blog && router.query?.id;
  const arrowTitle = t(
    hasReachedEnd ? "Back to top" : isInPost ? "Return" : "Continue"
  );

  const onCloseDrawer = () => setDrawerOpen(false);
  const onOpenDrawer = () => setDrawerOpen(true);
  const onChange = (_: SyntheticEvent, to: Section | false) =>
    to && (section ? router.replace : router.push)(`/${to}`);

  return (
    <Bar retract={hasLeftStart && !isInPost}>
      <IconButton
        aria-label="Menu"
        name="Menu"
        color="inherit"
        onClick={onOpenDrawer}
        sx={{ display: { md: "none" } }}
      >
        <Icon path={mdiMenu} />
      </IconButton>
      <NavDrawer
        open={drawerOpen}
        onOpen={onOpenDrawer}
        onClose={onCloseDrawer}
        sx={{ display: { md: "none" } }}
        selected={section}
      />
      <Tabs
        textColor="inherit"
        orientation="vertical"
        value={section}
        onChange={onChange}
      >
        <ThemeModeToggle />
        <TranslationToggle />
        <AudioToggle />
        <Tab
          sx={{ display: { xs: "none", md: "block" } }}
          value={Section.about}
          icon={
            <Tooltip title={t("About me")} placement="right" arrow>
              <div>
                <K />
              </div>
            </Tooltip>
          }
          onClick={() => scrollToSection(Section.about)}
        />
        <Tab
          sx={{ display: { xs: "none", md: "block" } }}
          value={Section.work}
          icon={
            <Tooltip title={t("Work")} placement="right" arrow>
              <Icon path={mdiCodeBracesBox} />
            </Tooltip>
          }
          onClick={() => scrollToSection(Section.work)}
        />
        <Tab
          sx={{ display: { xs: "none", md: "block" } }}
          value={Section.blog}
          icon={
            <Tooltip title={t("Articles")} placement="right" arrow>
              <Icon path={mdiCommentTextOutline} />
            </Tooltip>
          }
          onClick={() => scrollToSection(Section.blog)}
        />
        <Tab
          sx={{ display: { xs: "none", md: "block" } }}
          value={Section.contact}
          icon={
            <Tooltip title={t("Contact")} placement="right" arrow>
              <Icon path={mdiAt} />
            </Tooltip>
          }
          onClick={() => scrollToSection(Section.contact)}
        />
        <Tab
          value={false}
          icon={
            <Tooltip title={arrowTitle} placement="right" arrow>
              <Icon
                path={mdiArrowDown}
                rotate={hasReachedEnd ? 180 : isInPost ? 90 : undefined}
              />
            </Tooltip>
          }
          onClick={() =>
            isInPost
              ? router.push(`/${Section.blog}`)
              : section && scrollToSection(NEXT_SECTION[section])
          }
        />
      </Tabs>
    </Bar>
  );
});

NavBar.displayName = NavBar.name;

const shouldForwardProp = (prop: PropertyKey) => prop !== "retract";

interface BarProps {
  retract: boolean;
}

const Bar = styled("nav", { shouldForwardProp })<BarProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  justify-content: space-between;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.breakpoints.up("md")} {
      top: auto;
      bottom: 1em;
      height: auto;
    }

    a,
    button {
      z-index: 1200;

      ${theme.breakpoints.up("md")} {
        height: 4em;
      }
      ${theme.breakpoints.up("lg")} {
        height: 4.5em;
      }
    }
  `}

  > button:first-of-type {
    transform: translateX(0);
    transition: transform 250ms;
    > svg {
      width: 2em;
      padding: 0;
    }

    ${({ retract }) =>
      retract &&
      css`
        transform: translateX(1em);
      `}
  }

  svg {
    width: 3.5em;
    padding: 0.5em 0.25em;

    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        width: 4em;
        padding: 0.75em;
      }
      ${theme.breakpoints.up("lg")} {
        width: 4.5em;
        padding: 0.75em;
      }
    `}

    transition: ${({ theme }) => theme.transitions.create(["transform"])};
    filter: drop-shadow(0.075em 0.025em 0.0625em rgba(0, 0, 0, 0.15));
  }
`;
