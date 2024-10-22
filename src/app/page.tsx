
import HeaderPage from "./components/header";
import { Contact } from "./components/layout/common/Contact";
import { CustomCursor } from "./components/layout/common/CustomCursor";
import { Parallax } from "./components/layout/common/Parallax";
import { Hero } from "./components/layout/Hero";
import { Portfolio } from "./components/layout/Projects/index.jsx";
import TechnologyStackPage from "./components/layout/technologies";
import AboutPage from "./components/layout/about";

export default function Home() {
  return (
    <main className="" >
      <CustomCursor />
      <HeaderPage />
      <section id="home" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Hero />
      </section>
      <section className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Parallax title="About Me" />
      </section>
      <section id="about" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <AboutPage />      </section>
      <section className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Parallax title="Technologies" />
      </section>
      <section id="tech" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <TechnologyStackPage />
      </section>
      <section id="second" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Parallax title="Completed Projects" />
      </section>
      <section id="portfolio" className="bg-gradient-to-b from-gray-900 to-background">
        <Portfolio />
      </section>
      <section className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Parallax title="Contact" />
      </section>

      <section id="contact" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Contact />
      </section>


    </main>
  );
}
