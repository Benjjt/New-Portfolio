import Image from "next/image";
import Navbar from "../components/navigation/Navbar";
import HeroBanner from "../components/HeroBanner";
import TechBanner from "@/components/TechBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <Navbar />
      <HeroBanner />
      <TechBanner />
      <About />
      <Projects />
    </main>
  );
}
