"use client";
import React, { useState, useEffect } from "react";
import styles from "./MobileNav.module.css";
import Image from "next/image";
import { Link as ReactLink } from "react-scroll";
import Link from "next/link";
import bensPortfolioEditLight from "../../../../public/images/logos/bensPortfolioEditWhite.png";
import { IoMenuSharp, IoCloseSharp, IoHomeOutline } from "react-icons/io5";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFilePdf, AiOutlineArrowUp } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Links from "../../Links";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getMenuHeightClass = () => {
    return menuOpen ? "h-screen" : "h-[80px]";
  };

  return (
    <div
      className={`w-full font-Archivo z-50 fixed border-b border-white/50 rounded-lg flex flex-col justify-start bg-dark items-center transition-height text-light overflow-hidden duration-300 ${getMenuHeightClass()}`}
    >
      <div className="z-50 flex justify-between h-[80px] items-center w-full text-md px-[var(--mobile-padding)] bg-dark rounded-b-lg">
        <Image
          src={bensPortfolioEditLight}
          width={175}
          height={50}
          alt="Ben Thorne's portfolio logo"
        />
        {pathname === "/" ? (
          menuOpen ? (
            <IoCloseSharp onClick={() => toggleMenu()} className="w-8 h-8" />
          ) : (
            <IoMenuSharp onClick={() => toggleMenu()} className="w-8 h-8" />
          )
        ) : (
          <Link href="/">
            <IoHomeOutline className="w-8 h-8" />
          </Link>
        )}
      </div>
      {/* Staggered animated links */}
      {menuOpen && (
        <ul className="flex font-bold flex-col justify-start items-start w-full p-[var(--mobile-padding)] gap-4 mt-4 text-6xl">
          <ReactLink
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            to="about"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={`text-white ${styles.animatedDiv} ${styles.delay1} flex justify-start items-end gap-2 transition-all`}
          >
            About
          </ReactLink>
          <ReactLink
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            to="projects"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={`text-white ${styles.animatedDiv} ${styles.delay2} flex justify-start items-end gap-2 transition-all`}
          >
            Projects
          </ReactLink>
          <ReactLink
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            to="contact"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={`text-white ${styles.animatedDiv} ${styles.delay3} flex justify-start items-end gap-2 transition-all`}
          >
            Contact
          </ReactLink>
          <Links type={"mobile"} />
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
