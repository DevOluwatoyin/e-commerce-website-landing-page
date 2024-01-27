import React from "react";
import PublicLayout from "@/components/PublicLayout";
import { allPlants } from "@/constants/plants";
import ProductCard from "@/components/ProductCard";

const page = () => {
  const selectedPlants = allPlants.slice(3);
  return (
    <PublicLayout>
      <section className="scroll-mt-20">
        <div className="px-3 max-w-[1300px] mx-auto pt-10">
          <h1 className="text-3xl text-center font-extrabold mt-4 mb-14 lg:text-5xl">
            Our Products
          </h1>
          <div className="grid justify-between items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {selectedPlants.map((plant, id) => (
              <ProductCard
                key={id}
                image={plant.image}
                name={plant.name}
                price={plant.price}
              />
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default page;
