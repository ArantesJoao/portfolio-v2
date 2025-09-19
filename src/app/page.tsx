import Hero from "./components/hero";
import Education from "./components/education";
import Projects from "./components/projects";
import Experience from "./components/experience";
import TechStack from "./components/tech-stack";

export default function Home() {
  return (
    <div className="pb-20">
      <main className="mx-auto">
        <Hero />
        <div className="flex flex-col gap-20 lg:gap-32">
          <Experience />
          <Education />
          <TechStack />
          <Projects />
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
