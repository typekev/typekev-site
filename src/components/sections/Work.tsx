import { useTranslations } from "next-intl";

export default function Work() {
  const t = useTranslations("Work");
  return (
    <section id="work">
      <a href="#work" className="title">
        {t("title")}
      </a>
      <a href="#work" className="workplace">
        SES Satellites
      </a>
      <a href="#work" className="workplace" data-text="EmailTree AI">
        EmailTree AI
      </a>
      <a href="#work" className="workplace">
        Devoteam
      </a>
    </section>
  );
}
