"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Bot } from "./chatbot/Bot";

const Chat = dynamic(() => import("./chatbot/Chat").then((mod) => mod.Chat), { ssr: false });

export function Chatbot() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = (visible?: boolean) => {
    if (window.location.hash.startsWith("#work-") && !visible) window.location.hash = "#work";

    setIsChatVisible((isChatVisible) => visible ?? !isChatVisible);
  };

  return (
    <article id="bot" className={isChatVisible ? "active" : ""}>
      <Chat visible={isChatVisible} toggleChat={toggleChat} />
      <Bot active={isChatVisible} toggleChat={toggleChat} />
    </article>
  );
}
