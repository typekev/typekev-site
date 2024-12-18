import { use } from "react";

import { Gamepad2Icon, KeyboardIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

import { ButtonLink } from "@/components/ButtonLink";
import { HighlightedButtonText } from "@/components/HighlightedButtonText";
import { SectionLink } from "@/components/SectionLink";
import { blobGameUrl, devoteamUrl, emailtreeUrl, githubUrl, resumeUrl, reactMKUrl, sesUrl } from "@/helpers/links";
import { Link } from "i18n/routing";
import { bots } from "libs/typekev-bot/bots";

import type { Bot } from "libs/typekev-bot/bots/types";

import { OpenButton } from "./work/OpenButton";

export default function Work() {
  const t = useTranslations("Work");
  const locale = use(getLocale()) as Bot;
  const languageBot = bots[locale];

  const sesHref = `/work/ses?chat=${encodeURIComponent(languageBot.getChatSuggestion("SES") || "")}`;
  const emailtreeHref = `/work/emailtree?chat=${encodeURIComponent(languageBot.getChatSuggestion("EmailTree AI") || "")}`;
  const devoteamHref = `/work/devoteam?chat=${encodeURIComponent(languageBot.getChatSuggestion("Devoteam") || "")}`;

  return (
    <section id="work">
      <SectionLink href="/work" replace>
        <h2 className="title">{t("title")}</h2>
      </SectionLink>
      <ul>
        <li className="button-group">
          <SectionLink href={sesHref} className="button">
            <HighlightedButtonText>SES Satellites</HighlightedButtonText>
          </SectionLink>
          <p className="button-superscript">2022 &mdash;</p>
          <OpenButton href={sesUrl} />
        </li>
        <li className="button-group">
          <SectionLink href={emailtreeHref} className="button">
            <HighlightedButtonText>EmailTree AI</HighlightedButtonText>
          </SectionLink>
          <p className="button-superscript">2021 &mdash; 2022</p>
          <OpenButton href={emailtreeUrl} />
        </li>
        <li className="button-group">
          <SectionLink href={devoteamHref} className="button">
            <HighlightedButtonText>Devoteam</HighlightedButtonText>
          </SectionLink>
          <p className="button-superscript">2017 &mdash; 2021</p>
          <OpenButton href={devoteamUrl} />
        </li>
        <li>
          <ButtonLink href={resumeUrl}>{t("resume")}</ButtonLink>
          <p className="button-superscript">{t("more")}</p>
        </li>
        <li className="button-group">
          <ButtonLink href={githubUrl}>GitHub</ButtonLink>
          <p className="button-superscript">{t("portfolio")}</p>
          <Link
            href={reactMKUrl}
            target="_blank"
            className="button icon-button"
            aria-label="Navigate to my NPM library"
          >
            <KeyboardIcon size="0.875em" strokeWidth={1.75} />
            <dialog className="tooltip">React Mechanical Keyboard &mdash; NPM Library</dialog>
          </Link>
          <Link
            href={blobGameUrl}
            target="_blank"
            className="button icon-button"
            aria-label="Navigate to my NextJS game"
          >
            <Gamepad2Icon size="0.875em" strokeWidth={1.75} />
            <dialog className="tooltip">Blob &mdash; Web-Based Retro Game</dialog>
          </Link>
        </li>
      </ul>
    </section>
  );
}
