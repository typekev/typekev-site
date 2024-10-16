import { useTranslations } from "next-intl";

import { AnchorButton } from "@/components/AnchorButton";
import {
  blobGameUrl,
  devoteamUrl,
  emailtreeUrl,
  githubUrl,
  resumeUrl,
  reactMKUrl,
  sesUrl,
} from "@/helpers/links";

import { OpenButton } from "./work/OpenButton";
import { Gamepad2Icon, KeyboardIcon } from "lucide-react";

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
          <AnchorButton href={resumeUrl}>{t("resume")}</AnchorButton>
          <p className="work-year">{t("more")}</p>
        </li>
        <li className="button-group">
          <AnchorButton href={githubUrl}>GitHub</AnchorButton>
          <p className="work-year">{t("portfolio")}</p>
          <a href={reactMKUrl} target="_blank" className="button icon-button" aria-label="Navigate to my NPM library">
            <KeyboardIcon size="0.875em" strokeWidth={1.75} />
            <dialog className="tooltip">React Mechanical Keyboard &mdash; NPM Library</dialog>
          </a>
          <a href={blobGameUrl} target="_blank" className="button icon-button" aria-label="Navigate to my NextJS game">
            <Gamepad2Icon size="0.875em" strokeWidth={1.75} />
            <dialog className="tooltip">Blob &mdash; Web-Based Retro Game</dialog>
          </a>
        </li>
      </ul>
    </section>
  );
}
