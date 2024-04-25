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
      <AnchorButton id="work-ses" href="#work-ses">
        SES Satellites
      </AnchorButton>
      <AnchorButton id="work-emailtree" href="#work-emailtree">
        EmailTree AI
      </AnchorButton>
      <AnchorButton id="work-devoteam" href="#work-devoteam">
        Devoteam
      </AnchorButton>
      <AnchorButton href={linkedInExperienceUrl}>{t("more")}</AnchorButton>
    </section>
  );
}
