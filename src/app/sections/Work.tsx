/**
 *
 * Work
 *
 */
import { memo, useCallback, useState, ComponentPropsWithoutRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';

import { Section } from 'app/components/Section';
import { FocusedText } from 'app/components/FocusedText';

export const Work = memo((props: ComponentPropsWithoutRef<typeof Section>) => {
  const { t } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);

  const toggleIsHovering = useCallback(
    (hovering: boolean) => () => setIsHovering(hovering),
    [],
  );

  return (
    <Section title={t(translations["Companies I've worked for"])} {...props}>
      <Trans
        i18nKey={translations.companies_list}
        components={{
          bold: <b />,
          focused: isHovering ? <span /> : <FocusedText />,
          focusedHover: (
            <FocusedText
              hover
              onMouseEnter={toggleIsHovering(true)}
              onMouseLeave={toggleIsHovering(false)}
            />
          ),
        }}
      />
    </Section>
  );
});
