"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  animated,
  useTransition,
  useSpring,
  useInView,
} from "@react-spring/web";
import { BsWindowStack } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import Links from "../navigation/Links";
import Form from "./Form";
import TestForm from "./TestForm";

const Contact = () => {
  const [ref, inView] = useInView();

  const props = useSpring({
    from: { maxHeight: inView ? 1 : window.innerHeight },
    to: { maxHeight: inView ? window.innerHeight : 1 },
    config: {
      friction: inView ? 500 : 100,
      velocity: inView ? 100 : 1000,
    },
  });
  return (
    <div
      name="contact"
      className="font-Archivo  flex gap-4  lg:gap-12 p-[var(--mobile-padding)] lg:p-[var(--desktop-padding)] pt-10  justify-start items-start w-full h-full   min-w-screen"
    >
      <div className="hidden md:flex flex-col justify-start items-center  h-screen gap-10 relative  ">
        <div className="w-[2.5rem] h-[2.5rem] relative  flex justify-center items-center">
          <div className="w-full  h-full absolute bg-[#773fc6]/50  blur-lg rounded-full bottom-0 left-0" />
          <IoMailOpenOutline className="w-8 h-8 z-20 " />
        </div>

        <animated.div
          ref={ref}
          style={props}
          className="w-[2px] h-full bg-gradient-to-b from-[#773fc6] to-[#773fc6]  rounded-lg"
        >
          <div className="w-[4px] h-full bg-gradient-to-b from-[#773fc6] to-[#773fc6] blur-md rounded-lg " />
        </animated.div>
      </div>
      <div className="font-Archivo flex flex-col gap-12  justify-start items-start w-full h-full  ">
        <div className="flex justify-start items-center w-full h-full ">
          <div className="w-full h-full  flex flex-col justify-start items-start ">
            <div className="flex justify-start items-start gap-8">
              <div className="w-full h-full flex flex-col  justify-start items-start gap-8">
                <h2
                  onClick={() => setLineActive(!lineActive)}
                  className="text-3xl font-bold"
                >
                  Contact
                </h2>
                <p className="text-3xl lg:text-5xl max-w-[30ch]">
                  <span className="text-[#773fc6] ">Get in touch </span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2  h-full border border-light/50 rounded-xl">
          <TestForm />
        </div>
      </div>
      <Links type={"bottom"} />
    </div>
  );
};

export default Contact;
