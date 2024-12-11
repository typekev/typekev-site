import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/ButtonLink";
import { SectionLink } from "@/components/SectionLink";
import { email, linkedInUrl } from "@/helpers/links";

import { CopyButton } from "./contact/CopyButton";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <address id="contact">
      <SectionLink href="/contact" replace>
        <h2 className="title">{t("title")}</h2>
      </SectionLink>
      <ul>
        <li>
          <ButtonLink href={linkedInUrl}>LinkedIn</ButtonLink>
        </li>
        <li className="button-group">
          <ButtonLink href={`mailto:${email}`}>Email</ButtonLink>
          <CopyButton />
        </li>
      </ul>
    </address>
  );
}
