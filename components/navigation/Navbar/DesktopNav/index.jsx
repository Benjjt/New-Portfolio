"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bensPortfolioEditLight from "../../../../public/images/logos/bensPortfolioEditWhite.png";
import { animated, useTransition, useSpring } from "@react-spring/web";
import { Link as ReactLink } from "react-scroll";
import Link from "next/link";
import { IoArrowBackCircleOutline, IoHomeOutline } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";

const DesktopNav = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  const props = useSpring({
    from: { opacity: show ? 0 : 1, y: show ? -50 : 0, zIndex: "9000" },
    to: { opacity: show ? 1 : 0, y: show ? 0 : -50, zIndex: "9000" },
  });

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setShow(true); // Show the navbar if user is at the top
      } else if (currentScrollPos > prevScrollPos) {
        setShow(false); // Hide the navbar when scrolling down
      } else {
        setShow(true); // Show the navbar when scrolling up
      }
      prevScrollPos = currentScrollPos;
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setShow(true); // Show the navbar on non-root pages
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div
      style={{ zIndex: 999999 }}
      className={` w-full  h-[80px] font-Archivo transition-all duration-700 fixed    flex justify-center items-center text-light ${
        show ? "opcacity-1 top-0 " : "opacity-0 top-[-50px]"
      }   `}
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
            <Link href="/">
              <IoHomeOutline className="w-8 h-8" />
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
