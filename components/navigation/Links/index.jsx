"use client";
import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFilePdf, AiOutlineArrowUp } from "react-icons/ai";
import { animated, useSpring } from "@react-spring/web";
import { Link as ReactLink } from "react-scroll";

const Links = ({ type }) => {
  const props = useSpring({
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 },
    delay: 600,
  });

  return (
    <animated.div
      style={props}
      className="hidden md:flex absolute bottom-[4rem] right-[var(--desktop-padding)]  flex-col items-center gap-8 bg-dark py-8 px-4 rounded-full shadow-lg"
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
      <FaGithubAlt className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
      <FaLinkedinIn className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
      <AiOutlineFilePdf className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
    </animated.div>
  );
};

export default Links;
