"use client";

import { type ComponentPropsWithoutRef, lazy, Suspense } from "react";

import { BotMessageSquare, Loader } from "lucide-react";

import { Button } from "./ui/button";

const ChatDialog = lazy(() => import("./chat/ChatDialog"));

const ChatButton = (props: ComponentPropsWithoutRef<typeof Button>) => (
  <Button
    variant="glass-tinted"
    size="lg-icon"
    className="sm:size-13.5 saturate-75 dark:saturate-125 hover:saturate-100"
    aria-label="Open chat"
    {...props}
  >
    {props.disabled ? (
      <Loader className="size-6.5 sm:size-7.5 text-accent brightness-75 dark:brightness-125 animate-spin animation-duration-3000" />
    ) : (
      <BotMessageSquare className="size-6.5 sm:size-7.5 text-accent brightness-75 dark:brightness-125" />
    )}
  </Button>
);

export function Chat() {
  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <Suspense fallback={<ChatButton disabled />}>
        <ChatDialog>
          <ChatButton />
        </ChatDialog>
      </Suspense>
    </aside>
  );
}
