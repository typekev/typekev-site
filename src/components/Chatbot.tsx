"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { BotIcon } from "lucide-react";

import { Link, usePathname } from "i18n/routing";

const Chat = dynamic(() => import("./chatbot/Chat").then((mod) => mod.Chat), { ssr: false });

export function Chatbot() {
  const [init, setInit] = useState(false);
  const [chatting, setChatting] = useState(false);
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    const chat = params.get("chat");
    setChatting(chat !== null);
  }, [params]);

  useEffect(() => {
    if (!init && chatting) setInit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatting]);

  return (
    <article id="bot" className={chatting ? "chatting" : ""}>
      {init && <Chat />}
      <Link
        href={chatting ? pathname.split("?")[0] : "?chat"}
        className={`button icon-button bot-button${chatting ? " active" : ""}`}
        scroll={false}
        aria-label="Toggle chat box"
      >
        <BotIcon strokeWidth={1.75} />
      </Link>
    </article>
  );
}
