import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiTwotoneLock } from "react-icons/ai";
import { IoReloadSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import ThreeJS from "../../ThreeJS";
import InfoCard from "./InfoCard";

const GraphicCard = ({ type }) => {
  return (
    <div
      className={`backdrop-blur-xl h-full ${
        type === "three" ? "w-1/3 max-w-[30rem] " : "w-2/3 md:w-full "
      }  border border-white/50 font-Archivo rounded-xl flex  flex-col justify-start items-center  `}
    >
      <div className="flex justify-between items-center w-full h-[4rem] p-4 border-b border-white/50 ">
        <div className="flex justify-start items-center gap-2">
          <BsChevronLeft className="fill-white w-4 h-4" />
          <BsChevronRight className="fill-white w-4 h-4" />
        </div>
        <div
          className={`w-full text-white p-2 h-full border border-white/50  rounded-lg ${
            type === "three" ? "max-w-[18rem]" : " max-w-[20rem]"
          }  flex justify-between items-center`}
        >
          <AiTwotoneLock className="fill-white" />
          <span className="select-none">{`${
            type === "three"
              ? "https://benthorne.net/threejs"
              : "https://benthorne.net/README"
          }`}</span>
          <IoReloadSharp />
        </div>
        <AiOutlinePlus className="fill-white w-4 h-4" />
      </div>
      <div className="flex w-full h-full  ">
        <div className="  h-full w-[4rem] self-start flex flex-col justify-start items-center p-4">
          <AiOutlineMenu className="fill-white w-6 h-6" />
        </div>
        <div className="relative overflow-hidden w-full border-l border-white/50 h-full rounded-br-xl">
          {type === "three" ? <ThreeJS /> : <InfoCard />}
        </div>
      </div>
    </div>
  );
};

export default GraphicCard;
