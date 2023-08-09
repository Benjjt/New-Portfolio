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
  const containerRef = useRef(null);

  const props = useSpring({
    from: { maxHeight: inView ? 1 : containerRef.current?.clientHeight },
    to: { maxHeight: inView ? containerRef.current?.clientHeight : 1 },
    config: {
      friction: inView ? 400 : 0,
    },
  });

  return (
    <div
      name="about"
      className="font-Archivo flex gap-4 bg-black md:bg-transparent lg:gap-12 p-[var(--mobile-padding)] lg:px-[var(--desktop-padding)]  justify-start items-start  h-screen  w-screen m-auto max-w-[var(--desktop-max)] max-h-[var(--desktop-max-h)]"
    >
      <div className="hidden md:flex flex-col justify-start items-center  h-full gap-10 relative ">
        {/* <div className="absolute border-l border-white h-[2rem] -top-16 w-[2px] bg-gradient-to-b from-white to-highlight  " />
        <div className="absolute border-l border-white h-[2rem] -top-16 w-[4px] bg-gradient-to-b from-white to-highlight blur-md " /> */}

        <div className="w-[2.5rem] h-[2.5rem] relative  flex justify-center items-center">
          <div className="w-full  h-full absolute bg-highlight/50 blur-lg rounded-full bottom-0 left-0" />
          <BiUser className="w-8 h-8 z-20" />
        </div>
        <div ref={containerRef} className="h-full">
          <animated.div
            ref={ref}
            style={props}
            className=" w-[2px] h-full bg-gradient-to-b from-highlight to-cyan-500   rounded-lg"
          >
            <div className="w-[4px] h-full bg-gradient-to-b from-highlight to-cyan-500 blur-md rounded-lg " />
          </animated.div>
        </div>
      </div>
      <div className="font-Archivo flex flex-col gap-12  justify-start items-center w-full h-full  ">
        <div className="flex justify-start items-center w-full  ">
          <div className="w-full  flex flex-col justify-start items-start ">
            <div className="flex justify-start items-start gap-8">
              <div className="w-full h-full flex flex-col  justify-start items-start gap-4 md:gap-8">
                <h2
                  onClick={() => setLineActive(!lineActive)}
                  className="text-3xl font-bold"
                >
                  About
                </h2>
                <p className="text-3xl lg:text-5xl max-w-[30ch]">
                  <span className="text-highlight ">
                    High-quality software development{" "}
                  </span>
                  producing unique and powerful user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-full  lg:h-[30rem] justify-start items-center gap-8 ">
          <GraphicCard type={"three"} />
          <GraphicCard type={"info"} />
        </div>
      </div>
    </div>
  );
};

export default About;
