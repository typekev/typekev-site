"use client";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { useTranslations } from "next-intl";

import {
  figmaUrl,
  githubTypekevSiteUrl,
  githubUrl,
  linkedInUrl,
  nextJsUrl,
  reactUrl,
  threeJsUrl,
  typescriptUrl,
  vercelUrl,
  xUrl,
} from "@/helpers/links";
import { VersionsModal } from "./endnote/VersionsModal";
import { useState } from "react";

export default function Endnote() {
  const t = useTranslations("Endnote");
  const [areVersionsHidden, setAreVersionsHidden] = useState(true);

  const toggleVersionsModal = (hide?: boolean) => {
    setAreVersionsHidden((areVersionsHidden) => hide ?? !areVersionsHidden);
  };

  return (
    <footer id="endnote">
      <VersionsModal hide={() => toggleVersionsModal(true)} hidden={areVersionsHidden} />
      <p>
        <span className="social-links">
          <a href={githubUrl}>
            <SiGithub />
          </a>
          <a href={linkedInUrl}>
            <SiLinkedin />
          </a>
          <a href={xUrl}>
            <SiX />
          </a>
        </span>
        <br />
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
        <br />
        <br />
        <small className="endnote-link">typekev © {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
}
