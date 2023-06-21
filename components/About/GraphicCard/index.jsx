import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiTwotoneLock } from "react-icons/ai";
import { IoReloadSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import ThreeJS from "@/components/ThreeJS";

const GraphicCard = () => {
  return (
    <div className="backdrop-blur-xl h-full max-h-[30rem] max-w-[40rem] w-full border border-white/50 font-Archivo rounded-xl flex flex-col justify-start items-center mx-[var(--desktop-padding)]">
      <div className="flex justify-between items-center w-full h-[4rem] p-4 border-b border-white/50 ">
        <div className="flex justify-start items-center gap-2">
          <BsChevronLeft className="fill-white w-4 h-4" />
          <BsChevronRight className="fill-white w-4 h-4" />
        </div>
        <div className="w-full text-white p-2 h-full border border-white/50  rounded-lg max-w-[20rem] flex justify-between items-center">
          <AiTwotoneLock className="fill-white" />
          <span className="select-none">https://benthorne.net/dev</span>
          <IoReloadSharp />
        </div>
        <AiOutlinePlus className="fill-white w-4 h-4" />
      </div>
      <div className="flex w-full h-full ">
        <div className="border-r border-white/50  h-full w-[4rem] self-start flex flex-col justify-start items-center p-4">
          <AiOutlineMenu className="fill-white w-6 h-6" />
        </div>
        <div className="relative overflow-hidden w-full h-full rounded-br-xl">
          <ThreeJS />
        </div>
      </div>
    </div>
  );
};

export default GraphicCard;
