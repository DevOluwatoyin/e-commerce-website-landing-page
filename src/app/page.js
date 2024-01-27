import About from "@/sections/About";
import Categories from "@/sections/Categories";
import PublicLayout from "@/components/PublicLayout";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";
import heroImage from "/public/images/hero-img.png";
import Button from "@/components/Button";
import BestSelling from "@/sections/BestSelling";

export default function Home() {
  return (
    <PublicLayout>
      <main className="bg-primary">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between flex-col p-4 md:flex-row pb-0">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-[28px] font-extrabold max-w-lg sm:text-5xl md:text-[64px]">
              Buy your dream plants
            </h1>
            <div className="flex items-center justify-center gap-12 font-medium text-dark-two md:justify-start">
              <div>
                <p className="text-xl md:text-[32px]">50+</p>
                <p className="text-base md:text-lg">Plant Species</p>
              </div>
              <span className="w-[1px] h-16 bg-dark-two"></span>
              <div>
                <p className="text-xl md:text-[32px]">100+</p>
                <p className="text-base md:text-lg">Customers</p>
              </div>
            </div>
            <Button text="Products" bgColor="white" maxWidth="160px" />
          </div>
          <Image src={heroImage} alt="hero image" />
        </div>
      </main>

      <BestSelling />
      <About />
      <Categories />
      <Testimonials />
    </PublicLayout>
  );
}
