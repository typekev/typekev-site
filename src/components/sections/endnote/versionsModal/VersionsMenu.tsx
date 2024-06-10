import Image from "next/image";
import v1Img from "./v1.jpeg";
import v2Img from "./v2.jpeg";
import v3Img from "./v3.jpeg";
import v4Img from "./v4.jpeg";

export function VersionsMenu() {
  return (
    <nav>
      <menu className="version-links">
        <li>
          <Image src={v4Img} alt="Version 4 of typekev.com" />
          <a href="https://v4.typekev.com/about/" target="_blank">
            Version 4
          </a>
        </li>
        <li>
          <Image src={v3Img} alt="Version 3 of typekev.com" />
          <a href="https://v3.typekev.com/explore/" target="_blank">
            Version 3
          </a>
        </li>
        <li>
          <Image src={v2Img} alt="Version 2 of typekev.com" />
          <a href="https://v2.typekev.com" target="_blank">
            Version 2
          </a>
        </li>
        <li>
          <Image src={v1Img} alt="Version 1 of typekev.com" />
          <a href="https://v1.typekev.com" target="_blank">
            Version 1
          </a>
        </li>
      </menu>
    </nav>
  );
}
