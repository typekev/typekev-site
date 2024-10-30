import { useTranslations } from "next-intl";

import { AnchorButton } from "@/components/AnchorButton";
import { email, linkedInUrl } from "@/helpers/links";

import { CopyButton } from "./contact/CopyButton";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <address id="contact">
      <h2 className="title">
        <a href="#contact">{t("title")}</a>
      </h2>
      <ul>
        <li>
          <AnchorButton href={linkedInUrl}>LinkedIn</AnchorButton>
        </li>
        <li className="button-group">
          <AnchorButton href={`mailto:${email}`}>Email</AnchorButton>
          <CopyButton />
        </li>
      </ul>
    </address>
  );
}
