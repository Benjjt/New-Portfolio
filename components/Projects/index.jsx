"use client";
import React, { useEffect, useState, useRef } from "react";
import { BiUser } from "react-icons/bi";
import {
  animated,
  useTransition,
  useSpring,
  useInView,
} from "@react-spring/web";

const Projects = () => {
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  const props = useSpring({
    from: { maxHeight: inView ? 1 : 1000 },
    to: { maxHeight: inView ? 1000 : 1 },
    config: {
      friction: 200,
      velocity: 200,
    },
  });
  return (
    <div
      name="projects"
      className="font-Archivo flex  gap-12 px-[var(--desktop-padding)]  justify-start items-start w-full h-full min-h-screen min-w-screen"
    >
      <div className="flex flex-col justify-start items-center  h-screen gap-10 relative ">
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
    </div>
  );
};

export default Projects;
