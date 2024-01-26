import React, { useState } from "react";
import Link from "next/link";
import { links } from "../constants/nav";
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
          <Image src={close} alt="Greenmind Logo" priority />
        ) : (
          <Image src={ham} alt="Greenmind Logo" priority />
        )}
      </div>

      {nav && (
        <nav className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#C1DCDC] to-gray-500 ">
          {links.map((item, id) => (
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
