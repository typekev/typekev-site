import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact">
      <a href="#contact" className="title">
        {t("title")}
      </a>
      <a href="https://www.linkedin.com/in/typekev/">LinkedIn</a>
      <span>
        <a href={`mailto:${email}`}>Email</a>
        <b onClick={copy}> &#10063;</b>
      </span>
    </section>
  );
}

const copy = () => navigator.clipboard.writeText(email);

const email = "kev@typekev.com" as const;
