"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { ClipboardCopyIcon, ClipboardCheckIcon } from "lucide-react";

import { email } from "@/helpers/links";

const copy = () => navigator.clipboard.writeText(email);

export function CopyButton() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);
  const onCopy = () => copy().then(() => setCopied(true));

  const Icon = copied ? ClipboardCheckIcon : ClipboardCopyIcon;

  return (
    <button className="button icon-button copy-button" onClick={onCopy} aria-label={t("copy")}>
      <Icon size="0.875em" strokeWidth={1.75} />
      <dialog className="tooltip">{copied ? t("copied") : t("copy")}</dialog>
    </button>
  );
}
