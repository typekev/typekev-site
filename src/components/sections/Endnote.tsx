import dynamic from "next/dynamic";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

import { githubUrl, linkedInUrl, xUrl } from "@/helpers/links";

const Note = dynamic(() => import("./endnote/Note").then((mod) => mod.Note), { ssr: false });

export default function Endnote() {
  return (
    <footer id="endnote">
      <ul className="social-links">
        <li>
          <a href={githubUrl}>
            <SiGithub />
          </a>
        </li>
        <li>
          <a href={linkedInUrl}>
            <SiLinkedin />
          </a>
        </li>
        <li>
          <a href={xUrl}>
            <SiX />
          </a>
        </li>
      </ul>
      <Note />
      <small className="endnote-link">typekev © {new Date().getFullYear()}</small>
    </footer>
  );
}
