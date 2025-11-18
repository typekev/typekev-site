import Image from "next/image";

import { ArchivedSite } from "@/types/types";

interface Props {
  website: ArchivedSite;
}

export function ArchivedSiteCard({ website }: Props) {
  return (
    <figure className="relative group flex aspect-16/11 overflow-hidden rounded-md border-3 border-foreground/10 hover:border-foreground/50 duration-500">
      <Image
        src={website.image}
        alt={`Website version ${website.version}`}
        fill
        className="object-cover object-top-left group-hover:scale-110 opacity-100 group-hover:opacity-90 saturate-60 group-hover:saturate-110 duration-500 z-0"
      />
      <figcaption className="h-full pt-1 pb-3 sm:pb-3.5 bg-muted/10 backdrop-blur-md z-1">
        <cite className="flex flex-col justify-between items-center h-full text-[12px] md:text-md sm:text-sm not-italic font-mono text-muted dark:text-muted-foreground">
          <strong className="font-extrabold px-0.5 sm:px-[2.5px] rounded-sm sm:rounded-md border-[1.5px] border-muted dark:border-muted-foreground">
            {website.version}
          </strong>
          <time className="font-semibold -rotate-90">{website.year}</time>
        </cite>
      </figcaption>
      <figcaption className="hidden md:block mt-auto sm:px-1.5 py-1 text-xs/3 sm:text-sm/4 lg:text-md/4 tracking-tighter bg-black/50 backdrop-blur-[1px] rounded-tr-lg overflow-hidden opacity-0 group-hover:opacity-100 duration-500 z-1">
        <em className="text-muted dark:text-muted-foreground">{website.description}</em>
      </figcaption>
    </figure>
  );
}
