import { Archive } from "@/components/Archive";
import { Career } from "@/components/Career";
import { Connect } from "@/components/Connect";
import { Profile } from "@/components/Profile";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <header className="z-1 flex flex-col items-center gap-8 md:gap-10 lg:sticky lg:top-12 lg:h-fit lg:items-start lg:gap-16">
        <Profile />
      </header>
      <main className="z-1 flex flex-col gap-20">
        <Ventures />
        <Career />
        <Connect />
      </main>
      <footer className="col-2 mx-8 my-12 ml-auto text-right">
        <Archive />
        <p className="text-sm font-bold tracking-wide uppercase">
          © Kevin Gonzalez {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
