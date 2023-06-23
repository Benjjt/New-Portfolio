import React from "react";
import Image from "next/image";

const TechItem = ({ logo, width = 50, height = 50, alt }) => {
  return (
    <div className="w-[8rem] h-[6rem] rounded-xl flex justify-center items-center  backdrop-blur-xl  border border-white/50  -z-10">
      <Image
        alt={alt}
        src={logo}
        fill
        placeholder="blur"
        style={{ objectFit: "contain", padding: "1rem" }}
      />
    </div>
  );
};

export default TechItem;
