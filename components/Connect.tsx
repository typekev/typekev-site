import { Button } from "@/components/ui/button";

export function Connect() {
  return (
    <section aria-labelledby="connect-heading">
      <h2
        id="connect-heading"
        className="mb-6 text-md font-extrabold uppercase tracking-wide text-foreground/90"
      >
        Connect
      </h2>
      <address className="space-y-4 font-bold tracking-wide not-italic">
        <Button asChild variant="glass" className="block rounded-xl w-fit">
          <a
            href="mailto:hi@keving.me"
            aria-label="Send email to Kevin Gonzalez"
          >
            hi@keving.me
          </a>
        </Button>
        <Button asChild variant="glass" className="block rounded-xl w-fit">
          <a
            href="https://linkedin.com/in/typekev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kevin Gonzalez LinkedIn profile (opens in new tab)"
          >
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="glass" className="block rounded-xl w-fit">
          <a
            href="https://github.com/typekev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kevin Gonzalez GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
        </Button>
      </address>
    </section>
  );
}
