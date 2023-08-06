"use client";
import React, { useState, useEffect } from "react";
import styles from "./MobileNav.module.css";
import Image from "next/image";
import { Link as ReactLink } from "react-scroll";
import bensPortfolioEditLight from "../../../../public/images/logos/bensPortfolioEditWhite.png";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFilePdf, AiOutlineArrowUp } from "react-icons/ai";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getMenuHeightClass = () => {
    return menuOpen ? "h-screen" : "h-[80px]";
  };

  return (
    <div
      className={`w-full font-Archivo z-50 fixed border-b border-white/50 rounded-lg flex flex-col justify-start bg-dark items-center transition-height overflow-hidden duration-300 ${getMenuHeightClass()}`}
    >
      <div className="z-50 flex justify-between h-[80px] items-center w-full text-md px-[var(--mobile-padding)] bg-dark rounded-b-lg">
        <Image
          src={bensPortfolioEditLight}
          width={175}
          height={50}
          alt="Ben Thorne's portfolio logo"
        />
        {menuOpen ? (
          <IoCloseSharp onClick={() => toggleMenu()} className="w-8 h-8" />
        ) : (
          <IoMenuSharp onClick={() => toggleMenu()} className="w-8 h-8" />
        )}
      </div>
      {/* Staggered animated links */}
      {menuOpen && (
        <ul className="flex font-bold flex-col justify-start items-start w-full p-[var(--mobile-padding)] gap-4 mt-4 text-6xl">
          <li className={`text-white ${styles.animatedDiv} ${styles.delay1}`}>
            About
          </li>
          <li className={`text-white ${styles.animatedDiv}  ${styles.delay2}`}>
            Projects
          </li>
          <li className={`text-white ${styles.animatedDiv}  ${styles.delay3}`}>
            Contact
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
