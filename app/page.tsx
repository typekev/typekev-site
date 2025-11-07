import { ProfileDescription } from "@/components/ProfileDescription";

export default function Home() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-12 lg:grid lg:grid-cols-2 lg:gap-16 relative z-10"
    >
      <section className="mt-16">
        <ProfileDescription />
      </section>
    </main>
  );
}
