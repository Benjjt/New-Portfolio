import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{ zIndex: "999" }} className=" w-screen  h-[80px] fixed">
      <div className=" z-50 flex justify-between items-center text-dark h-full mx-[4rem] px-[2.5rem] rounded-b-xl backdrop-blur-3xl bg-transparent font-Moiser text-2xl">
        <span className="hover:cursor-pointer">Ben Thorne's Portfolio</span>
        <ul className="flex justify-center items-center gap-8">
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
        </ul>
        <ul className="flex justify-center items-center gap-8">
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Projects</li>
          <li className="hover:cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
