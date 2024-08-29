import CallToAction from "@/components/CallToAction";
import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import OurService from "@/components/home/OurService";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen xl:max-w-[80vw] mx-auto">
      <Hero />
      <AboutUs />
      <OurService />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
