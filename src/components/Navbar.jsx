"use client";

import React from "react";
import Image from "next/image";
import logo from "/public/logo.svg";
import ham from "/public/icons/ham.svg";
import { usePathname } from "next/navigation";
import close from "/public/icons/close.svg";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="p-3">
      <Image src={logo} alt="Greenmind Logo" priority />
      <Image src={ham} alt="open Icon" priority className="md:hidden" />
      <Image src={close} alt="Close Icon" priority className="md:hidden" />

      <nav>
        <ul>
          <Link
            className={`link ${
              pathname === "/" ? "font-bold underline underline-offset-2" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/#about" ? "active" : ""}`}
            href="#about"
          >
            About
          </Link>
          <Link
            className={`link ${pathname === "/#categories" ? "active" : ""}`}
            href="#categories"
          >
            Categories
          </Link>
          <Link
            className={`link ${pathname === "/products" ? "active" : ""}`}
            href="/products"
          >
            Products
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
