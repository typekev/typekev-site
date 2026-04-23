"use client";

import { type ComponentPropsWithoutRef, lazy, Suspense } from "react";

import { Loader, MessageCircleMore, MessageSquareMore } from "lucide-react";

import { Button } from "./ui/button";

const ChatDialog = lazy(() => import("./chat/ChatDialog"));

const ChatButton = (props: ComponentPropsWithoutRef<typeof Button>) => (
  <Button
    variant="glass-tinted"
    size="lg"
    className="gap-1.5 text-base font-medium tracking-wide text-accent *:brightness-75 hover:saturate-100 dark:saturate-125 dark:*:brightness-125"
    aria-label="Open chat"
    {...props}
  >
    {props.disabled ? (
      <>
        <em className="not-italic">
          Loading <strong className="font-semibold">Kevin&nbsp;AI</strong>...
        </em>
        <Loader className="size-5 animate-spin animation-duration-3000" />
      </>
    ) : (
      <>
        <em className="not-italic">
          Talk to <strong className="font-semibold">Kevin&nbsp;AI</strong>
        </em>
        <MessageCircleMore className="size-4.25 stroke-[2.5]" />
      </>
    )}
  </Button>
);

export function Chat() {
  return (
    <Suspense fallback={<ChatButton disabled />}>
      <ChatDialog>
        <ChatButton />
      </ChatDialog>
    </Suspense>
  );
}
