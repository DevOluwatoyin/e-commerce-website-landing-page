"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.svg";
import ham from "/public/icons/ham.svg";
import close from "/public/icons/close.svg";
import { useEffect } from "react";
import { Link } from "next/link";
import { navLinks } from "../constants/nav";

const Navbar = () => {
  const [nav, navOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between text-center w-full h-20 p-4 text-white bg-black fixed z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "navbar-scroll" : ""
      }`}
    >
      <Image src={logo} alt="Greenmind Logo" priority />

      <nav className="hidden md:flex">
        {navLinks.map(({ text, id }) => (
          <Link
            to={text}
            smooth
            duration={500}
            key={id}
            className="px-4 py-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:underline duration-200"
          >
            {text}
          </Link>
        ))}
      </nav>

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
        <nav className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 ">
          {navLinks.map(({ id, text }) => (
            <Link
              to={text}
              smooth
              duration={500}
              onClick={() => navOpen(!nav)}
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {text}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
