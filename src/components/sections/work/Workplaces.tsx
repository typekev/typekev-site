/**
 *
 * Workplaces
 *
 */
import NextLink from "next/link";
import { memo, useCallback, useState, ComponentPropsWithoutRef } from "react";

import { Theme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { FocusedText } from "components/FocusedText";
import { useRouter } from "hooks/useRouter";
import { useTranslation } from "hooks/useTranslation";
import { ContactChannel, Section, Workplace } from "types.d";
import { scrollToSection } from "utils/scrollToSection";

import { WorkplaceLink } from "./WorkplaceLink";

export const Workplaces = memo(() => {
  const { t } = useTranslation();
  const {
    query: { place },
  } = useRouter();

  const abbreviate = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [isHovering, setIsHovering] = useState(false);

  const Link = useCallback(
    (props: ComponentPropsWithoutRef<typeof WorkplaceLink>) => (
      <WorkplaceLink
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => scrollToSection(Section.work)}
        {...props}
      />
    ),
    []
  );

  return (
    <>
      <WorkplaceLink
        active={!isHovering && !place}
        workplace={Workplace.Emailtree}
      >
        {`${t("EmailTree")}, `}
      </WorkplaceLink>
      <Link currentWorkplace={place} workplace={Workplace.Devoteam}>{`${t(
        "Devoteam"
      )}, `}</Link>
      <Link currentWorkplace={place} workplace={Workplace.Microsoft}>{`${t(
        "Microsoft"
      )}, `}</Link>
      <Link currentWorkplace={place} workplace={Workplace.Deloitte}>{`${t(
        "Deloitte"
      )}, `}</Link>
      <Link currentWorkplace={place} workplace={Workplace.EIB}>
        {`${t(abbreviate ? "EIB abbr" : "EIB")}, `}
      </Link>
      <Link currentWorkplace={place} workplace={Workplace.PwC}>
        {`${t(abbreviate ? "PwC abbr" : "PwC")}, `}
      </Link>
      <NextLink
        href={`/${Section.contact}/${ContactChannel.LinkedIn}/`}
        passHref
        shallow
      >
        <Button variant="text" onClick={() => scrollToSection(Section.contact)}>
          <FocusedText>
            {`${t("and more")}`}
            <ArrowDown>↓</ArrowDown>
          </FocusedText>
        </Button>
      </NextLink>
    </>
  );
});

Workplaces.displayName = Workplaces.name;

const ArrowDown = styled("span")`
  font-size: 0.8125em;
`;
