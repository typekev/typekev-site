/**
 *
 * Workplaces
 *
 */
import Link from "next/link";
import { memo, useCallback, useState, ComponentPropsWithoutRef } from "react";

import { Theme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

import { FocusedText } from "components/FocusedText";
import { useTranslation } from "hooks/useTranslation";
import { Section, Workplace } from "types.d";
import { scrollToSection } from "utils/scrollToSection";

import { WorkplaceLink } from "./WorkplaceLink";

export const Workplaces = memo(() => {
  const { t } = useTranslation();
  const abbreviate = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [isHovering, setIsHovering] = useState(false);

  const WPLink = useCallback(
    (props: ComponentPropsWithoutRef<typeof WorkplaceLink>) => (
      <WorkplaceLink
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...props}
      />
    ),
    []
  );

  return (
    <>
      <WorkplaceLink active={!isHovering} workplace={Workplace.Emailtree}>
        {`${t("EmailTree")}, `}
      </WorkplaceLink>
      <WPLink workplace={Workplace.Devoteam}>{`${t("Devoteam")}, `}</WPLink>
      <WPLink workplace={Workplace.Microsoft}>{`${t("Microsoft")}, `}</WPLink>
      <WPLink workplace={Workplace.Deloitte}>{`${t("Deloitte")}, `}</WPLink>
      <WPLink workplace={Workplace.EIB}>
        {`${t(abbreviate ? "EIB abbr" : "EIB")}, `}
      </WPLink>
      <WPLink workplace={Workplace.PwC}>
        {`${t(abbreviate ? "PwC abbr" : "PwC")}, `}
      </WPLink>
      <Button variant="text" onClick={() => scrollToSection(Section.contact)}>
        <Link href={`/${Section.contact}?highlight=LinkedIn`} passHref shallow>
          <FocusedText>
            {`${t("and more")}`}
            <span style={{ fontSize: "0.8125em" }}>↓</span>
          </FocusedText>
        </Link>
      </Button>
    </>
  );
});

Workplaces.displayName = Workplaces.name;
