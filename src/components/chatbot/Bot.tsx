"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, PropsWithChildren } from "react";

import { BotIcon } from "lucide-react";

import { Link, usePathname } from "i18n/routing";

export function Bot({ children }: PropsWithChildren) {
  const [chatting, setChatting] = useState(false);
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    const chat = params.get("chat");
    setChatting(chat !== null);
  }, [params]);

  return (
    <article id="bot" className={chatting ? "chatting" : ""}>
      {children}
      <Link
        href={chatting ? pathname.split("?")[0] : "?chat"}
        className={`button icon-button bot-button${chatting ? " active" : ""}`}
        scroll={false}
        aria-label="Toggle chat box"
      >
        <BotIcon strokeWidth={2} />
      </Link>
    </article>
  );
}
