import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "/public/icons/arrow-right.svg";

const Button = ({ text, bgColor, role, link }) => {
  return (
    <>
      {link ? (
        <Link
          href="/products"
          role={role}
          className="text-base w-fit mx-auto flex items-center gap-2 px-6 py-3 hover:transition ease-in-out text-dark-two font-medium group hover:delay-500 rounded-lg md:text-lg md:mx-0"
          style={{
            backgroundColor: bgColor,
          }}
        >
          <span className="group-hover:tracking-wider ">{text}</span>
          <Image
            src={arrowRight}
            alt="arrow right"
            className="group-hover:translate-x-1"
          />
        </Link>
      ) : (
        <button role="Buy product" className="rounded-lg py-2 px-3 text-dark-two font-medium border-2 border-black transition-all hover:border-primary hover:delay-200 lg:text-lg ">
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
