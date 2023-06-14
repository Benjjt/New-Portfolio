"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import heroImage from "../../public/images/ethPC.png";
import LogoBox from "./LogoBox";
import { TypeAnimation } from "react-type-animation";
import { FaFileDownload } from "react-icons/fa";
import folderIcon from "../../public/images/logos/open-folder.png";
import smile from "../../public/images/logos/smile.png";

const HeroBanner = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div className="relative w-screen h-screen  flex justify-center items-center bg-highlight">
      <div className="w-full h-full flex  items-center justify-between">
        <div className="w-1/2 h-full relative flex justify-center items-center">
          <div className="font-Moiser shadow-xl bg-white/80  text-black  border-black border-2 text-7xl backdrop-blur-xl  rounded-xl flex flex-col justify-start items-start gap-8  w-full h-[20rem] m-20 z-20 ">
            <div className="w-full h-[2.8rem]  rounded-t-lg   flex justify-start items-center  border-black">
              <span className="flex justify-start items-center gap-2 border-b-2 border-black  rounded-t-none  h-full px-4">
                <div className="w-4 h-4 rounded-full bg-white border border-black/50" />
                <div className="w-4 h-4 rounded-full bg-white border border-black/50" />
                <div className="w-4 h-4 rounded-full bg-white border border-black/50" />
              </span>
              <div className="flex justify-start items-end h-full">
                <span
                  onClick={() => {
                    setCurrentTab(1);
                  }}
                  className={`h-[2.5rem] w-[6rem] bg-white rounded-t-lg self-end text-base flex justify-center items-center p-2 ${
                    currentTab === 1
                      ? "border-b-0 border-r-0"
                      : "border-b-2 hover:cursor-pointer"
                  }  border-black border-l-2 border-t-2`}
                >
                  <span className="p-1 border border-black rounded-lg ">
                    <Image className="" src={smile} width={15} height={15} />
                  </span>
                </span>
                <span
                  onClick={() => {
                    setCurrentTab(2);
                  }}
                  className={`h-[2.5rem] w-[6rem] bg-white gap-2 rounded-t-lg self-end text-base flex justify-center items-center p-2 ${
                    currentTab === 2 ? "border-b-0 border-l-0" : "border-b-2"
                  }  border-black border-l-2 border-r-2 border-t-2 hover:cursor-pointer`}
                >
                  <span className="p-1 border border-black rounded-lg ">
                    <Image
                      className=""
                      src={folderIcon}
                      width={15}
                      height={15}
                    />
                  </span>
                </span>
              </div>
              <span className="w-full h-full border-b-2 border-black" />
            </div>
            <div className="p-8 w-full">
              {currentTab === 1 ? (
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Hi, I'm Ben Thorne",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Hi, I'm A Web Dev",
                    2000,
                    "Welcome To My Portfolio",
                    1000,
                  ]}
                  deletionSpeed={20}
                  wrapper="span"
                  speed={2}
                  style={{
                    fontSize: "60px",
                    display: "inline-block",
                  }}
                  repeat={0}
                />
              ) : (
                <div className="flex flex-col  gap-8 h-full w-full justify-evenly items-start ">
                  <span className="text-[60px]">Download my CV</span>
                  <span className="p-2 border border-black rounded-lg hover:cursor-pointer">
                    <Image
                      className=""
                      src={folderIcon}
                      width={40}
                      height={40}
                    />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ zIndex: "99" }} className="w-1/2 relative ">
          <div className="absolute overflow-hidden -right-[10rem] -top-[25rem]">
            <div className="h-1/4 w-1/4 absolute  bg-light blur-2xl rounded-2xl animate-pulse left-1/4 top-1/3 " />
            <Image
              src={heroImage}
              width={1000}
              height={1000}
              alt="Artist: William Tempest"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
