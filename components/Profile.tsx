import { CalendarDays } from "lucide-react";

import { OscillatorProvider } from "@/contexts/OscillatorContext";

import { Chat } from "./Chat";
import { MusicPad } from "./profile/MusicPad";
import { ProfileBadge } from "./profile/ProfileBadge";
import { Button } from "./ui/button";

export function Profile() {
  return (
    <>
      <h1 className="sr-only">Kevin Gonzalez</h1>
      <section className="relative -my-4 flex shrink-0 flex-col items-center gap-2 lg:mt-0 lg:-mb-8 lg:flex-row lg:gap-10">
        <OscillatorProvider>
          <ProfileBadge />
          <MusicPad />
        </OscillatorProvider>
      </section>
      <h2 className="text-center text-5xl font-black tracking-tight text-balance text-foreground md:text-7xl lg:text-left lg:text-6xl">
        I build meaningful AI products and lead high-impact teams.
      </h2>
      <section className="container grid justify-items-center gap-4 md:justify-items-end">
        <blockquote className="glass-strong rounded-r-2xl border-l-4 border-foreground/30 bg-muted/30 py-4 pr-6 pl-8 backdrop-blur-xl">
          <p className="text-xl font-medium text-foreground md:text-2xl/normal">
            Engineering leader and technology executive based in Luxembourg. Co-founder & CTO of
            Symphonee AI. Founder of Scale Tiny. Driving Satellite Yield & AI software programs at
            SES.
          </p>
        </blockquote>
        <menu className="flex gap-3">
          <Button
            variant="glass"
            size="lg"
            className="gap-1.5 text-base font-medium tracking-wide"
            aria-label="Book a call with Kevin Gonzalez"
            asChild
          >
            <a
              href="https://calendar.app.google/FAbR9Ngii1aK6qcA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
              <CalendarDays className="size-4.5" />
            </a>
          </Button>
          <Chat />
        </menu>
      </section>
    </>
  );
}
