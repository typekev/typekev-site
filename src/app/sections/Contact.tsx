/**
 *
 * Contact
 *
 */
import { memo, ComponentPropsWithoutRef } from 'react';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';

import { Section } from 'app/components/Section';

const links = {
  linkedIn: 'https://linkedin.com/in/typekev',
  email: 'mailto:kevin.gonzalez@emailtree.ai',
  emailCopy: 'kevin.gonzalez@emailtree.ai',
};

export const Contact = memo(
  (props: ComponentPropsWithoutRef<typeof Section>) => {
    const { t } = useTranslation();

    return (
      <Section title={t(translations['Ways you can contact me'])} {...props}>
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
  },
);
