"use client";

import { type ComponentPropsWithoutRef, lazy, Suspense } from "react";

import { Loader, MessageCircleMore } from "lucide-react";

import { Button } from "./ui/button";

const ChatDialog = lazy(() => import("./chat/ChatDialog"));

const ChatButton = (props: ComponentPropsWithoutRef<typeof Button>) => (
  <Button
    variant="link"
    className="h-10 w-fit gap-2.5 px-0! text-base text-foreground"
    aria-label="Open chat with Kevin AI"
    {...props}
  >
    {props.disabled ? (
      <>
        <Loader className="size-5 animate-spin animation-duration-3000" />
        <em className="not-italic">
          Loading <strong className="font-semibold">Kevin&nbsp;AI</strong>...
        </em>
      </>
    ) : (
      <>
        <MessageCircleMore className="size-5" />
        <em className="not-italic">
          Talk to <strong className="font-semibold">Kevin&nbsp;AI</strong>
        </em>
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
