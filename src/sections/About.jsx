import { features } from "@/constants/features";
import React from "react";
import Image from "next/image";


const About = () => {
  return (
    <div id="about" className="scroll-mt-20">
      <h3 className="text-[32px] font-bold">About us</h3>
      <p>Order now and appreciate the beauty of nature</p>
      <div className="flex justify-between items-center gap-4">
        {features.map((feature, id) => (
          <div key={id}>
            <Image src={feature.image} alt={feature.title} />
            <p>{ feature.title}</p>
            <p>{ feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
