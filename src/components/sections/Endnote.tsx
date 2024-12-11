import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

import { githubUrl, linkedInUrl, xUrl } from "@/helpers/links";
import { Link } from "i18n/routing";

import { LanguageSelect } from "./endnote/LanguageSelect";
import { Note } from "./endnote/Note";

export default function Endnote() {
  return (
    <footer id="endnote">
      <menu className="social-links">
        <li className="button">
          <Link href={githubUrl} aria-label="View my GitHub profile">
            <SiGithub />
          </Link>
        </li>
        <li className="button">
          <Link href={linkedInUrl} aria-label="View my LinkedIn profile">
            <SiLinkedin />
          </Link>
        </li>
        <li className="button">
          <Link href={xUrl} aria-label="View my X (formerly known as Twitter) profile">
            <SiX />
          </Link>
        </li>
      </menu>
      <Note />
      <small className="endnote-link">
        <span>typekev © {new Date().getFullYear()}</span>
        <LanguageSelect />
      </small>
    </footer>
  );
}
