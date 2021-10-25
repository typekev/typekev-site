import { Helmet } from 'react-helmet-async';
import { Section } from 'app/components/Section';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Section>{t(translations["Hi, I'm Kevin"])}</Section>
      <Section title={t(translations["Companies I've worked for"])}>
        {t(translations.companies_list)}
        {t(translations['+ More'])}
      </Section>
      <Section title={t(translations["Things I've written"])}>
        Call blog posts api.
      </Section>
      <Section title={t(translations['Ways you can contact me'])}>
        {t(translations.LinkedIn)}
        {t(translations.Email)}
      </Section>
    </>
  );
}
