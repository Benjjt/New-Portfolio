import Image from "next/image";
import Navbar from "../components/navigation/Navbar";
import HeroBanner from "../components/HeroBanner";
import TechBanner from "@/components/TechBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ThreeJS from "@/components/ThreeJS";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <Navbar />
      {/* <ThreeJS /> */}
      <HeroBanner />
      {/* <TechBanner /> */}
      <About />
      <Projects />
    </main>
  );
}
