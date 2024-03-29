import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import { allPlants } from "@/constants/plants";

const BestSelling = () => {
  const plants = allPlants.slice(0, 3);
  return (
    <section className="flex flex-col my-20 px-8 text-dark-two justify-around gap-10 max-w-[1300px] mx-auto md:flex-row">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold lg:text-4xl">Best Selling Plants</h2>
        <p className="font-light text-gray-light lg:text-lg">
          Easiest way to healthy life by buying your favorite plants{" "}
        </p>
        <Button
          text="See more"
          bgColor="#C1DCDC"
          maxWidth="175px"
          link={true}
        />
      </div>
      <div
        className="flex justify-between items-center flex-wrap flex-col gap-10 md:flex-row"
        role=""
      >
        {plants.map((plant, id) => (
          <div
            key={id}
            className="font-medium flex-1 text-center group md:text-left lg:text-lg"
          >
            <Image
              src={plant.image}
              alt={plant.name}
              className="group-hover:opacity-[0.7] cursor-pointer transition-opacity"
            />
            <p className="mt-3 mb-1">{plant.name}</p>
            <p className="text-gray-light font-light">{plant.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
