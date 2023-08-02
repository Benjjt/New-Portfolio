import Image from "next/image";
import Navbar from "../components/navigation/Navbar";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Projects from "../components/Projects";
import background from "../public/images/backgroundImage.jpg";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen   text-light ">
      <div className=" h-full w-full relative">
        <div className=" w-full h-full absolute overflow-hidden -z-10">
          <Image
            // style={{ objectFit: "cover" }}
            // fill="true"
            alt="Stylish yellow dots aranged against a black background"
            src={background}
          />
        </div>
        <Navbar />
        <HeroBanner />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
