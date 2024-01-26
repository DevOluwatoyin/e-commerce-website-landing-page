import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "/public/icons/arrow-right.svg";

const Button = ({ text, bgColor }) => {
  return (
    <Link
      href="/products"
      className="rounded-lg overflow-hidden inline-block group hover:transition-all max-w-[160px]"
    >
      <button
        className="text-lg flex items-center gap-2 px-6 py-3 hover:transition ease-in-out text-dark-two font-medium group-hover:tracking-wider"
        style={{ backgroundColor: bgColor }}
      >
        <span>{text}</span>
        <Image
          src={arrowRight}
          alt="arrow right"
          className="group-hover:translate-x-1 hover:transition ease-in-out"
        />
      </button>
    </Link>
  );
};

export default Button;
