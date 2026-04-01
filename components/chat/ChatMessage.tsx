import type { StructuredResponse } from "@/lib/chat";
import { cn } from "@/lib/utils";

import { ChatActions } from "./ChatActions";

export type ChatMessageData =
  | { role: "user"; text: string; timestamp: number }
  | { role: "bot"; response: StructuredResponse };

interface Props {
  message: ChatMessageData;
  onAction?: (action: StructuredResponse["actions"][number]) => void;
}

export function ChatMessage({ message, onAction }: Props) {
  if (message.role === "user") {
    return (
      <li className="relative flex justify-end">
        <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-accent saturate-75 px-4 py-2 text-primary-foreground font-medium text-sm">
          {message.text}
        </p>
        <time className="absolute -bottom-4.25 right-0.5 text-[11px] tracking-tighter font-medium text-muted-foreground">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </time>
      </li>
    );
  }

  const { response } = message;

  return (
    <li className="flex justify-start">
      <article className="max-w-[85%] space-y-3">
        <section className="rounded-2xl rounded-bl-sm bg-muted px-4 py-3 text-sm wrap-break-word max-w-fit">
          {response.content.map((section, i) => (
            <section key={i}>
              {section.title && <p className="font-semibold mb-1">{section.title}</p>}
              <p className={cn(i > 0 && "mt-2")}>{section.text}</p>
            </section>
          ))}
        </section>
        {response.actions.length > 0 && (
          <ChatActions actions={response.actions} onAction={onAction} />
        )}
      </article>
    </li>
  );
}
