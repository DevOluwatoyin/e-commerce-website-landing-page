"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  function handleScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="h-20"></div>
      <header
        className={`flex justify-between items-center text-center w-full top-0 h-20 p-4 text-black bg-white fixed z-50 transition-all duration-500 ease-in-out  ${
          isScrolled ? "shadow-3xl" : ""
        }`}
      >
        <Link href="/">
          <Image src={logo} alt="Greenmind Logo" priority />
        </Link>

        <DesktopNav />
        <MobileNav />
      </header>
    </>
  );
};

export default Navbar;
