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
import { Link } from "i18n/routing";

import { VersionsModal } from "./VersionsModal";
import { VersionsMenu } from "./versionsModal/VersionsMenu";

export function Note() {
  const t = useTranslations("Endnote");

  return (
    <>
      <VersionsModal>
        <VersionsMenu />
      </VersionsModal>
      <p>
        {t.rich("text", {
          design: (chunks) => (
            <Link href={figmaUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </Link>
          ),
          ts: (chunks) => (
            <Link href={typescriptUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </Link>
          ),
          three: (chunks) => (
            <Link href={threeJsUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </Link>
          ),
          next: (chunks) => (
            <Link href={nextJsUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </Link>
          ),
          react: (chunks) => (
            <Link href={reactUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </Link>
          ),
          github: (chunks) => (
            <Link href={githubTypekevSiteUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </Link>
          ),
          versions: (chunks) => (
            <Link href="/versions" className="endnote-link" data-text={chunks} scroll={false}>
              {chunks}
            </Link>
          ),
          host: (chunks) => (
            <Link href={vercelUrl} className="endnote-link" data-text={chunks}>
              {chunks}
            </Link>
          ),
        })}
      </p>
    </>
  );
}
