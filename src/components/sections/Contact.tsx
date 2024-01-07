"use client";
import { useState } from "react";

import { ClipboardEditIcon, ClipboardCheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";

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
      <a href={linkedIn}>LinkedIn</a>
      <span className="icon-button">
        <a href={`mailto:${email}`}>Email</a>
        {copied ? (
          <ClipboardCheckIcon size="0.875em" strokeWidth={2.5} onClick={onCopy} />
        ) : (
          <ClipboardEditIcon size="0.875em" strokeWidth={2.5} onClick={onCopy} />
        )}
      </span>
    </section>
  );
}

const copy = () => navigator.clipboard.writeText(email);

const email = "kev@typekev.com" as const;
const linkedIn = "https://www.linkedin.com/in/typekev/" as const;
