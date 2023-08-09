"use client";
import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFilePdf, AiOutlineArrowUp } from "react-icons/ai";
import { animated, useSpring } from "@react-spring/web";
import { Link as ReactLink } from "react-scroll";
import styles from "../Navbar/MobileNav/MobileNav.module.css";
import Link from "next/link";

const Links = ({ type }) => {
  const props = useSpring({
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 },
    delay: 600,
  });

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/downloads/BenThorneCV.pdf"; // Replace this with the actual path to your PDF file
    downloadLink.download = "BenThorneCV.pdf"; // Replace this with the desired file name
    downloadLink.click();
  };

  return type != "mobile" ? (
    <animated.div
      style={props}
      className="hidden lg:flex absolute bottom-[4rem] right-[var(--desktop-padding)]  flex-col items-center gap-8 bg-dark py-8 px-4 rounded-full shadow-lg"
    >
      {type === "bottom" ? (
        <ReactLink
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="home"
          className="hover:cursor-pointer hover:text-highlight flex justify-start items-end gap-2 transition-all"
        >
          <AiOutlineArrowUp className="w-8 h-8 hover:scale-105 hover:fill-highlight hover:cursor-pointer" />
        </ReactLink>
      ) : (
        <span className="border border-light rotate-90 w-5" />
      )}
      <a target="_blank" href="https://github.com/Benjjt">
        <FaGithubAlt className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/benjamin-thorne101/">
        <FaLinkedinIn className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
      </a>
      <AiOutlineFilePdf
        onClick={() => {
          handleDownload();
        }}
        className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer"
      />
    </animated.div>
  ) : (
    <div
      className={`flex  justify-start items-center gap-8 bg-dark py-8  rounded-full shadow-lg  ${styles.animatedDiv} ${styles.delay4}`}
    >
      <a target="_blank" href="https://github.com/Benjjt">
        <FaGithubAlt className="w-8 h-8 hover:fill-highlight transition-all cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/benjamin-thorne101/">
        <FaLinkedinIn className="w-8 h-8 hover:fill-highlight transition-all cursor-pointer" />
      </a>
      <AiOutlineFilePdf
        onClick={() => {
          handleDownload();
        }}
        className="w-8 h-8 hover:fill-highlight transition-all cursor-pointer"
      />
    </div>
  );
};

export default Links;
