import { Archive } from "@/components/Archive";
import { Career } from "@/components/Career";
import { Connect } from "@/components/Connect";
import { Profile } from "@/components/Profile";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center lg:items-start gap-10 lg:gap-16 lg:sticky lg:top-12 lg:h-fit z-1">
        <Profile />
      </header>
      <main className="flex flex-col gap-20 z-1">
        <Ventures />
        <Career />
        <Connect />
      </main>
      <footer className="col-2 text-right mx-8 my-12 ml-auto">
        <Archive />
        <p className="text-sm font-bold uppercase tracking-wide">
          © Kevin Gonzalez {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
