import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const MobileNav = ({ toggleMobileNav, isMobileNavOpen }) => {
  const pathname = usePathname();

  return (
    <nav className={`md:hidden ${isMobileNavOpen ? "block" : "hidden"}`}>
      <ul className="flex flex-col space-y-4">
        <Link
          href="/"
          className={`link ${
            pathname === "/" ? "font-bold underline underline-offset-2" : ""
          }`}
          onClick={toggleMobileNav}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={`link ${
            pathname === "/#about"
              ? "font-bold underline underline-offset-2"
              : ""
          }`}
          onClick={toggleMobileNav}
        >
          About
        </Link>
        <Link
          href="#categories"
          className={`link ${
            pathname === "/#categories"
              ? "font-bold underline underline-offset-2"
              : ""
          }`}
          onClick={toggleMobileNav}
        >
          Categories
        </Link>
        <Link
          href="/products"
          className={`link ${
            pathname === "/products"
              ? "font-bold underline underline-offset-2"
              : ""
          }`}
          onClick={toggleMobileNav}
        >
          Products
        </Link>
      </ul>
    </nav>
  );
};

export default MobileNav;
