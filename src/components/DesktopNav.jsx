import React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
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
          <a></a>
        </Link>
      </ul>
    </nav>
  );
};

export default DesktopNav;
