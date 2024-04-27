import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { AnchorButton } from "@/components/AnchorButton";
import { email, linkedInUrl } from "@/helpers/links";

const CopyButton = dynamic(() => import("./contact/CopyButton").then((mod) => mod.CopyButton), { ssr: false });

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact">
      <a href="#contact" className="title">
        {t("title")}
      </a>
      <AnchorButton href={linkedInUrl}>LinkedIn</AnchorButton>
      <span className="button-group">
        <AnchorButton href={`mailto:${email}`}>Email</AnchorButton>
        <CopyButton />
      </span>
    </section>
  );
}
