import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Intro from "@/components/Intro";
import Secrets from "@/components/Secrets";
import Testimonials from "@/components/Testimonials";
import Antoine from "@/components/Antoine";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <Hero />
      <ScrollReveal>
        <LogoBar />
      </ScrollReveal>
      <ScrollReveal>
        <Intro />
      </ScrollReveal>
      <ScrollReveal>
        <Secrets />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <Antoine />
      </ScrollReveal>
      <ScrollReveal direction="none">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
