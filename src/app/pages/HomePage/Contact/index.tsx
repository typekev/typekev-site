/**
 *
 * Contact
 *
 */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';

import { Section } from 'app/components/Section';
import { FocusedText } from 'app/components/FocusedText';

interface Props {}

export const Contact = memo((props: Props) => {
  const { t } = useTranslation();

  return (
    <Section title={t(translations['Ways you can contact me'])}>
      <ul>
        <li>
          <FocusedText hover>{t(translations.LinkedIn)}</FocusedText>
        </li>
        <li>
          <FocusedText hover>{t(translations.Email)}</FocusedText>
        </li>
      </ul>
    </Section>
  );
});
