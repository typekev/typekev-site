/**
 *
 * Work
 *
 */
import { memo, ComponentPropsWithoutRef } from "react";

import { styled } from "@mui/material/styles";

import { Section } from "components/Section";
import { useTranslation } from "hooks/useTranslation";

import { Workplaces } from "./work/Workplaces";

export const Work = memo((props: ComponentPropsWithoutRef<typeof Section>) => {
  const { t } = useTranslation();

  return (
    <WorkSection title={t("Companies I've worked for")} {...props}>
      <Workplaces />
    </WorkSection>
  );
});

Work.displayName = Work.name;

const WorkSection = styled(Section)`
  & > div {
    margin-left: -0.625rem;
  }
`;
