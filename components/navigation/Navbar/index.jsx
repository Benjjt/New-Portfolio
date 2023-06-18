import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import bensPortfolioDark from "../../../public/images/logos/bensPortfolioDark.png";
import bensPortfolioEditLight from "../../../public/images/logos/bensPortfolioEditWhite.png";

const Navbar = () => {
  return (
    <div
      style={{ zIndex: "999" }}
      className=" w-full  h-[80px] font-Archivo rounded-b-lg fixed "
    >
      <div className=" z-50 flex justify-between items-center h-full text-md max-w-[2000px] mx-auto px-[var(--desktop-padding)] ">
        <Image
          src={bensPortfolioEditLight}
          width={175}
          height={175}
          alt="Ben Thorne's portfolio logo"
          className=""
        />
        {/* <ul className="flex justify-center items-center gap-8 ">
          <Link target="_blank" href="https://github.com/Benjjt">
            <li className="hover:cursor-pointer">
              <FaGithubAlt />
            </li>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/benjamin-thorne101/"
          >
            <li className="hover:cursor-pointer">
              <FaLinkedinIn />
            </li>
          </Link>
        </ul> */}
        <ul className="flex justify-center items-center gap-8  text-md">
          <li className="hover:cursor-pointer flex justify-start items-end gap-2">
            <span className="font-[800] ">1 .</span>About
          </li>
          <li className="hover:cursor-pointer flex justify-start items-end gap-2">
            <span className="font-[800] ">2 .</span>Projects
          </li>
          <li className="hover:cursor-pointer flex justify-start items-end gap-2">
            <span className="font-[800] ">3 .</span>Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
