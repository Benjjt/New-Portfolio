"use client";
import React, { useEffect, useState, useRef } from "react";
import { BiUser } from "react-icons/bi";
import {
  animated,
  useTransition,
  useSpring,
  useInView,
} from "@react-spring/web";
import { BsWindowStack } from "react-icons/bs";

const Projects = () => {
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
      name="projects"
      className="font-Archivo flex bg-dark  gap-12 px-[var(--desktop-padding)]  justify-start items-start w-full h-full min-h-screen min-w-screen"
    >
      <div className="flex flex-col justify-start items-center  h-screen gap-10 relative pt-10 ">
        <div className="w-[2.5rem] h-[2.5rem] relative  flex justify-center items-center">
          <div className="w-full  h-full absolute bg-cyan-500/50 blur-lg rounded-full bottom-0 left-0" />
          <BsWindowStack className="w-8 h-8 z-20 " />
        </div>

        <animated.div
          ref={ref}
          style={props}
          className="w-[2px] h-full bg-gradient-to-b from-cyan-500 to-[#773fc6]  rounded-lg"
        >
          <div className="w-[4px] h-full bg-gradient-to-b from-cyan-500 to-[#773fc6] blur-md rounded-lg " />
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
                  Projects
                </h2>
                <p className="text-5xl max-w-[30ch]">
                  <div className="text-cyan-500">A collection of work </div>
                  showcasing a variety of tools and tech stacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
