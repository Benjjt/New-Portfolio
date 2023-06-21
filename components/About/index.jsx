import React from "react";
import GraphicCard from "./GraphicCard";

const About = () => {
  return (
    <div
      name="about"
      className="w-screen h-screen flex justify-center items-center bg-transparent"
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-1/2 h-full  flex justify-center items-center">
          ABOUT ME CARD
        </div>
        <div className="w-1/2 h-full  flex justify-center items-center">
          <GraphicCard />
        </div>
      </div>
    </div>
  );
};

export default About;
