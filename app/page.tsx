import { Banner } from "@/components/Banner";
import { FeaturesSection } from "@/components/Features";
import { Footer } from "@/components/Footer";
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
      <Banner/>
      <Footer/>
    </div>
  );
}