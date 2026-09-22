import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { OscillatorProvider } from "@/contexts/OscillatorContext";

import { ProfileMedia } from "./profile/ProfileMedia";
import { Button } from "./ui/button";

export function Profile() {
  return (
    <>
      <OscillatorProvider>
        <ProfileMedia />
      </OscillatorProvider>
      <h1 className="profile-intro">
        Hi, I’m{" "}
        <em>
          <Link
            href="/coaching#my-experience"
            className="font-name font-[735] not-italic underline brightness-70 transition-colors [font-variation-settings:'SOFT'100] hover:text-accent dark:brightness-100"
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
