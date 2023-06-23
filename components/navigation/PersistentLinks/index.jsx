"use client";
import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import { animated, useSpring } from "react-spring";

const PersistentLinks = () => {
  const props = useSpring({
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 },
    delay: 600,
  });

  return (
    <animated.div
      style={props}
      className="fixed bottom-[4rem] right-[var(--desktop-padding)] flex flex-col gap-8 bg-dark py-8 px-4 rounded-full shadow-lg"
    >
      <span className="border border-light rotate-90" />
      <FaGithubAlt className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
      <FaLinkedinIn className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
      <AiOutlineFilePdf className="w-6 h-6 hover:fill-highlight transition-all cursor-pointer" />
    </animated.div>
  );
};

export default PersistentLinks;
