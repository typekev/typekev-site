import Image from "next/image";

import { ArchivedSite } from "@/types/types";

interface Props {
  website: ArchivedSite;
}

export function ArchivedSiteCard({ website }: Props) {
  return (
    <figure className="group relative flex aspect-16/11 overflow-hidden rounded-md border-3 border-foreground/10 duration-500 hover:border-foreground/50">
      <Image
        src={website.image}
        alt={`Website version ${website.version}`}
        fill
        className="z-0 object-cover object-top-left opacity-100 saturate-60 duration-500 group-hover:scale-110 group-hover:opacity-90 group-hover:saturate-110"
      />
      <figcaption className="z-1 h-full bg-muted/10 pt-1 pb-3 backdrop-blur-md sm:pb-3.5">
        <cite className="md:text-md flex h-full flex-col items-center justify-between font-mono text-[12px] text-muted not-italic sm:text-sm dark:text-muted-foreground">
          <strong className="rounded-sm border-[1.5px] border-muted px-0.5 font-extrabold sm:rounded-md sm:px-[2.5px] dark:border-muted-foreground">
            {website.version}
          </strong>
          <time className="-rotate-90 font-semibold">{website.year}</time>
        </cite>
      </figcaption>
      <figcaption className="lg:text-md/4 z-1 mt-auto hidden overflow-hidden rounded-tr-lg bg-black/50 py-1 text-xs/3 tracking-tighter opacity-0 backdrop-blur-[1px] duration-500 group-hover:opacity-100 sm:px-1.5 sm:text-sm/4 md:block">
        <em className="text-muted dark:text-muted-foreground">{website.description}</em>
      </figcaption>
    </figure>
  );
}
