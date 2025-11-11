import Image from "next/image";

import { ArchivedSite } from "@/types/types";

interface Props {
  website: ArchivedSite;
}

export function ArchivedSiteCard({ website }: Props) {
  return (
    <figure className="group flex aspect-16/11 overflow-hidden rounded-lg border-4 border-black/90 dark:border-white/90 backdrop-blur-sm">
      <Image
        src={website.image}
        alt={`Website version ${website.version}`}
        fill
        className="object-cover object-top-left transition-all duration-500 scale-101 group-hover:scale-105 opacity-90 group-hover:opacity-100 saturate-90 group-hover:saturate-100 z-0"
      />
      <figcaption className="h-full pt-2 pb-4 bg-muted/10 backdrop-blur-md z-1">
        <cite className="flex flex-col justify-between items-center h-full text-xs md:text-md sm:text-sm not-italic font-mono text-muted dark:text-muted-foreground">
          <strong className="font-extrabold px-0.5 sm:px-[2.5px] rounded-sm sm:rounded-md border-[1.5px] border-muted dark:border-muted-foreground">
            {website.version}
          </strong>
          <time className="font-semibold -rotate-90">{website.year}</time>
        </cite>
      </figcaption>
      <figcaption className="p-2.5 sm:h-fit w-full bg-muted/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-1">
        <p className="text-xs md:text-sm tracking-tighter font-black text-muted dark:text-white">
          {website.description}
        </p>
      </figcaption>
    </figure>
  );
}
