"use client";
import { useState } from "react";

import { ClipboardEditIcon, ClipboardCheckIcon } from "lucide-react";

import { email } from "@/helpers/links";

const copy = () => navigator.clipboard.writeText(email);

export function CopyButton() {
  const [copied, setCopied] = useState(false);
  const onCopy = () => copy().then(() => setCopied(true));

  return (
    <button className="button icon-button" onClick={onCopy} aria-label="Copy email to clipboard">
      <span>
        {copied ? (
          <ClipboardCheckIcon size="1em" strokeWidth={2.5} />
        ) : (
          <ClipboardEditIcon size="1em" strokeWidth={2.5} />
        )}
      </span>
    </button>
  );
}

CopyButton.displayName = "CopyButton";
