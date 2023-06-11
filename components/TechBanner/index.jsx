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
      className="flex justify-evenly items-center gap-8  overflow-hidden h-[10rem] -mt-32  "
    >
      {TechArray.map((item, index) => {
        return <TechItem key={index} logo={item} />;
      })}
    </Marquee>
  );
};

export default TechBanner;
