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

export default function Endnote() {
  const t = useTranslations("Endnote");

  return (
    <footer id="endnote">
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
            <span className="endnote-link" data-text={chunks}>
              {chunks}
            </span>
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
