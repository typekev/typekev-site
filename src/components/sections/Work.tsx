import { ExternalLinkIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work">
      <a href="#work" className="title">
        {t("title")}
      </a>
      <a id="ses" href="#ses" className="list-item">
        <span>
          <span data-text="SES Satellites">SES Satellites</span>
        </span>
      </a>
      <a id="emailtreeai" href="#emailtreeai" className="list-item">
        <span>
          <span data-text="EmailTree AI">EmailTree AI</span>
        </span>
      </a>
      <a id="devoteam" href="#devoteam" className="list-item">
        <span>
          <span data-text="Devoteam">Devoteam</span>
        </span>
      </a>
      <a href={linkedInExperience} className="list-item">
        <span className="icon-button">
          <span>More</span>
          <ExternalLinkIcon size="0.875em" strokeWidth={2.5} />
        </span>
      </a>
    </section>
  );
}

const linkedInExperience = "https://www.linkedin.com/in/typekev/details/experience/" as const;
