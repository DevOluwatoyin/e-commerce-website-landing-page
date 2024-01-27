import { productCategories } from "@/constants/plants";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Categories = () => {
  return (
    <section id="categories" className="scroll-mt-20 text-center pt-10 mb-20">
      <h3 className="text-[32px] font-bold">Categories</h3>
      <p className="text-sm font-medium text-gray-light mt-3 mb-12 md:text-lg">
        Find what you are looking for
      </p>

      <div className="bg-primary px-8 pt-10 pb-14 text-dark-two space-y-6">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-20 md:flex-row">
          {productCategories.map((product, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center space-y-2 group"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="group-hover:opacity-80 transition-opacity cursor-pointer"
              />
              <p className="text-base font-bold md:text-lg">{product.name}</p>
              <p className="text-base font-medium text-gray-light md:text-lg">
                {product.description}
              </p>
            </div>
          ))}
        </div>
        <Button bgColor="#ffffff" text="Explore" maxWidth="150px" icon={true} />
      </div>
    </section>
  );
};

export default Categories;
