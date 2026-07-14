import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Intro from "@/components/Intro";
import Secrets from "@/components/Secrets";
import Testimonials from "@/components/Testimonials";
import Antoine from "@/components/Antoine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <Hero />
      <LogoBar />
      <Intro />
      <Secrets />
      <Testimonials />
      <Antoine />
      <Footer />
    </main>
  );
}
