import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { SoloAdvantage } from "@/components/solo-advantage";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <SoloAdvantage />
        <TechStack />
        <Founder />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
