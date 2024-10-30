import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

import { githubUrl, linkedInUrl, xUrl } from "@/helpers/links";

import { LanguageSelect } from "./endnote/LanguageSelect";
import { Note } from "./endnote/Note";

export default function Endnote() {
  return (
    <footer id="endnote">
      <menu className="social-links">
        <li className="button">
          <a href={githubUrl} aria-label="View my GitHub profile">
            <SiGithub />
          </a>
        </li>
        <li className="button">
          <a href={linkedInUrl} aria-label="View my LinkedIn profile">
            <SiLinkedin />
          </a>
        </li>
        <li className="button">
          <a href={xUrl} aria-label="View my X (formerly known as Twitter) profile">
            <SiX />
          </a>
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
