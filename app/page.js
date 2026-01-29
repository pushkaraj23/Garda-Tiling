import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import RatingSection from "@/components/home/RatingSection";
import RecentProjects from "@/components/home/RecentProjects";
import ServicesSection from "@/components/home/ServicesSection";
import WhatOurClientsSay from "@/components/home/WhatOurClientsSay";
import WhyChooseSection from "@/components/home/WhyChooseSection";

export default function page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <RatingSection />
      <ServicesSection />
      <WhyChooseSection />
      <RecentProjects />
      <HowItWorks />
      <WhatOurClientsSay />
    </div>
  );
}
