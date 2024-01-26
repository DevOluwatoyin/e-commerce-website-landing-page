import React from "react";
import Link from "next/link";
import { links } from "../constants/nav";
import { useRouter } from "next/navigation";

const DesktopNav = () => {
  const router = useRouter();
  return (
    <nav className="hidden md:flex">
      {links.map((item, id) => {
        const isActive = router.asPath === links.href;
        return (
          <Link
            href={item.path}
            key={id}
            className={`px-4 py-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:underline duration-200 ${
              isActive
                ? "border-b border-color-white py-2"
                : ""
            }`}
          >
            {item.text}
          </Link>
        );})}
    </nav>
  );
};

export default DesktopNav;
