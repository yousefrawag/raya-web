export const revalidate = 60;
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Projects from "@/components/sections/ProjectSection";
import Properties from "@/components/sections/Properties";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FilterSection from "@/components/sections/FilterSection";

import RegionFilter from "@/components/sections/RegionFilter";
import LandingProject from "@/components/sections/LandingProject";
import ProjectServerDataLanding from "@/components/sections/ProjectServerDataLanding";
import BlogServerRendering from "@/components/sections/BlogServerRendering";
import InvestMentServer from "@/components/sections/InvestMentServer";
export default function Home() {
  return (
    <div className=" w-full">
    
<HeroSection />
{/* <FilterSection /> */}
<RegionFilter />

{/* جميع القعارت  */}
<Properties /> 
<InvestMentServer />
<AboutSection />
<BlogServerRendering />
<ServicesSection />
{/* <WhyChooseUs /> */}
    </div>
  );
}
