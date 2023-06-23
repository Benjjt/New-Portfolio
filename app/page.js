import Image from "next/image";
import Navbar from "../components/navigation/Navbar";
import HeroBanner from "../components/HeroBanner";
import PersistentLinks from "../components/navigation/PersistentLinks";
import About from "../components/About";
import Projects from "../components/Projects";
import background from "../public/images/backgroundImage.jpg";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen   text-light  ">
      <div className="flex flex-col h-full w-full relative">
        <div className="w-full h-full absolute overflow-hidden -z-10">
          <Image src={background} />
        </div>
        <Navbar />
        <HeroBanner />
        <PersistentLinks />
        {/* <ThreeJS /> */}
        {/* <TechBanner /> */}
        <About />
        <Projects />
      </div>
    </main>
  );
}
