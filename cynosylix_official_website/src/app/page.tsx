// import Image from "next/image";

import AboutUs from "./Components/aboutUs";
import { Footer } from "./Components/footer";
import Gallery from "./Components/gallery";
import Hero from "./Components/hero";
import Services from "./Components/services";
import WhyChooseUs from "./Components/whyChooseUs";
import OurTechnologyForDevelopement from "./Components/OurTechnologyForDEvelopement/ourTechnologyForDevelopement"


export default function Home() {
  return (
    <div >
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <OurTechnologyForDevelopement />
      <Gallery />
      <Footer />
      
    </div>
  );
}
