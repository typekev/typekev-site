import dynamic from "next/dynamic";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

import { githubUrl, linkedInUrl, xUrl } from "@/helpers/links";
import { Note } from "./endnote/Note";

const LanguageSelect = dynamic(() => import("./endnote/LanguageSelect").then((mod) => mod.LanguageSelect), {
  ssr: false,
});

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
