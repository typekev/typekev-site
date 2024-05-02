import dynamic from "next/dynamic";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

import { githubUrl, linkedInUrl, xUrl } from "@/helpers/links";

const Note = dynamic(() => import("./endnote/Note").then((mod) => mod.Note), { ssr: false });

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
      <small className="endnote-link">typekev © {new Date().getFullYear()}</small>
    </footer>
  );
}
