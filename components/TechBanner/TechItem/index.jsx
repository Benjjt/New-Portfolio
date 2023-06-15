import React from "react";
import Image from "next/image";

const TechItem = ({ logo, width = 50, height = 50, alt }) => {
  return (
    <div className="w-[6rem] h-[5rem] rounded-xl flex justify-center items-center mx-4  bg-white  border-2 border-black  -z-10">
      <Image alt={alt} src={logo} width={width} height={height} />
    </div>
  );
};

export default TechItem;
