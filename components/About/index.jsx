"use client";
import React, { useEffect, useState, useRef } from "react";
import GraphicCard from "./GraphicCard";
import TechBanner from "../TechBanner";
import { BiUser } from "react-icons/bi";
import {
  animated,
  useTransition,
  useSpring,
  useInView,
} from "@react-spring/web";

const About = () => {
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  const props = useSpring({
    from: { maxHeight: inView ? 1 : 1000 },
    to: { maxHeight: inView ? 1000 : 1 },
    config: {
      friction: inView ? 500 : 100,
      velocity: inView ? 100 : 1000,
    },
  });

  return (
    <div
      name="about"
      className="font-Archivo flex  gap-12 p-[var(--desktop-padding)] pb-0 justify-start items-start w-full h-full min-h-screen min-w-screen"
    >
      <div className="flex flex-col justify-start items-center  h-screen gap-10 relative ">
        <div className="absolute border-l border-white h-[2rem] -top-16 w-[2px] bg-gradient-to-b from-white to-highlight  " />
        <div className="absolute border-l border-white h-[2rem] -top-16 w-[4px] bg-gradient-to-b from-white to-highlight blur-md " />

        <div className="w-[2.5rem] h-[2.5rem] relative  flex justify-center items-center">
          <div className="w-full  h-full absolute bg-highlight/50 blur-lg rounded-full bottom-0 left-0" />
          <BiUser className="w-8 h-8 z-20" />
        </div>

        <animated.div
          ref={ref}
          style={props}
          className="w-[2px] h-full bg-gradient-to-b from-highlight to-cyan-500   rounded-lg"
        >
          <div className="w-[4px] h-full bg-gradient-to-b from-highlight to-cyan-500 blur-md rounded-lg " />
        </animated.div>
      </div>
      <div className="font-Archivo flex flex-col gap-12  justify-start items-center w-full h-full  ">
        <div className="flex justify-start items-center w-full h-full ">
          <div className="w-full  flex flex-col justify-start items-start ">
            <div className="flex justify-start items-start gap-8">
              <div className="w-full h-full flex flex-col  justify-start items-start gap-8">
                <h2
                  onClick={() => setLineActive(!lineActive)}
                  className="text-3xl font-bold"
                >
                  About
                </h2>
                <p className="text-5xl max-w-[30ch]">
                  <span className="text-highlight">
                    High-quality software development{" "}
                  </span>
                  producing unique and powerful user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full   h-[30rem] justify-start items-center gap-8 ">
          <GraphicCard type={"three"} />
          <GraphicCard type={"info"} />
        </div>
      </div>
    </div>
  );
};

export default About;
