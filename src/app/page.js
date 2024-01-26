import About from "@/components/About";
import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        A new beginning
        <Link href="/products">Products</Link>
      </main>

      <About />
      <Categories />
      <Testimonials />
    </>
  );
}
