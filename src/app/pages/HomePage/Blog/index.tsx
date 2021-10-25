/**
 *
 * Blog
 *
 */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';

import { Section } from 'app/components/Section';

interface Props {}

export const Blog = memo((props: Props) => {
  const { t } = useTranslation();

  return (
    <Section title={t(translations["Things I've written"])}>
      Call blog posts api.
    </Section>
  );
});
