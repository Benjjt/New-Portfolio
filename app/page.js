import Image from "next/image";
import Navbar from "../components/navigation/Navbar";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Projects from "../components/Projects";
import background from "../public/images/backgroundImage.jpg";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen   text-light bg-dark ">
      <div className=" h-full w-full  relative md:bg-myBackground bg-cover  lg:bg-contain  bg-dark ">
        <HeroBanner />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
