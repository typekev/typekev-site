"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { VersionsMenu } from "./versionsModal/VersionsMenu";
import { XIcon } from "lucide-react";

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
      <button
        className="button icon-button modal-close-button"
        onClick={(e) => {
          e.stopPropagation();
          hide();
        }}
      >
        <XIcon size="2.5em" strokeWidth={2} />
      </button>
      <dialog className={`versions-modal ${hidden ? "hidden" : ""}`} onClick={(e) => e.stopPropagation()}>
        <VersionsMenu />
      </dialog>
    </aside>,
    modalRoot,
  );
}
