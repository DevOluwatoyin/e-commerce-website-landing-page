import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import { allPlants } from "@/constants/plants";

const BestSelling = () => {
  const plants = allPlants.slice(0, 3);
  return (
    <section className="flex flex-col py-10 px-8 md:flex-row text-dark-two justify-around">
      <div className="space-y-4">
        <h3 className="text-4xl font-bold">Best Selling Plants</h3>
        <p className="text-lg text-gray-light">
          Easiest way to healthy life by buying your favorite plants{" "}
        </p>
        <Button text="See more" bgColor="#C1DCDC" maxWidth="168px" />
      </div>
      <div className="flex justify-between flex-col gap-10 md:flex-row">
        {plants.map((plant, id) => (
          <div key={id} className="space-y-4 text-lg font-medium">
            <div className="max-w-[300px]">
              <Image src={plant.image} alt={plant.name} className="w-[300px]" />
            </div>
            <p>{plant.name}</p>
            <p className="text-gray-light">{plant.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
