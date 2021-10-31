/**
 *
 * Blog
 *
 */
import { memo, ComponentPropsWithoutRef } from 'react';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';

import { Section } from 'app/components/Section';

export const Blog = memo((props: ComponentPropsWithoutRef<typeof Section>) => {
  const { t } = useTranslation();

  return (
    <Section title={t(translations["Things I've written"])} {...props}>
      Call blog posts api.
    </Section>
  );
});
