"use client";
import { useState } from "react";
import { Chat } from "./chatbot/Chat";
import { Bot } from "./chatbot/Bot";

export function Chatbot() {
  const [isChatHidden, setIsChatHidden] = useState(true);

  const toggleChat = (hide?: boolean) => {
    setIsChatHidden((isChatHidden) => hide ?? !isChatHidden);
  };

  return (
    <div id="bot">
      <Chat hidden={isChatHidden} toggleChat={toggleChat} />
      <Bot active={!isChatHidden} toggleChat={toggleChat} />
    </div>
  );
}

Chatbot.displayName = "Chatbot";
