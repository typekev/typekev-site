"use client";
import { useState } from "react";
import { Chat } from "./chatbot/Chat";
import { Bot } from "./chatbot/Bot";

export function Chatbot() {
  const [isChatHidden, setIsChatHidden] = useState(true);

  const toggleChat = () => {
    setIsChatHidden((isChatHidden) => !isChatHidden);
  };

  return (
    <div id="bot">
      <Chat hidden={isChatHidden} />
      <Bot active={!isChatHidden} toggleChat={toggleChat} />
    </div>
  );
}

Chatbot.displayName = "Chatbot";
