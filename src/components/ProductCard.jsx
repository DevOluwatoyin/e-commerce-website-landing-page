import React from 'react'
import Image from "next/image";


const ProductCard = ({image, name,price}) => {
  return (
    <div>
      <Image src={image} alt="greenmind" />
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default ProductCard