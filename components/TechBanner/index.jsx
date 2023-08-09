"use client";

import React, { useEffect } from "react";
import { TechArray } from "./TechArray";
import Image from "next/image";
import TechItem from "./TechItem";

const TechBanner = () => {
  return (
    <div className="flex justify-evenly w-full items-center   ">
      {TechArray.map((item, index) => {
        return <TechItem key={index} logo={item.image} alt={item.alt} />;
      })}
    </div>
  );
};

export default TechBanner;
