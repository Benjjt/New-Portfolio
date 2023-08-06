import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      {/* Show mobile navbar on screens smaller than md */}
      <div className="md:hidden">
        <MobileNav />
      </div>

      {/* Show desktop navbar on screens md and larger */}
      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar;
