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
        <nav>
          <ol className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
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
                <figure className="group flex flex-col justify-center items-center justify-items-center aspect-16/11 overflow-hidden rounded-lg border-4 bg-transparent border-black/90 dark:border-white/90">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="size-3/4 scale-100 group-hover:scale-105 duration-500"
                  >
                    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                  </svg>
                  <figcaption className="max-w-full -mt-1 text-center text-xs sm:text-sm md:text-md lg:text-lg font-black text-black dark:text-white whitespace-pre">
                    View on GitHub
                  </figcaption>
                </figure>
              </a>
            </li>
          </ol>
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
