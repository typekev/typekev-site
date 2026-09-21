import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ArrowUpRight, CalendarDays, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

import { CoachingNav } from "./CoachingNav";
import { MobileCoachingNav } from "./MobileCoachingNav";

const bookingUrl = "https://calendar.app.google/kKChGXNWPvy2JxUN8";

export const metadata: Metadata = {
  title: "Global Career Coaching for Software Engineers | Kevin Gonzalez",
  description:
    "Personal career coaching for software engineers pursuing global opportunities, leadership, or products of their own. Practical 1-on-1 guidance from an engineering leader and founder.",
  alternates: { canonical: "https://keving.me/coaching" },
};

const career = [
  {
    place: "North America • New York",
    detail:
      "IT infrastructure and hands-on software engineering taught me how to solve real problems, earn trust, and turn technical work into business value.",
  },
  {
    place: "Belgium • Netherlands • Luxembourg",
    detail:
      "Enterprise consultancy, C-suite technical advisory, and progression to Principal AI Lead. I learned to make complex work understood, valued, and funded across borders.",
  },
  {
    place: "Southeast Asia • Philippines",
    detail:
      "Building business ventures in the Philippines widened my understanding of international teams and markets. As the founder of Symphonee AI and Scale Tiny, I build software tools that have reached thousands of active users.",
  },
  {
    place: "Global",
    detail:
      "At SES Satellites, I direct satellite yield and AI software programs and multi-million-dollar AI and cloud roadmaps. The enterprise operates across Europe, North America, Asia-Pacific, Latin America, and the Middle East.",
  },
];

const coaching = [
  {
    title: "Choose the right direction",
    paragraphs: [
      "We start with where you are and what you want to change. Together, we’ll look at your experience, strengths, priorities, and constraints, then identify the paths worth pursuing.",
      "The goal is not simply to find another role. It is to make a considered decision about what you want your career to become.",
    ],
  },
  {
    title: "Present your experience at its best",
    paragraphs: [
      "Strong experience only helps when other people can see its value.",
      "We’ll sharpen your resume, LinkedIn, portfolio, and professional story so your technical depth, impact, and leadership come through clearly.",
    ],
  },
  {
    title: "Create better opportunities",
    paragraphs: [
      "We’ll focus on opportunities that fit the direction you have chosen.",
      "That might mean identifying companies and markets, approaching recruiters and hiring managers, strengthening your network, preparing for internal progression, or working through an idea you want to turn into a product.",
    ],
  },
  {
    title: "Prepare for the moments that matter",
    paragraphs: [
      "An interview, a promotion conversation, an international offer, a compensation discussion, or the decision to build something yourself can change the direction of your career.",
      "We’ll prepare for those moments before they arrive, so you can approach them with clarity and confidence.",
    ],
  },
];

const recognition = [
  {
    id: "press",
    title: "Luxemburger Wort: Demystifying AI",
    detail:
      "Featured in Luxemburger Wort article “Learning about & Demystifying Artificial Intelligence.”",
    context:
      "Much of my work has involved making complex things easier to understand. I take the same approach to coaching: understand the situation clearly, focus on what matters, and decide what to do about it.",
    href: "https://www.wort.lu/wirtschaft/kuenstliche-intelligenz-lernen-und-entmystifizieren/1078884.html",
    link: "Read the article in Luxemburger Wort",
  },
  {
    title: "Wolves Summit: Great Pitch Contest",
    detail: "Third place and Microsoft recognition in 2021, representing EmailTree AI.",
    href: "https://www.siliconluxembourg.lu/emailtree-awarded-third-place-at-wolves-summit/",
    link: "Read the article in Silicon Luxembourg",
  },
  {
    title: "AI Academy: Luxembourg’s Most Innovative ICT Training Programme",
    detail: "Co-founded the Microsoft × Devoteam AI Academy team behind the 2019 award.",
    href: "https://www.devoteam.com/lu/news-and-pr/lai-academy-de-devoteam-luxembourg-recompensee-lors-des-ict-luxembourg-awards/",
    link: "About the award",
  },
  {
    title: "GitHub Arctic Code Vault Contributor",
    detail: "Open-source work preserved in GitHub’s Arctic Code Vault.",
    href: "https://github.com/users/typekev/achievements/arctic-code-vault-contributor",
    link: "View the GitHub achievement",
  },
];

const included = [
  "At least one private 1-on-1 call every week",
  "Career direction and professional positioning",
  "Resume, LinkedIn, portfolio, and ATS strategy",
  "International roles, relocation, and sponsorship",
  "Outreach and interview preparation",
  "Engineering leadership and career progression",
  "Product ideas and founder guidance",
  "Support between calls, without a question quota",
];

const questions = [
  {
    title: "Do I need to know exactly what I want?",
    paragraphs: [
      "No. You may have a specific goal, several possibilities in mind, or simply know that you are ready for something different.",
      "We can examine the options, understand what each would require, and decide which are worth pursuing.",
    ],
  },
  {
    title: "Is this only for engineers who want to move abroad?",
    paragraphs: [
      "No.",
      "Working internationally is a major part of my own experience, but it is only one way to take your career further.",
      "You might want to join a global company, move into engineering leadership, take on more ambitious work, build a product, or create a career that looks very different from the one you have today.",
    ],
  },
  {
    title: "Can you help with international opportunities?",
    paragraphs: [
      "Yes.",
      "We can work through target markets, companies, positioning, recruiter outreach, remote and distributed roles, relocation, sponsorship, compensation, and interviewing across different markets.",
      "The objective is not to apply everywhere. It is to understand where your experience is valuable and pursue those opportunities deliberately.",
    ],
  },
  {
    title: "Can you help if I want to build something of my own?",
    paragraphs: [
      "Yes.",
      "If you are considering a product of your own, we can work through the idea, positioning, validation, scope, technical decisions, and how it fits into the rest of your career.",
      "I build products myself, so these conversations can go well beyond conventional career advice.",
    ],
  },
  {
    title: "What should I bring to our first conversation?",
    paragraphs: [
      "Nothing formal.",
      "Bring whatever is most relevant right now: a role you want, a country you are considering, a promotion you are working toward, an idea you want to build, or simply the sense that you are ready for more.",
      "We’ll start there.",
    ],
  },
];

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
            {coaching.map((item) => (
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
            Today, I lead satellite yield and AI software programs at SES and build Symphonee AI and
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
              {career.map((step) => (
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
              {recognition.map((item) => (
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
              {[
                {
                  name: "Symphonee AI",
                  description:
                    "The AI-native recruiting platform that brings sourcing, outreach, and hiring into one workspace, automating the busywork from first search to hire.",
                  image: "/images/symphonee.jpeg",
                  href: "https://symphonee.ai/",
                },
                {
                  name: "Scale Tiny",
                  description:
                    "My software development studio, taking products from idea to launch and scaling them to thousands of users.",
                  image: "/images/scale-tiny.jpeg",
                  href: "https://scaletiny.com/",
                },
              ].map((project) => (
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
            {included.map((item) => (
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
            {questions.map((item) => (
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
