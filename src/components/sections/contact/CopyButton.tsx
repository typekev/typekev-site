"use client";
import { useState } from "react";

import { CopyIcon, CopyCheckIcon } from "lucide-react";

import { email } from "@/helpers/links";

const copy = () => navigator.clipboard.writeText(email);

export function CopyButton() {
  const [copied, setCopied] = useState(false);
  const onCopy = () => copy().then(() => setCopied(true));

  const Icon = copied ? CopyCheckIcon : CopyIcon;

  return (
    <button className="button icon-button" onClick={onCopy} aria-label="Copy email to clipboard">
      <span>
        <Icon size="0.875em" strokeWidth={2.25} />
      </span>
    </button>
  );
}

CopyButton.displayName = "CopyButton";
