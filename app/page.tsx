import { Profile } from "@/components/Profile";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center lg:items-start gap-10 lg:gap-16">
        <Profile />
      </header>
      <main>
        <Ventures />
      </main>
    </>
  );
}
