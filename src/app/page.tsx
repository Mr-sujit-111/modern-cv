
import { Contact } from "./components/layout/common/Contact";
import { CustomCursor } from "./components/layout/common/CustomCursor";
import { Parallax } from "./components/layout/common/Parallax";
import { Hero } from "./components/layout/Hero";
import { Portfolio } from "./components/layout/Projects";

export default function Home() {
  return (
    <main className="" >
      <CustomCursor />
      <section className="w-full bg-background h-screen overflow-hidden snap-center">
        <Hero />
      </section>
      <section className="w-full bg-background h-screen overflow-hidden snap-center">
        <Parallax type="services" />
      </section>
      <section id="portfolio" className="bg-hero-gradient">
        <Portfolio />
      </section>
      <section className="w-full bg-background h-screen overflow-hidden snap-center">
        <Parallax type="Technologies" />
      </section>
      <section id="contact" className="w-full bg-background h-screen overflow-hidden snap-center">
        <Contact />
      </section>


    </main>
  );
}
