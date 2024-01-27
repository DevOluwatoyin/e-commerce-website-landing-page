import React from "react";

const Testimonials = () => {
  return (
    <section className="scroll-mt-20 pt-10 mb-20">
      <div className="md:max-w-[1300px] mx-auto px-4 space-y-10">
        <h3 className="font-bold text-xl md:text-2xl">
          What customers say about
          <br /> GREEMIND?
        </h3>

        <div className="flex items-center flex-col justify-center bg-primary p-4 rounded-xl shadow-2xl space-y-5 max-w-lg mx-auto">
          <p className=" font-medium lg:text-lg">
            Exceptional service! I recently purchased a variety of plants and
            plants accessories from this wonderful business, and I couldn't be
            more pleased. The quality of their artificial plants is unmatched,
            providing a lifelike and vibrant addition to my home.
          </p>
          <div className="text-center">
            <p className="font-bold md:text-lg">Jane Doe</p>
            <p className="text-light text-sm lg:text-base">Youtuber</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
