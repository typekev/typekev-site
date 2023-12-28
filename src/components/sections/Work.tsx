import { useTranslations } from "next-intl";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work">
      <a href="#work" className="title">
        {t("title")}
      </a>
      <a href="#work" className="list-item">
        <span>SES Satellites</span>
      </a>
      <a href="#work" className="list-item">
        <span>EmailTree AI</span>
      </a>
      <a href="#work" className="list-item">
        <span>Devoteam</span>
      </a>
    </section>
  );
}
