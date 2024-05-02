"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  hide: () => void;
  hidden: boolean;
}

export function VersionsModal({ hide, hidden }: Props) {
  const modalRoot = document.getElementById("root");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hide();
      }
    };

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <aside className={`modal-background ${hidden ? "hidden" : ""}`} onClick={hide}>
      <dialog className={`versions-modal ${hidden ? "hidden" : ""}`} onClick={(e) => e.stopPropagation()}>
        <nav>
          <menu className="version-links">
            <li>
              <iframe src="https://v4.typekev.com/about/" />
              <a href="https://v4.typekev.com/about/" target="_blank">
                Version 4
              </a>
            </li>
            <li>
              <iframe src="https://v3.typekev.com" />
              <a href="https://v3.typekev.com" target="_blank">
                Version 3
              </a>
            </li>
            <li>
              <iframe src="https://v2.typekev.com" />
              <a href="https://v2.typekev.com" target="_blank">
                Version 2
              </a>
            </li>
            <li>
              <iframe src="https://v1.typekev.com" />
              <a href="https://v1.typekev.com" target="_blank">
                Version 1
              </a>
            </li>
          </menu>
        </nav>
      </dialog>
    </aside>,
    modalRoot,
  );
}

VersionsModal.displayName = "VersionsModal";
