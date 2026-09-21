import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ArrowUpRight, CalendarDays, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

import { careerData } from "./careerData";
import { coachingData } from "./coachingData";
import { CoachingNav } from "./CoachingNav";
import { includedData } from "./includedData";
import { MobileCoachingNav } from "./MobileCoachingNav";
import { questionsData } from "./questionsData";
import { recognitionData } from "./recognitionData";
import { venturesData } from "./venturesData";

const bookingUrl = "https://calendar.app.google/kKChGXNWPvy2JxUN8";

export const metadata: Metadata = {
  title: "Global Career Coaching for Software Engineers | Kevin Gonzalez",
  description:
    "Personal career coaching for software engineers pursuing global opportunities, leadership, or products of their own. Practical 1-on-1 guidance from an engineering leader and founder.",
  alternates: { canonical: "https://keving.me/coaching" },
};

export default function Coaching() {
  return (
    <>
      <MobileCoachingNav />
      <header className="coaching-header relative z-1 mx-auto w-full max-w-5xl min-w-0 lg:col-span-2">
        <Link
          href="/"
          className="hidden min-h-11 items-center gap-2 text-sm font-medium underline-offset-4 hover:underline lg:inline-flex"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to keving.me
        </Link>
        <hgroup className="mt-10 text-center sm:mt-14">
          <h1 className="coaching-hero-title mx-auto max-w-5xl">
            Build a software career beyond borders.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-pretty text-foreground/80 sm:text-2xl">
            <strong className="font-semibold text-foreground">1-on-1 coaching</strong> for software
            engineers who want more from their careers. Work internationally, grow into leadership,
            or build something of your own.
          </p>
        </hgroup>
        <figure className="mx-auto mt-8 flex max-w-lg flex-col items-center gap-3 text-center sm:mt-10">
          <Image
            src="/images/kevin.jpeg"
            alt="Kevin Gonzalez"
            width={80}
            height={80}
            className="size-20 rounded-full border-2 border-foreground/15 object-cover"
            priority
          />
          <figcaption>
            <p className="text-lg font-bold">Kevin Gonzalez</p>
            <p className="mt-1 text-base/relaxed text-foreground/75">
              Engineering leader and founder. 14+ years across three continents.
            </p>
          </figcaption>
        </figure>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="coaching-main relative z-1 mx-auto -mt-10 grid w-full max-w-3xl min-w-0 grid-cols-1 gap-16 sm:gap-24 lg:col-span-2"
      >
        <CoachingNav />
        <section id="the-coaching" aria-labelledby="coaching-heading" className="coaching-chapter">
          <h2 id="coaching-heading" className="coaching-title">
            Take your career further.
          </h2>
          <p>
            There is more than one way to build a great career in software. You might want to work
            in another country, take on greater responsibility, or use your experience to create
            something of your own.
          </p>
          <p>
            You’ll work directly with me in private 1-on-1 sessions, shaped around your goals and
            circumstances. Together, we’ll turn that ambition into a clear direction, stronger
            positioning, and deliberate action.
          </p>
          <ol className="coaching-topics">
            {coachingData.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
          <aside aria-labelledby="between-calls" className="coaching-note">
            <h3 id="between-calls">Support between sessions</h3>
            <p>Careers do not move neatly from one weekly call to the next.</p>
            <p>
              If a recruiter replies, an interview comes up, an offer lands, or you want another
              perspective before making a decision, reach out. There is no fixed allowance of
              questions to keep track of.
            </p>
          </aside>
        </section>

        <section
          id="my-experience"
          aria-labelledby="experience-heading"
          className="coaching-chapter"
        >
          <h2 id="experience-heading" className="coaching-title">
            Guidance grounded in experience.
          </h2>
          <p>
            I’ve built my career across New York, the Benelux region, and Southeast Asia, from
            hands-on software engineering and consulting to AI, engineering leadership, and global
            program responsibility.
          </p>
          <p>
            That experience has meant entering new markets, working across cultures, taking on
            broader responsibility, leading engineers, and building products from the ground up.
          </p>
          <p>
            Today, I lead satellite yield and AI software programs at SES and run Symphonee AI and
            Scale Tiny.
          </p>
          <p>
            I bring that perspective to our work together. You are not getting a generic career
            framework. You are working with someone who hires engineers, leads technical teams,
            builds products, and has navigated many of these decisions firsthand.
          </p>

          <section aria-labelledby="career-heading" className="coaching-subsection">
            <h3 id="career-heading">My career across three continents</h3>
            <ol className="coaching-timeline">
              {careerData.map((step) => (
                <li key={step.place}>
                  <h4>{step.place}</h4>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="recognition-heading" className="coaching-subsection">
            <h3 id="recognition-heading">Press, recognition and open-source work</h3>
            <ul className="coaching-recognition">
              {recognitionData.map((item) => (
                <li key={item.title} id={item.id} className="scroll-mt-24 lg:scroll-mt-28">
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                  {item.context && <p>{item.context}</p>}
                  <a
                    className="text-link inline-flex min-h-11 items-center gap-2 text-sm font-medium"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="ventures-heading" className="coaching-subsection">
            <h3 id="ventures-heading">Startups I founded</h3>
            <ul className="mt-6 grid grid-flow-dense gap-4">
              {venturesData.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[5rem_1fr] items-center gap-x-5 gap-y-3 overflow-hidden rounded-2xl border border-foreground/15 bg-card/60 p-4 transition-colors hover:bg-card/90 sm:grid-cols-[6rem_1fr] sm:p-5"
                  >
                    <Image
                      src={project.image}
                      alt=""
                      width={96}
                      height={80}
                      className="h-16 w-20 shrink-0 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none sm:row-span-2 sm:h-20 sm:w-24"
                    />
                    <h4 className="flex min-w-0 items-center justify-between gap-3">
                      {project.name}
                      <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
                    </h4>
                    <p className="col-span-2 text-base/relaxed text-foreground/80 sm:col-span-1 sm:col-start-2">
                      {project.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section
          id="start-coaching"
          aria-labelledby="offer-heading"
          className="coaching-offer coaching-chapter"
        >
          <h2 id="offer-heading" className="coaching-title">
            Personal coaching for software engineers
          </h2>
          <p>
            Dedicated time to work on where your career goes next, with direct support when
            opportunities and decisions arise.
          </p>
          <section
            aria-label="Launch pricing"
            className="my-8 border-y border-foreground/15 py-7 sm:my-10 sm:py-8"
          >
            <p className="font-semibold">Launch offer</p>
            <p className="mt-1 text-base text-foreground/70">
              Normally <s>$199/month</s>
            </p>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <strong className="text-6xl font-bold tracking-tight tabular-nums sm:text-7xl">
                $99
              </strong>
              <small className="text-base text-foreground/75">USD / month</small>
            </p>
          </section>
          <ul className="space-y-4 text-base/relaxed sm:text-lg/relaxed">
            {includedData.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 size-5 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="lg"
            className="mt-8 min-h-12 w-full px-3! text-base sm:mt-10 sm:w-auto sm:px-6!"
          >
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <CalendarDays className="size-5" aria-hidden="true" />
              Book a free conversation
            </a>
          </Button>
          <p className="mt-5! text-base/relaxed!">
            Tell me where you are in your career and where you would like it to take you. We’ll talk
            through your goals, what may be possible, and whether I am the right person to help.
          </p>
        </section>

        <section aria-labelledby="questions-heading" className="coaching-chapter">
          <h2 id="questions-heading" className="coaching-title">
            A few things you might be wondering.
          </h2>
          <ul className="coaching-topics">
            {questionsData.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ul>
          <p className="border-t border-foreground/15 pt-7">
            Have another question?{" "}
            <a className="text-link font-semibold" href="mailto:hi@keving.me">
              Email me at hi@keving.me.
            </a>
          </p>
        </section>
      </main>

      <footer className="relative z-1 mx-auto my-4 w-full max-w-3xl text-center lg:col-span-2 lg:text-right">
        <Button asChild variant="link" size="sm" className="px-0 font-bold tracking-wide">
          <Link href="/">Back to keving.me</Link>
        </Button>
        <p className="text-sm font-bold tracking-wide uppercase">
          © Kevin Gonzalez {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
