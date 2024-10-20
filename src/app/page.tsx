
import HeaderPage from "./components/header";
import { Contact } from "./components/layout/common/Contact";
import { CustomCursor } from "./components/layout/common/CustomCursor";
import { Parallax } from "./components/layout/common/Parallax";
import { Hero } from "./components/layout/Hero";
import { Portfolio } from "./components/layout/Projects/index.jsx";
import TechnologyStackPage from "./components/layout/technologies";

export default function Home() {
  return (
    <main className="" >
      <CustomCursor />
      <HeaderPage />
      <section id="home" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Hero />
      </section>
      <section id="tech" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <TechnologyStackPage />
      </section>
      <section id="second" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Parallax type="services" />
      </section>
      <section id="portfolio" className="bg-gradient-to-b from-gray-900 to-background">
        <Portfolio />
      </section>
      <section className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Parallax type="Technologies" />
      </section>

      <section id="contact" className="w-full bg-gradient-to-b from-gray-900 to-background h-screen overflow-hidden snap-center">
        <Contact />
      </section>


    </main>
  );
}
