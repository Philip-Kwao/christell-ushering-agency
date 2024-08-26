import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import OurService from "@/components/home/OurService";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <OurService />
    </main>
  );
}
