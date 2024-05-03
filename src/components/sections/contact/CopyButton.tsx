"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { CopyIcon, CopyCheckIcon } from "lucide-react";

import { email } from "@/helpers/links";

const copy = () => navigator.clipboard.writeText(email);

export function CopyButton() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);
  const onCopy = () => copy().then(() => setCopied(true));

  const Icon = copied ? CopyCheckIcon : CopyIcon;

  return (
    <button className="button icon-button copy-button" onClick={onCopy} aria-label={t("copy")}>
      <Icon size="0.875em" strokeWidth={2.25} />
      <dialog className="tooltip">{copied ? t("copied") : t("copy")}</dialog>
    </button>
  );
}

CopyButton.displayName = "CopyButton";
