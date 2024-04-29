import { useTranslations } from "next-intl";

import { AnchorButton } from "@/components/AnchorButton";
import { devoteamUrl, emailtreeUrl, linkedInExperienceUrl, sesUrl } from "@/helpers/links";

import { OpenButton } from "./work/OpenButton";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work">
      <h2 className="title">
        <a href="#work">{t("title")}</a>
      </h2>
      <ul>
        <li className="button-group">
          <AnchorButton id="work-ses" href="#work-ses">
            SES Satellites
          </AnchorButton>
          <OpenButton href={sesUrl} />
        </li>
        <li className="button-group">
          <AnchorButton id="work-emailtree" href="#work-emailtree">
            EmailTree AI
          </AnchorButton>
          <OpenButton href={emailtreeUrl} />
        </li>
        <li className="button-group">
          <AnchorButton id="work-devoteam" href="#work-devoteam">
            Devoteam
          </AnchorButton>
          <OpenButton href={devoteamUrl} />
        </li>
        <li>
          <AnchorButton href={linkedInExperienceUrl}>{t("more")}</AnchorButton>
        </li>
      </ul>
    </section>
  );
}
