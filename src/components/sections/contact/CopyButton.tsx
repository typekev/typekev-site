"use client";
import { useState, useCallback, useTransition } from "react";

import { ClipboardCopyIcon, ClipboardCheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { email } from "@/helpers/links";

const copy = () => navigator.clipboard.writeText(email);

export function CopyButton() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);
  const [, startTransition] = useTransition();

  const onCopy = useCallback(() => {
    copy().then(() => startTransition(() => setCopied(true)));
  }, []);

  const Icon = copied ? ClipboardCheckIcon : ClipboardCopyIcon;
  const label = copied ? t("copied") : t("copy");

  return (
    <button className="button icon-button copy-button" onClick={onCopy} aria-label={label}>
      <Icon size="0.875em" strokeWidth={1.25} />
      <dialog className="tooltip" role="tooltip" open>
        {label}
      </dialog>
    </button>
  );
}
