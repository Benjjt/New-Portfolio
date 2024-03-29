import React, { useState } from "react";
import Image from "next/image";
import me from "../../../../public/images/me.jpeg";
import {
  IoSchoolOutline,
  IoCodeSlashOutline,
  IoHappyOutline,
} from "react-icons/io5";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";

const InfoCard = () => {
  const [currentlyOpen, setCurrentlyOpen] = useState(1);
  return (
    <div className="w-full h-full flex flex-col   py-8 md:p-8  gap-12 justify-between items-start">
      <div className="w-full flex-col flex lg:flex-row justify-between items-start gap-4 lg:items-center">
        <div className="flex  justify-start item-center md:items-start gap-4  ">
          <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-white border-white border-2 relative overflow-hidden">
            <Image
              alt="Picture of Ben Smiling"
              style={{ objectFit: "cover" }}
              src={me}
              fill={true}
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <div>Ben Thorne</div>
            <div className="text-white/50    ">ben@benthorne.xyz</div>
          </div>
        </div>
        <ul className="flex select-none justify-between items-center w-full md:w-1/2 lg:max-w-[20rem] gap-4 border px-2 py-2 rounded-lg">
          <li
            onClick={() => {
              setCurrentlyOpen(1);
            }}
            className={`px-4 py-1 w-1/2 flex justify-center items-center  rounded-md ${
              currentlyOpen === 1
                ? "bg-light text-dark border border-white"
                : "text-light/50 border  border-transparent hover:bg-dark/50 hover:cursor-pointer transition-all"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setCurrentlyOpen(2);
            }}
            className={`px-4 py-1  rounded-md w-1/2 flex justify-center items-center  ${
              currentlyOpen === 2
                ? "bg-light text-dark border border-white"
                : "text-light/50 border border-transparent hover:bg-dark/50 hover:cursor-pointer transition-all"
            }`}
          >
            Experience
          </li>
        </ul>
      </div>

      <div className="w-full h-full  flex justify-evenly gap-8  ">
        {currentlyOpen === 1 ? (
          <div className="w-full  flex flex-col justify-start items-start gap-2">
            <span className="font-bold flex justify-start items-center gap-2">
              <IoSchoolOutline className="w-6 h-6" />
              <span className="text-xl">Education</span>
            </span>
            <ul className="flex flex-col justify-start items-start gap-4 mt-2 w-full ">
              <li className="flex flex-col justify-start items-start border-b border-cyan-500/50 w-full ">
                <span className="font-bold">
                  BrainStation | Diploma, Web Development
                </span>
                <span className="text-white/50">
                  JAN 2022 - APR 2022, LONDON, UK
                </span>
              </li>
              <li className="flex flex-col justify-start items-start border-b border-cyan-500/50 w-full  ">
                <span className="font-bold">
                  Falmouth University | BA(hons) Creative Music Technology
                </span>
                <span className="text-white/50">
                  SEP 2016 - JUN 2019, FALMOUTH, UK
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-full  flex flex-col gap-2   ">
            <span className="font-bold flex justify-start items-center gap-2">
              <IoCodeSlashOutline className="w-6 h-6" />
              <span className="text-xl">Work Experience</span>
            </span>
            <ul className="flex flex-col justify-start items-start gap-4 mt-2 ">
              <li className="flex flex-col justify-start items-start border-b border-highlight/50 w-full">
                <span className="font-bold">
                  Wavemaker | Addressable Web Developer
                </span>
                <span className="text-white/50">
                  NOV 2023 - PRESENT, LONDON UK
                </span>
              </li>
              <li className="flex flex-col justify-start items-start border-b border-highlight/50 w-full">
                <span className="font-bold">canVERSE | Web3 Developer</span>
                <span className="text-white/50">
                  JAN 2023 - OCT 2023, LONDON, UK
                </span>
              </li>
              <li className="flex flex-col justify-start items-start border-b border-highlight/50 w-full">
                <span className="font-bold">
                  canVERSE | Junior Web Developer
                </span>
                <span className="text-white/50">
                  APR 2022 - JAN 2023, LONDON, UK
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
