// import Image from "next/image";

import AboutUs from "./Components/aboutUs";
import Gallery from "./Components/gallery";
import Hero from "./Components/hero";
import Services from "./Components/services";
import WhyChooseUs from "./Components/whyChooseUs";
import OurTechnologyForDevelopement from "./Components/OurTechnologyForDEvelopement/ourTechnologyForDevelopement"
import ContactUs from "./Components/contactUs";


export default function Home() {
  return (
    <div >
      <Hero />
      <AboutUs />
      <OurTechnologyForDevelopement />

      <Services />
      <WhyChooseUs />
      <Gallery />
      <ContactUs />
      
      
    </div>
  );
}
