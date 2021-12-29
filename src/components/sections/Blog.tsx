/**
 *
 * Blog
 *
 */
import { memo, ComponentPropsWithoutRef } from "react";

import { Section } from "components/Section";
import { useTranslation } from "hooks/useTranslation";

export const Blog = memo((props: ComponentPropsWithoutRef<typeof Section>) => {
  const { t } = useTranslation();

  return (
    <Section title={t("Things I've written")} {...props}>
      Call blog posts api.
    </Section>
  );
});

Blog.displayName = Blog.name;
