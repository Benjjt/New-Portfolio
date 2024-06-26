"use client";
import React, { useEffect, useRef } from "react";
import { animated, useSpring, useInView } from "@react-spring/web";
import { IoMailOpenOutline } from "react-icons/io5";
import Links from "../navigation/Links";
import HubSpotForm from "./HubspotForm";

const Contact = () => {
  const [ref, inView] = useInView();
  const containerRef = useRef(null);

  const props = useSpring({
    from: { maxHeight: inView ? 1 : containerRef.current?.clientHeight },
    to: { maxHeight: inView ? containerRef.current?.clientHeight : 1 },
    config: {
      friction: inView ? 250 : 0,
    },
  });

  return (
    <div
      name="contact"
      ref={containerRef}
      className="font-Archivo bg-dark  flex gap-4  lg:gap-12 p-[var(--mobile-padding)] lg:px-[var(--desktop-padding)]  justify-start items-start w-full h-full   min-w-screen m-auto max-w-[var(--desktop-max)] "
    >
      <div className="hidden md:flex flex-col justify-start items-center  h-full gap-10 relative  ">
        <div className="w-[2.5rem] h-[2.5rem] relative  flex justify-center items-center">
          <div className="w-full  h-full absolute bg-[#773fc6]/50  blur-lg rounded-full bottom-0 left-0" />
          <IoMailOpenOutline className="w-8 h-8 z-20 " />
        </div>
        <div ref={containerRef} className="h-full">
          <animated.div
            ref={ref}
            style={props}
            className="w-[2px] h-full bg-gradient-to-b from-[#773fc6] to-[#773fc6]  rounded-lg"
          >
            <div className="w-[4px] h-full bg-gradient-to-b from-[#773fc6] to-[#773fc6] blur-md rounded-lg " />
          </animated.div>
        </div>
      </div>
      <div className="font-Archivo flex flex-col gap-12  justify-start items-start w-full   ">
        <div className="flex justify-start items-center w-full h-full ">
          <div className="w-full h-full  flex flex-col justify-start items-start ">
            <div className="flex justify-start items-start gap-8">
              <div className="w-full h-full flex flex-col  justify-start items-start gap-4 md:gap-8">
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
        <div className="w-full lg:w-1/2  h-full md:border border-light/50 rounded-xl">
          <HubSpotForm />
        </div>
      </div>
      <Links type={"bottom"} />
    </div>
  );
};

export default Contact;
