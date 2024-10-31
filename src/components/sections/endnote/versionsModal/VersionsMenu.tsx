import Image from "next/image";

import { useTranslations } from "next-intl";

import v1Img from "./v1.jpeg";
import v2Img from "./v2.jpeg";
import v3Img from "./v3.jpeg";
import v4Img from "./v4.jpeg";

export function VersionsMenu() {
  const t = useTranslations("Endnote");
  const v = t("version")

  return (
    <nav>
      <menu className="version-links">
        <li>
          <Image src={v4Img} alt="Version 4 of typekev.com" />
          <a href="https://v4.typekev.com/about/" target="_blank">
            <span className="button active">{v} 4</span>
          </a>
        </li>
        <li>
          <Image src={v3Img} alt="Version 3 of typekev.com" />
          <a href="https://v3.typekev.com/explore/" target="_blank">
            <span className="button active">{v} 3</span>
          </a>
        </li>
        <li>
          <Image src={v2Img} alt="Version 2 of typekev.com" />
          <a href="https://v2.typekev.com" target="_blank">
            <span className="button active">{v} 2</span>
          </a>
        </li>
        <li>
          <Image src={v1Img} alt="Version 1 of typekev.com" />
          <a href="https://v1.typekev.com" target="_blank">
            <span className="button active">{v} 1</span>
          </a>
        </li>
      </menu>
    </nav>
  );
}
