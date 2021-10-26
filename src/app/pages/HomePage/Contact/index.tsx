/**
 *
 * Contact
 *
 */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';

import { Section } from 'app/components/Section';

const links = {
  linkedIn: 'https://linkedin.com/in/typekev',
  email: 'mailto:kevin.gonzalez@emailtree.ai',
  emailCopy: 'kevin.gonzalez@emailtree.ai',
};

export const Contact = memo(() => {
  const { t } = useTranslation();

  return (
    <Section title={t(translations['Ways you can contact me'])}>
      <ul>
        <li>
          <a href={links.linkedIn} target="_blank" rel="noreferrer">
            {t(translations.LinkedIn)}
          </a>
        </li>
        <li>
          <a href={links.email}>{t(translations.Email)}</a>
        </li>
      </ul>
    </Section>
  );
});
