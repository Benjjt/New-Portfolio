"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LogoBox from "./LogoBox";
import { TypeAnimation } from "react-type-animation";
import { FaFileDownload } from "react-icons/fa";
import folderIcon from "../../public/images/logos/open-folder.png";
import smile from "../../public/images/logos/smile.png";
import background from "../../public/images/backgroundImage.jpg";
import crazybackground from "../../public/images/crazyBG.jpg";
import { animated, useSpring } from "react-spring";

const HeroBanner = () => {
  const props = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    delay: 1800,
  });
  return (
    <div className="relative w-screen h-screen  flex justify-center items-center  font-Archivo overflow-hidden ">
      <div className="w-full h-full flex  items-center justify-start  px-[var(--desktop-padding)] ">
        <div className=" h-full relative flex gap-12 flex-col justify-center items-start w-2/3">
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
          <animated.p
            style={props}
            className="text-lg leading-10 text-light/60 max-w-[70ch] "
          >
            I'm a London-based Web Developer who specialises is creating
            exceptional digital experiences. Currently, I am a developer at{" "}
            <span className="text-highlight">
              <a target="_blank" href="https://canverse.io">
                canVERSE
              </a>
            </span>{" "}
            focused on building accessible Web-3 tools for NFT gaming.
          </animated.p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
