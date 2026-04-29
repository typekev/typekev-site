import { Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
      <DialogContent className="gap-0 p-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <DialogHeader className="px-4 pt-3">
          <DialogTitle className="text-lg font-bold">
            <Package2 className="mr-1.5 mb-0.5 inline-block" />
            Archive
          </DialogTitle>
        </DialogHeader>
        <nav className="flex-1 p-1 sm:p-4">
          <ol className="grid max-h-[calc(100vh-9.5rem)] grid-cols-2 gap-1 overflow-x-hidden overflow-y-auto pb-1 sm:gap-1.5 lg:grid-cols-3">
            {archivedSitesData.map((website) => (
              <li key={website.version}>
                <a href={website.url} target="_blank" rel="noopener noreferrer">
                  <ArchivedSiteCard website={website} />
                </a>
              </li>
            ))}
            <li className="aspect-16/11 overflow-hidden rounded-md border border-foreground/10 duration-300 hover:border-foreground/50 sm:border-2">
              <a
                href="https://github.com/typekev/typekev-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="group flex aspect-16/11 flex-col items-center justify-center bg-black/90 text-white duration-300 hover:bg-black">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="size-3/4 scale-90 duration-300 group-hover:scale-100"
                  >
                    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                  </svg>
                  <figcaption className="-mt-1 max-w-full text-center text-sm font-semibold whitespace-pre sm:text-sm md:text-base">
                    Open GitHub Repo<span className="hidden sm:inline">sitory</span>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ol>
        </nav>
        <DialogDescription className="px-2 pb-4 text-center tracking-tight text-muted-foreground">
          The links above will take you to retired versions of this website, dating back to 2016.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
