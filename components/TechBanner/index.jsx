"use client";

import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { TechArray } from "./TechArray";
import Image from "next/image";
import TechItem from "./TechItem";

const TechBanner = () => {
  useEffect(() => {
    console.log(TechArray);
  }, [TechArray]);

  return (
    <Marquee
      pauseOnHover={true}
      autoFill={true}
      className="flex justify-evenly items-center   overflow-hidden h-[10rem] -mt-32 min-w-fit "
    >
      {TechArray.map((item, index) => {
        return <TechItem key={index} logo={item.image} alt={item.alt} />;
      })}
    </Marquee>
  );
};

export default TechBanner;
