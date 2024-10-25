"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { VersionsMenu } from "./versionsModal/VersionsMenu";
import { XIcon } from "lucide-react";

export function VersionsModal({ children }: PropsWithChildren) {
  const modalRoot = document.getElementById("root");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHidden(true);
      }
    };

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!modalRoot) return null;

  return (
    <>
      <a
        className="endnote-link"
        role="button"
        data-toggle="modal"
        aria-hidden="true"
        onClick={() => setHidden(false)}
        data-text={children}
      >
        {children}
      </a>
      {ReactDOM.createPortal(
        <aside className={`modal-background ${hidden ? "hidden" : ""}`} onClick={() => setHidden(true)}>
          <button
            className="button icon-button modal-close-button"
            onClick={(e) => {
              e.stopPropagation();
              setHidden(true);
            }}
          >
            <XIcon size="2.5em" strokeWidth={2} />
          </button>
          <dialog className={`versions-modal ${hidden ? "hidden" : ""}`} onClick={(e) => e.stopPropagation()}>
            <VersionsMenu />
          </dialog>
        </aside>,
        modalRoot,
      )}
    </>
  );
}
