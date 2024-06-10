import { useTranslations } from "next-intl";

import { AnchorButton } from "@/components/AnchorButton";
import { devoteamUrl, emailtreeUrl, githubTypekevSiteUrl, linkedInExperienceUrl, sesUrl } from "@/helpers/links";

import { OpenButton } from "./work/OpenButton";
import { FlaskConicalIcon, Gamepad2Icon, KeyboardIcon } from "lucide-react";

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
          <p className="work-year">2022 &mdash;</p>
          <OpenButton href={sesUrl} />
        </li>
        <li className="button-group">
          <AnchorButton id="work-emailtree" href="#work-emailtree">
            EmailTree AI
          </AnchorButton>
          <p className="work-year">2021 &mdash; 2022</p>
          <OpenButton href={emailtreeUrl} />
        </li>
        <li className="button-group">
          <AnchorButton id="work-devoteam" href="#work-devoteam">
            Devoteam
          </AnchorButton>
          <p className="work-year">2017 &mdash; 2021</p>
          <OpenButton href={devoteamUrl} />
        </li>
        <li>
          <AnchorButton href={linkedInExperienceUrl}>{t("more")}</AnchorButton>
          <p className="work-year">&nbsp;&mdash; 2017</p>
        </li>
        <li className="button-group">
          <AnchorButton href={githubTypekevSiteUrl}>Projects</AnchorButton>
          <p className="work-year">Open-source</p>
          <a href="#" className="button icon-button" aria-label="Navigate to a react library I made">
            <KeyboardIcon size="0.875em" strokeWidth={1.5} />
          </a>
          <a href="#" className="button icon-button" aria-label="Navigate to my authored Python courses">
            <FlaskConicalIcon size="0.875em" strokeWidth={1.5} />
          </a>
          <a href="#" className="button icon-button" aria-label="Navigate to a browser game I made">
            <Gamepad2Icon size="0.875em" strokeWidth={1.5} />
          </a>
        </li>
      </ul>
    </section>
  );
}
