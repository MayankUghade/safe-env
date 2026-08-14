import { FeaturesSection } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { HowItWorksSection } from "@/components/working";


export default function Home() {
  return (
    <div>
      <Navbar/>
       <Hero/>
      <FeaturesSection/>
      <HowItWorksSection/>
    </div>
  );
}