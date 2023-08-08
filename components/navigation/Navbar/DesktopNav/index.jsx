"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bensPortfolioEditLight from "../../../../public/images/logos/bensPortfolioEditWhite.png";
import { animated, useTransition, useSpring } from "@react-spring/web";
import { Link as ReactLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const DesktopNav = ({ type }) => {
  const [show, setShow] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navBarTransitions = useTransition(show, {
    from: { opacity: 0, y: -50, zIndex: "9000" },
    enter: { opacity: 1, y: 0, zIndex: "9000" },
    leave: { opacity: 0, y: -50, zIndex: "9000" },
    delay: show ? 0 : 400,
  });

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setShow(true);
  }, [pathname]);

  return navBarTransitions(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className=" w-full  h-[80px] font-Archivo  fixed   flex justify-center items-center text-light   "
        >
          <div className=" z-50 flex justify-between items-center w-full h-full text-md max-w-[2000px] px-[var(--desktop-padding)]  bg-dark   rounded-b-lg  ">
            <Link href={"/"}>
              <Image
                src={bensPortfolioEditLight}
                width={175}
                height={50}
                alt="Ben Thorne's portfolio logo"
                className=""
              />
            </Link>
            {pathname === "/" ? (
              <ul className=" justify-center items-center gap-8  text-md flex">
                <ReactLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="about"
                  className="hover:cursor-pointer hover:text-highlight flex justify-start items-end gap-2 transition-all"
                >
                  <span className="font-[800] ">1 .</span>About
                </ReactLink>
                <ReactLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="projects"
                  className="hover:cursor-pointer hover:text-highlight flex justify-start items-end gap-2 transition-all"
                >
                  <span className="font-[800] ">2 .</span>Projects
                </ReactLink>

                <ReactLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="contact"
                  className="hover:cursor-pointer hover:text-highlight flex justify-start items-end gap-2 transition-all"
                >
                  <span className="font-[800] ">3 .</span>Contact
                </ReactLink>
              </ul>
            ) : (
              <ul className=" justify-center items-center gap-8  text-md flex">
                <Link
                  href="/"
                  className="hover:cursor-pointer hover:text-highlight flex justify-center items-center gap-2 transition-all"
                >
                  <IoArrowBackCircleOutline className="w-6 h-6" />
                  Back
                </Link>
              </ul>
            )}
          </div>
        </animated.div>
      )
  );
};

export default DesktopNav;
