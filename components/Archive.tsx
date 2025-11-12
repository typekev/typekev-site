import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ArchivedSiteCard } from "./archive/ArchivedSiteCard";
import { archivedSitesData } from "./archive/archivedSitesData";

export function Archive() {
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="font-bold tracking-wide px-0">
          Archive
        </Button>
      </DialogTrigger>

      <DialogContent className="auto-rows-min content-center p-3 sm:p-4 h-full sm:h-fit max-h-full max-w-full md:max-h-5/6 overflow-auto lg:max-w-4xl bg-white/70 dark:bg-black/50 backdrop-blur-sm">
        <DialogTitle className="font-mono uppercase">Archived Website Versions</DialogTitle>
        <nav className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
          {archivedSitesData.map((website, index) => (
            <li
              key={website.version}
              className="animate-in fade-in"
              style={{
                animationDuration: `${(6 + index) * 100}ms`,
              }}
            >
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                <ArchivedSiteCard website={website} />
              </a>
            </li>
          ))}
          <li className="animate-in fade-in" style={{ animationDuration: "1100ms" }}>
            <a
              href="https://github.com/typekev/typekev-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="group flex flex-col justify-center items-center justify-items-center aspect-16/11 rounded-lg border-4 bg-transparent border-black/90 dark:border-white/90">
                <svg
                  height="1792"
                  viewBox="0 0 1792 1792"
                  width="1792"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3/4 duration-500 scale-101 group-hover:scale-105 dark:fill-white"
                >
                  <path d="M704 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm640 0q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm160 0q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zm224-176q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z" />
                </svg>
                <figcaption className="sm:mb-3 text-center text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-black dark:text-white whitespace-pre">
                  <span className="hidden sm:inline">View on</span> GitHub
                </figcaption>
              </figure>
            </a>
          </li>
        </nav>
        <DialogDescription className="text-md font-semibold">
          The links above will take you to retired versions of this site, dating back to 2016.
        </DialogDescription>
        <DialogFooter>
          <DialogClose>
            <Button variant="glass">Close archive</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
