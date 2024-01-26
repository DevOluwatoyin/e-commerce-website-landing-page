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
        <h1 className="text-5xl font-extrabold">I am the home</h1>
        <Link href="/products">Products</Link>
      </main>

      <About />
      <Categories />
      <Testimonials />
    </>
  );
}
