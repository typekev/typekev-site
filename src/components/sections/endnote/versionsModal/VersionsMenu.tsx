import Image from "next/image";

import { useTranslations } from "next-intl";

import { Link } from "i18n/routing";

export function VersionsMenu() {
  const t = useTranslations("Endnote");
  const v = t("version");

  return (
    <nav>
      <menu className="version-links">
        <li>
          <Image src="/v4.jpeg" alt="Version 4 of typekev.com" width={2992} height={1868} />
          <Link href="https://v4.typekev.com/about/" target="_blank">
            <span className="button active">{v} 4</span>
          </Link>
        </li>
        <li>
          <Image src="/v3.jpeg" alt="Version 3 of typekev.com" width={2992} height={1868} />
          <Link href="https://v3.typekev.com/explore/" target="_blank">
            <span className="button active">{v} 3</span>
          </Link>
        </li>
        <li>
          <Image src="/v2.jpeg" alt="Version 2 of typekev.com" width={2992} height={1868} />
          <Link href="https://v2.typekev.com" target="_blank">
            <span className="button active">{v} 2</span>
          </Link>
        </li>
        <li>
          <Image src="/v1.jpeg" alt="Version 1 of typekev.com" width={2992} height={1868} />
          <Link href="https://v1.typekev.com" target="_blank">
            <span className="button active">{v} 1</span>
          </Link>
        </li>
      </menu>
    </nav>
  );
}
