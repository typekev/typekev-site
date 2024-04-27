"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Chat = dynamic(() => import("./chatbot/Chat").then((mod) => mod.Chat), { ssr: false });
const Bot = dynamic(() => import("./chatbot/Bot").then((mod) => mod.Bot), { ssr: false });

export function Chatbot() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = (visible?: boolean) => {
    setIsChatVisible((isChatVisible) => visible ?? !isChatVisible);
  };

  return (
    <div id="bot">
      <Chat visible={isChatVisible} toggleChat={toggleChat} />
      <Bot active={isChatVisible} toggleChat={toggleChat} />
    </div>
  );
}

Chatbot.displayName = "Chatbot";
