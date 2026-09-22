import { Archive } from "@/components/Archive";
import { Career } from "@/components/Career";
import { Connect } from "@/components/Connect";
import { Profile } from "@/components/Profile";
import { StickyHeader } from "@/components/StickyHeader";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <StickyHeader>
        <Profile />
      </StickyHeader>
      <main id="main-content" className="z-1 flex min-w-0 flex-col gap-20" tabIndex={-1}>
        <Ventures />
        <Career />
        <Connect />
      </main>
      <footer className="z-1 my-4 text-start lg:col-start-2 lg:text-end">
        <Archive />
        <p className="text-sm font-bold tracking-wide uppercase">
          © Kevin Gonzalez {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
