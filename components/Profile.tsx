import { OscillatorProvider } from "@/contexts/OscillatorContext";

import { Chat } from "./Chat";
import { MusicPad } from "./profile/MusicPad";
import { ProfileBadge } from "./profile/ProfileBadge";

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
      <section className="grid justify-items-end gap-3">
        <blockquote className="glass-strong rounded-r-2xl border-l-4 border-foreground/30 bg-muted/30 py-4 pr-6 pl-8 backdrop-blur-xl">
          <p className="text-2xl/relaxed font-medium text-foreground">
            Engineering leader and technology executive from New York City. Co-founder & CTO of
            Symphonee AI. Founder of Scale Tiny. Driving Satellite Yield & AI software programs at
            SES.
          </p>
        </blockquote>
        <Chat />
      </section>
    </>
  );
}
