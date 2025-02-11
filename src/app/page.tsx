import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-center">
    <HeroSection/>
    <FeaturedCourse/>
    <WhyChooseUs/>
    <MovingCards/>
    <UpcomingWebinars/>
    <Instructor/> 
    
   </main>
  );
}
