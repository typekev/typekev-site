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
          <a href={githubUrl}>
            <SiGithub />
          </a>
        </li>
        <li className="button">
          <a href={linkedInUrl}>
            <SiLinkedin />
          </a>
        </li>
        <li className="button">
          <a href={xUrl}>
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
