import { useTranslations } from "next-intl";

import { AnchorButton } from "@/components/AnchorButton";
import { devoteamUrl, emailtreeUrl, linkedInExperienceUrl, sesUrl } from "@/helpers/links";

import { OpenButton } from "./work/OpenButton";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work">
      <a href="#work" className="title">
        {t("title")}
      </a>
      <span className="button-group">
        <AnchorButton id="work-ses" href="#work-ses">
          SES Satellites
        </AnchorButton>
        <OpenButton href={sesUrl} />
      </span>
      <span className="button-group">
        <AnchorButton id="work-emailtree" href="#work-emailtree">
          EmailTree AI
        </AnchorButton>
        <OpenButton href={emailtreeUrl} />
      </span>
      <span className="button-group">
        <AnchorButton id="work-devoteam" href="#work-devoteam">
          Devoteam
        </AnchorButton>
        <OpenButton href={devoteamUrl} />
      </span>
      <AnchorButton href={linkedInExperienceUrl}>{t("more")}</AnchorButton>
    </section>
  );
}
