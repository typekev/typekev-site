import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { OscillatorProvider } from "@/contexts/OscillatorContext";

import { MusicPad } from "./profile/MusicPad";
import { ProfileBadge } from "./profile/ProfileBadge";
import { Button } from "./ui/button";

export function Profile() {
  return (
    <>
      <section
        aria-label="About Kevin"
        className="relative flex w-full min-w-0 shrink-0 flex-col items-center gap-6"
      >
        <OscillatorProvider>
          <ProfileBadge />
          <MusicPad />
        </OscillatorProvider>
      </section>
      <h1 className="profile-intro">
        Hi, I’m{" "}
        <em className="text-accent brightness-70 dark:brightness-100">
          <Link
            href="/coaching#my-experience"
            className="font-name text-[0.98em] font-[650] tracking-tighter not-italic underline transition-opacity hover:opacity-85"
          >
            Kevin Gonzalez
          </Link>
          .
        </em>{" "}
        I&nbsp;help software engineers build global careers, turn ideas into products, and lead
        engineering teams.
      </h1>
      <section className="container grid justify-items-center gap-5 lg:justify-items-end">
        <section
          aria-label="Career coaching"
          className="rounded-r-2xl border-l-4 border-foreground/30 bg-muted/40 px-6 py-4 backdrop-blur-xl"
        >
          <p className="text-xl font-medium text-foreground md:text-2xl">
            <em className="font-semibold not-italic">Let’s take your career further together.</em>{" "}
            I&nbsp;coach&nbsp;software engineers who want to work inter&shy;nationally, grow into
            leadership, or build something of their own.
          </p>
        </section>
        <Button
          variant="glass"
          size="lg"
          className="h-11 w-1/2 gap-1.5 text-base font-semibold tracking-wide lg:w-auto"
          asChild
        >
          <Link href="/coaching">
            Start here
            <ArrowUpRight className="size-4.5 stroke-[2.5]" aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </>
  );
}
