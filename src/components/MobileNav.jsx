import React, { useState } from "react";
import Link from "next/link";
import { navlinks } from "../constants/nav";
import ham from "/public/icons/ham.svg";
import close from "/public/icons/close.svg";
import Image from "next/image";

const MobileNav = () => {
  const [nav, navOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => navOpen(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <Image src={close} alt="close" />
        ) : (
          <Image src={ham} alt="open" />
        )}
      </div>

      {nav && (
        <nav className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#C1DCDC] to-white ">
          {navlinks.map((item, id) => (
            <Link
              href={item.path}
              key={id}
              onClick={() => navOpen(!nav)}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {item.text}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default MobileNav;
