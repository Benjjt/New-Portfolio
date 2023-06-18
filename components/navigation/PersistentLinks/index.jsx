import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const PersistentLinks = () => {
  return (
    <div className="fixed bottom-[var(--desktop-padding)] right-[var(--desktop-padding)] flex flex-col gap-8">
      <span className="border border-light rotate-90" />
      <FaGithubAlt className="w-6 h-6 hover:fill-hightlight transition-all cursor-pointer" />
      <FaLinkedinIn className="w-6 h-6 hover:fill-hightlight transition-all cursor-pointer" />
    </div>
  );
};

export default PersistentLinks;
