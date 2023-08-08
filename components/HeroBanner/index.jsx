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
      className="relative bg-transparent w-screen h-full  min-h-screen  flex justify-center items-center  font-Archivo overflow-hidden "
    >
      <div className="w-full h-full flex justify-center items-center  md:items-end md:justify-start  px-[var(--desktop-padding)]  ">
        <div className=" h-full relative flex gap-12 flex-col justify-center items-center md:items-start w-full md:w-2/3">
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
            className="hidden lg:block text-lg leading-10 text-light/70 max-w-[70ch] "
          >
            I'm a London-based Web Developer who specialises is creating
            exceptional digital experiences. Currently, I am a developer at{" "}
            <span className="text-highlight">
              <a target="_blank" href="https://canverse.io">
                canVERSE
              </a>
            </span>{" "}
            focused on building accessible Web-3 tools for NFT gaming.
          </animated.div>
        </div>
      </div>
      <Links type={"top"} />
    </div>
  );
};

export default HeroBanner;
