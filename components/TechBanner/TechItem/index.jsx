import React from "react";
import Image from "next/image";

const TechItem = ({ logo, width = 50, height = 50 }) => {
  return (
    <div className="w-[6rem] h-[6rem] rounded-xl flex justify-center items-center mx-4  bg-white shadow-2xl border-2 border-black  -z-10">
      <Image src={logo} width={width} height={height} />
    </div>
  );
};

export default TechItem;
