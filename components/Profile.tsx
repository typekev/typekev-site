import { OscillatorProvider } from "@/contexts/OscillatorContext";

import { MusicPad } from "./profile/MusicPad";
import { ProfileBadge } from "./profile/ProfileBadge";
import { Chat } from "./Chat";

export function Profile() {
  return (
    <>
      <h1 className="sr-only">Kevin Gonzalez</h1>
      <section className="relative flex flex-col lg:flex-row shrink-0 items-center gap-2 lg:gap-10 -mb-4 lg:-mb-8 -mt-4 lg:mt-0">
        <OscillatorProvider>
          <ProfileBadge />
          <MusicPad />
        </OscillatorProvider>
      </section>
      <h2 className="text-balance text-5xl font-black tracking-tight text-foreground text-center lg:text-left md:text-7xl lg:text-6xl">
        I build meaningful AI products and lead high-impact teams.
      </h2>
      <section className="grid justify-items-end gap-3">
        <blockquote className="border-l-4 border-foreground/30 pl-8 bg-muted/30 backdrop-blur-xl rounded-r-2xl py-4 pr-6 glass-strong">
          <p className="text-2xl font-medium leading-relaxed text-foreground">
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
