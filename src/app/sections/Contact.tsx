/**
 *
 * Contact
 *
 */
import { memo, ComponentPropsWithoutRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { translations } from 'locales/translations';
import { palette } from 'styles/palette';

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
            <A href={links.linkedIn} target="_blank" rel="noreferrer">
              {t(translations.LinkedIn)}
            </A>
          </li>
          <li>
            <A href={links.email}>{t(translations.Email)}</A>
          </li>
        </ul>
      </Section>
    );
  },
);

const A = styled.a`
  :hover {
    color: ${palette.dodgerBlue};
  }
`;
