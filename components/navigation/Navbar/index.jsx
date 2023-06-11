import React from "react";

const Navbar = () => {
  return (
    <div style={{ zIndex: "999" }} className=" w-screen  h-[80px] fixed">
      <div className=" z-50 flex justify-between items-center text-dark h-full mx-[4rem] px-[2.5rem] rounded-b-xl backdrop-blur-3xl bg-transparent font-Moiser text-2xl">
        <span>Ben Thorne's Portfolio</span>
        <ul className="flex justify-center items-center gap-8">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
