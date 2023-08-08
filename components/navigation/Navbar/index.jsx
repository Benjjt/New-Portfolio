import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = ({ type }) => {
  return (
    <>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:block">
        <DesktopNav type={type} />
      </div>
    </>
  );
};

export default Navbar;
