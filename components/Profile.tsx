import { Suspense } from "react";

import { MusicPad } from "./profile/MusicPad";
import { ProfileImage } from "./profile/ProfileImage";
import { ProfileImageSkeleton } from "./profile/ProfileImageSkeleton";

export function Profile() {
  return (
    <>
      <section className="relative flex flex-col lg:flex-row shrink-0 items-center gap-2 lg:gap-10 -mb-4 lg:-mb-8 -mt-4 lg:mt-0">
        <Suspense fallback={<ProfileImageSkeleton />}>
          <ProfileImage />
          <MusicPad />
        </Suspense>
      </section>
      <h1 className="text-balance text-5xl font-black tracking-tight text-foreground text-center lg:text-left md:text-7xl lg:text-6xl">
        I build meaningful AI products and lead high-impact teams.
      </h1>
      <blockquote className="border-l-4 border-foreground/30 pl-8 bg-muted/30 backdrop-blur-xl rounded-r-2xl py-4 pr-6 glass-strong">
        <p className="text-2xl font-medium leading-relaxed text-foreground">
          Engineering leader and technology executive from New York City.
          Co-founder & CTO of Symphonee. Founder of Scale Tiny. Leading
          Satellite Yield & AI Product Engineering at SES.
        </p>
      </blockquote>
    </>
  );
}
