import ChooseUs from "@/components/ChooseUs";
import CoursesCard from "@/components/CoursesCard";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <CoursesCard/>
    <ChooseUs/>
    <TestimonialCards/>
    </main>
  );
}
