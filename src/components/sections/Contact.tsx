"use client";
import { useState } from "react";

import { ClipboardEditIcon, ClipboardCheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { AnchorButton } from "@/components/AnchorButton";
import { email, linkedInUrl } from "@/helpers/links";

export default function Contact() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    setCopied(true);
    copy();
  };

  return (
    <section id="contact">
      <a href="#contact" className="title">
        {t("title")}
      </a>
      <AnchorButton href={linkedInUrl}>LinkedIn</AnchorButton>
      <span className="button-group">
        <AnchorButton href={`mailto:${email}`}>Email</AnchorButton>
        <button className="button icon-button">
          <span>
            {copied ? (
              <ClipboardCheckIcon size="0.75em" strokeWidth={2.5} onClick={onCopy} />
            ) : (
              <ClipboardEditIcon size="0.75em" strokeWidth={2.5} onClick={onCopy} />
            )}
          </span>
        </button>
      </span>
    </section>
  );
}

const copy = () => navigator.clipboard.writeText(email);
