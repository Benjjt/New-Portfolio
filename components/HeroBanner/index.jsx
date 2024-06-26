"use client";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { animated, useSpring } from "@react-spring/web";
import Links from "../navigation/Links";

const HeroBanner = () => {
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div
      name="home"
      className="relative bg-transparent w-screen   h-screen  flex justify-center items-center  font-Archivo overflow-hidden m-auto max-w-[var(--desktop-max)] max-h-[var(--desktop-max-h)] "
    >
      <div className="w-full h-full gap-12  flex flex-col md:flex-row justify-between md:justify-start items-center  md:items-end px-[var(--mobile-padding)]   md:px-[var(--desktop-padding)]  ">
        <div className=" h-full  relative flex gap-12 flex-col justify-center items-center md:items-start  w-full md:w-2/3">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hi, I'm Ben",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Hi, I'm A Web Dev",
              2000,
              "Welcome to my portfolio.",
              1000,
            ]}
            deletionSpeed={20}
            wrapper="span"
            speed={2}
            style={{
              fontSize: "70px",
              lineHeight: "80px",
              fontWeight: "700",
            }}
            repeat={0}
          />
          <animated.div
            style={spring}
            className="hidden lg:block text-lg leading-10 text-light/70 max-w-[80ch] "
          >
            I am a London-based Web Developer who specialises is creating
            exceptional digital experiences.
          </animated.div>
        </div>
      </div>
      <Links type={"top"} />
    </div>
  );
};

export default HeroBanner;
