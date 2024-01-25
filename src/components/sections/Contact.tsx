"use client";
import { useState } from "react";

import { ClipboardEditIcon, ClipboardCheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { ListItemLink } from "@/components/ListItemLink";
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
      <ListItemLink href={linkedInUrl}>LinkedIn</ListItemLink>
      <span className="button-group">
        <ListItemLink href={`mailto:${email}`}>Email</ListItemLink>
        <span className="list-item icon-button">
          <span>
            <span>
              {copied ? (
                <ClipboardCheckIcon size="0.75em" strokeWidth={2.5} onClick={onCopy} />
              ) : (
                <ClipboardEditIcon size="0.75em" strokeWidth={2.5} onClick={onCopy} />
              )}
            </span>
          </span>
        </span>
      </span>
    </section>
  );
}

const copy = () => navigator.clipboard.writeText(email);
