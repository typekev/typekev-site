import { Skeleton } from "../ui/skeleton";

export function ProfileBadgeSkeleton() {
  return (
    <figure
      role="status"
      aria-busy="true"
      aria-label="Loading images"
      className="relative flex size-56 items-center justify-center"
    >
      <Skeleton className="absolute inset-2.75 rounded-full border-12 border-foreground/30 bg-transparent animation-duration-750" />
      <Skeleton className="z-1 size-40 rounded-full border-4 border-foreground/40 bg-primary/10 animation-duration-750" />
    </figure>
  );
}
