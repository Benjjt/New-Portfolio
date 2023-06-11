"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import heroImage from "../../public/images/ethPC.png";
import LogoBox from "./LogoBox";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
  const [direction, setDirection] = useState(1);
  const [display, setDisplay] = useState("Ben Thorne");

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setDirection((direction) => (direction === 1 ? 2 : 1));
    }, 4000);

    return () => {
      clearInterval(wordInterval);
    };
  }, [direction]);

  useEffect(() => {
    const word = setInterval(() => {
      setDisplay((display) =>
        display === "Ben Thorne" ? "A Web-3 Dev" : "Ben Thorne"
      );
    }, 8000);

    return () => {
      clearInterval(word);
    };
  }, [display]);

  return (
    <div className="relative w-screen h-screen  flex justify-center items-center bg-highlight">
      <div className="w-full h-full flex  items-center justify-between">
        <div className="w-1/2 h-full relative flex justify-center items-center">
          {/* <LogoBox /> */}
          <div className="font-Moiser  text-darkBlue text-7xl backdrop-blur-xl  rounded-xl flex flex-col justify-center items-start gap-8  w-full h-[20rem] m-20 z-20 p-10">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hi, I'm Ben Thorne",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Hi, I'm A Web-3 Dev",
                2000,
                "Welcome To My Portfolio",
                1000,
              ]}
              deletionSpeed={20}
              wrapper="span"
              speed={2}
              style={{ fontSize: "60px", display: "inline-block" }}
              repeat={0}
            />
          </div>
        </div>

        <div className="w-1/2 relative ">
          <div className="h-1/4 w-1/4 absolute  bg-light blur-2xl rounded-2xl animate-pulse left-1/4 top-1/3 " />
          <Image
            src={heroImage}
            width={1000}
            height={1000}
            alt="Artist: William Tempest"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
