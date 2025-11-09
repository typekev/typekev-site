import { Skeleton } from "../ui/skeleton";

export function ProfileImageSkeleton() {
  return (
    <figure
      role="status"
      aria-busy="true"
      aria-label="Loading images"
      className="relative h-56 w-56 flex justify-center items-center"
    >
      <Skeleton className="absolute inset-[11px] rounded-full bg-transparent border-12 border-foreground/30 animation-duration-750" />
      <Skeleton className="h-40 w-40 rounded-full border-4 border-foreground/40 bg-primary/10 z-1 animation-duration-750" />
    </figure>
  );
}
