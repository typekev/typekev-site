/**
 *
 * About
 *
 */
import { memo, ComponentPropsWithoutRef } from "react";

import { Trans } from "next-i18next";

import { FocusedText } from "components/FocusedText";
import { Section } from "components/Section";

export const About = memo((props: ComponentPropsWithoutRef<typeof Section>) => (
  <Section {...props}>
    <Trans
      i18nKey="Hi, I'm Kevin"
      components={{
        name: <strong />,
        focused: <FocusedText active />,
      }}
    />
  </Section>
));

About.displayName = About.name;
