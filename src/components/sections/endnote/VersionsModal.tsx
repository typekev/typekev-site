"use client";
import { PropsWithChildren, useEffect } from "react";

import { XIcon } from "lucide-react";

import { useIsRouteActive } from "@/hooks/useIsRouteActive";
import { Link, useRouter } from "i18n/routing";

export function VersionsModal({ children }: PropsWithChildren) {
  const active = useIsRouteActive("/versions");
  const router = useRouter();

  const close = () => router.replace("/", { scroll: false });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className={`modal-background ${!active ? "hidden" : ""}`} onClick={close}>
      <Link href="/" className="button icon-button modal-close-button" role="button" scroll={false} replace>
        <XIcon size="2.5em" strokeWidth={2} />
      </Link>
      <dialog className={`versions-modal ${!active ? "hidden" : ""}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </dialog>
    </aside>
  );
}
