"use client";
import dynamic from "next/dynamic";
import { useState, useTransition, useCallback } from "react";

import { useHash } from "@/hooks/useHash";
import { useRouter } from "i18n/routing";

import { Bot } from "./chatbot/Bot";

const Chat = dynamic(() => import("./chatbot/Chat").then((mod) => mod.Chat), { ssr: false });

export function Chatbot() {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const hash = useHash();

  const toggleChat = useCallback(
    (visible: boolean | undefined) => {
      startTransition(() => {
        if (hash.startsWith("#work-") && !visible) router.replace("/#work");
        setIsChatVisible((prev) => visible ?? !prev);
      });
    },
    [hash, router],
  );

  return (
    <article id="bot" className={isChatVisible ? "active" : ""}>
      <Chat visible={isChatVisible} toggleChat={toggleChat} />
      <Bot active={isChatVisible} toggleChat={toggleChat} />
    </article>
  );
}
