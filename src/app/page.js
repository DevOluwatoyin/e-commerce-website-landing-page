import About from "@/sections/About";
import Categories from "@/sections/Categories";
import PublicLayout from "@/components/PublicLayout";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";
import heroImage from "/public/images/hero-img.png";
import Button from "@/components/Button";
import Link from "next/link";
import BestSelling from "@/sections/BestSelling";

export default function Home() {
  return (
    <PublicLayout>
      <main className="bg-primary">
        <div className="max-w-[1300px] mx-auto flex justify-between flex-col p-4 md:flex-row pb-0">
          <div className="space-y-8 text-center self-center py-4 md:text-left md:flex-1">
            <h1 className="text-[28px] font-extrabold max-w-lg sm:text-5xl lg:text-[64px]">
              Buy your dream plants
            </h1>
            <div className="flex items-center justify-center gap-12 font-medium text-dark-two md:justify-start">
              <div>
                <p className="text-xl lg:text-[32px]">50+</p>
                <p className="text-base lg:text-lg">Plant Species</p>
              </div>
              <span className="w-[1px] h-16 bg-dark-two"></span>
              <div>
                <p className="text-xl lg:text-[32px]">100+</p>
                <p className="text-base lg:text-lg">Customers</p>
              </div>
            </div>
            <Button
              text="Products"
              bgColor="white"
              link={true}
              role="call to action"
            />
          </div>
          <Image src={heroImage} alt="hero image" className="md:flex-1" />
        </div>
      </main>

      <BestSelling />
      <About />
      <Categories />
      <Testimonials />
    </PublicLayout>
  );
}
