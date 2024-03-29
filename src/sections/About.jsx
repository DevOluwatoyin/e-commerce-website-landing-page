import { features } from "@/constants/features";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-20 text-center max-w-[1300px] mx-auto px-8 pt-10 mb-20"
    >
      <h3 className="text-[32px] font-bold">About us</h3>
      <p className="text-sm text-gray-light font-light mt-3 mb-12 md:text-lg">
        Order now and appreciate the beauty of nature.
      </p>
      <div className="flex justify-between flex-col items-center gap-4 flex-wrap md:flex-row">
        {features.map((feature, id) => (
          <div key={id} className="flex items-center flex-col flex-1">
            <Image src={feature.image} alt={feature.title} />
            <p className="text-base font-bold mt-6 mb-3 md:text-lg">
              {feature.title}
            </p>
            <p className="text-gray-light text-base font-light md:text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
