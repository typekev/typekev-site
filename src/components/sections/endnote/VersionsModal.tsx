"use client";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { XIcon } from "lucide-react";
import ReactDOM from "react-dom";

interface Props {
  menu: ReactNode;
}

export function VersionsModal({ menu, children }: PropsWithChildren<Props>) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(true);

  const link = (
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
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHidden(true);
      }
    };

    addEventListener("keydown", handleKeyDown);

    const modalRoot = document.getElementById("root");
    setRoot(modalRoot);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {link}
      {root
        ? ReactDOM.createPortal(
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
                {menu}
              </dialog>
            </aside>,
            root,
          )
        : null}
    </>
  );
}
