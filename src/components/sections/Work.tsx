import { useTranslations } from "next-intl";

import { AnchorButton } from "@/components/AnchorButton";
import { linkedInExperienceUrl } from "@/helpers/links";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work">
      <a href="#work" className="title">
        {t("title")}
      </a>
      <AnchorButton id="ses" href="#ses">
        SES Satellites
      </AnchorButton>
      <AnchorButton id="emailtreeai" href="#emailtreeai">
        EmailTree AI
      </AnchorButton>
      <AnchorButton id="devoteam" href="#devoteam">
        Devoteam
      </AnchorButton>
      <AnchorButton href={linkedInExperienceUrl}>{t("more")}</AnchorButton>
    </section>
  );
}
