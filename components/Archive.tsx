import { SquareX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ArchivedSiteCard } from "./archive/ArchivedSiteCard";
import { archivedSitesData } from "./archive/archivedSitesData";

export function Archive() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="px-0 font-bold tracking-wide">
          Archive
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="bg-background/80 backdrop-blur-xs lg:max-w-3xl xl:max-w-4xl"
      >
        <DialogTitle className="flex items-center justify-between font-mono font-semibold tracking-wide text-foreground/80 uppercase">
          Archived Website Versions
          <DialogClose className="cursor-pointer">
            <SquareX />
          </DialogClose>
        </DialogTitle>
        <nav className="flex-1">
          <ol className="grid max-h-[calc(100vh-9.5rem)] grid-cols-2 gap-1 overflow-x-hidden overflow-y-auto py-1.5 lg:grid-cols-3">
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
            <li className="animate-in rounded-md bg-white/70 animation-duration-1100 fade-in dark:bg-black/60">
              <a
                href="https://github.com/typekev/typekev-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="group flex aspect-16/11 flex-col items-center justify-center overflow-hidden rounded-md border-3 border-foreground/10 duration-500 hover:border-foreground/50">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="size-3/4 scale-100 duration-500 group-hover:scale-110"
                  >
                    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                  </svg>
                  <figcaption className="md:text-md -mt-1 max-w-full text-center text-xs font-extrabold whitespace-pre text-foreground sm:text-sm lg:text-lg">
                    View on GitHub
                  </figcaption>
                </figure>
              </a>
            </li>
          </ol>
        </nav>
        <DialogDescription className="text-md font-medium">
          The links above will take you to retired versions of this website, dating back to 2016.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
