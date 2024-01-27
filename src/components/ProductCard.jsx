import React from "react";
import Image from "next/image";
import Button from "./Button";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="flex items-center justify-center flex-col text-center ">
      <Image
        src={image}
        alt="greenmind"
        className="hover:opacity-80 transition-opacity"
      />
      <div className="flex items-center justify-center gap-3 flex-col lg:flex-row">
        <p className="flex flex-col gap-1">
          <span className="font-bold text-sm lg:text-base">{name}</span>
          <span className="text-gray-light font-light text-xs lg:text-sm">
            {price}
          </span>
        </p>
        <Button text="Buy now" />
      </div>
    </div>
  );
};

export default ProductCard;
