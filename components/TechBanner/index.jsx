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
    <div className="flex justify-evenly w-full items-center h-[10rem] -mt-32 overflow-hidden z-20 ">
      {TechArray.map((item, index) => {
        return <TechItem key={index} logo={item.image} alt={item.alt} />;
      })}
    </div>
  );
};

export default TechBanner;
