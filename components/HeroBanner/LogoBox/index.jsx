"use client";
import React from "react";
import Image from "next/image";
import ethLogo from "../../../public/images/logos/ethLogo.png";
import nextjs from "../../../public/images/logos/nextjs-icon.png";
import react from "../../../public/images/logos/reactLogo.png";
import three from "../../../public/images/logos/threejsLogo.png";
import tailwind from "../../../public/images/logos/tailwindLogo.png";
import moralis from "../../../public/images/logos/Moralis.png";

import { animated, useSpring } from "react-spring";
import LogoElement from "./LogoElement";

const LogoBox = () => {
  const [props, set] = useSpring(() => ({ x: 0, y: 0 }));

  return (
    <div
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const x = clientX;
        const y = clientY;
        set({ x, y });
      }}
      className="absolute w-full h-full -z-10"
    >
      <div className="absolute bottom-[2rem] left-1/2 ">
        <LogoElement props={props} image={ethLogo} xOffset={15} yOffset={15} />
      </div>
      <div className="absolute top-[10rem] left-[5rem] ">
        <LogoElement props={props} image={nextjs} xOffset={20} yOffset={20} />
      </div>
      <div className="absolute bottom-[2rem] right-[2rem] ">
        <LogoElement props={props} image={react} xOffset={30} yOffset={30} />
      </div>
      <div className="absolute top-[25rem] right-[2rem] ">
        <LogoElement props={props} image={three} xOffset={50} yOffset={50} />
      </div>
      <div className="absolute top-[25rem] left-[2rem] ">
        <LogoElement
          props={props}
          image={tailwind}
          xOffset={20}
          yOffset={20}
          width={50}
        />
      </div>
      <div className="absolute top-[15rem] right-[2rem] ">
        <LogoElement
          props={props}
          image={moralis}
          xOffset={20}
          yOffset={20}
          width={150}
        />
      </div>
    </div>
  );
};

export default LogoBox;
