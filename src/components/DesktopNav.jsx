import React from "react";
import Link from "next/link";
import { navlinks } from "../constants/nav";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex">
      {navlinks.map((item, id) => (
        <Link
          href={item.path}
          key={id}
          className="px-4 py-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:underline duration-200 underline-offset-2"
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
