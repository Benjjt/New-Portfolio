import React from "react";
import GraphicCard from "./GraphicCard";

const About = () => {
  return (
    <div
      name="about"
      className="w-screen h-screen font-Archivo flex justify-start items-start bg-transparent p-[var(--desktop-padding)]"
    >
      <div className="flex justify-center items-center w-full h-full ">
        <div className="w-1/2 h-full  flex justify-start items-start ">
          <h2 className="text-5xl">About</h2>
        </div>
        <div className="w-1/2 h-full  flex justify-center items-center ">
          <GraphicCard />
        </div>
      </div>
    </div>
  );
};

export default About;
