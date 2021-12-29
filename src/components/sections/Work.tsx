/**
 *
 * Work
 *
 */
import { memo, useCallback, useState, ComponentPropsWithoutRef } from "react";

import { Trans } from "react-i18next";

import { FocusedText } from "components/FocusedText";
import { Section } from "components/Section";
import { useTranslation } from "hooks/useTranslation";

export const Work = memo((props: ComponentPropsWithoutRef<typeof Section>) => {
  const { t } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);

  const toggleIsHovering = useCallback(
    (hovering: boolean) => () => setIsHovering(hovering),
    []
  );

  return (
    <Section title={t("Companies I've worked for")} {...props}>
      <Trans
        i18nKey="companies_list"
        components={{
          bold: <b />,
          focused: isHovering ? <span /> : <FocusedText active />,
          focusedHover: (
            <FocusedText
              onMouseEnter={toggleIsHovering(true)}
              onMouseLeave={toggleIsHovering(false)}
            />
          ),
        }}
      />
    </Section>
  );
});

Work.displayName = Work.name;
