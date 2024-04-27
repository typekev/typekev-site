"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

import {
  figmaUrl,
  githubTypekevSiteUrl,
  nextJsUrl,
  reactUrl,
  threeJsUrl,
  typescriptUrl,
  vercelUrl,
} from "@/helpers/links";

const VersionsModal = dynamic(() => import("./VersionsModal").then((mod) => mod.VersionsModal), { ssr: false });

export function Note() {
  const t = useTranslations("Endnote");
  const [areVersionsHidden, setAreVersionsHidden] = useState(true);

  const toggleVersionsModal = (hide?: boolean) => {
    setAreVersionsHidden((areVersionsHidden) => hide ?? !areVersionsHidden);
  };

  return (
    <>
      <VersionsModal hide={() => toggleVersionsModal(true)} hidden={areVersionsHidden} />
      <p>
        {t.rich("text", {
          design: (chunks) => (
            <a href={figmaUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </a>
          ),
          ts: (chunks) => (
            <a href={typescriptUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </a>
          ),
          three: (chunks) => (
            <a href={threeJsUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </a>
          ),
          next: (chunks) => (
            <a href={nextJsUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </a>
          ),
          react: (chunks) => (
            <a href={reactUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </a>
          ),
          github: (chunks) => (
            <a href={githubTypekevSiteUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </a>
          ),
          versions: (chunks) => (
            <a href="#endnote" className="endnote-link" data-text={chunks} onClick={() => toggleVersionsModal()}>
              {chunks}
            </a>
          ),
          host: (chunks) => (
            <a href={vercelUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </a>
          ),
        })}
      </p>
    </>
  );
}

Note.displayName = "Note";
