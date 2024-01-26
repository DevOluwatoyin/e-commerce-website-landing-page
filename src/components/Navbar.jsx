// Import necessary modules
"use client";

import React from "react";
import Image from "next/image";
import logo from "/public/logo.svg";
import ham from "/public/icons/ham.svg";
import close from "/public/icons/close.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Navbar component
const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-3 md:flex md:items-center md:justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Greenmind Logo" priority />
        <Image src={ham} alt="Open Icon" priority className="md:hidden ml-4" />
        <Image
          src={close}
          alt="Close Icon"
          priority
          className="md:hidden ml-4"
        />
      </div>

      {/* Navbar Links */}
      <nav className="md:flex hidden">
        <ul className="flex space-x-4">
          <Link
            href="/"
            className={`link ${
              pathname === "/" ? "font-bold underline underline-offset-2" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={`link ${pathname === "/#about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="#categories"
            className={`link ${pathname === "/#categories" ? "active" : ""}`}
          >
            Categories
          </Link>
          <Link
            href="/products"
            className={`link ${pathname === "/products" ? "active" : ""}`}
          >
            Products
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
