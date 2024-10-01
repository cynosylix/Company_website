// import Image from "next/image";

import AboutUs from "./Components/aboutUs";
import Gallery from "./Components/gallery";
import Hero from "./Components/hero";
import Services from "./Components/services";
import WhyChooseUs from "./Components/whyChooseUs";
import OurTechnologyForDevelopement from "./Components/OurTechnologyForDEvelopement/ourTechnologyForDevelopement"
import ContactUs from "./Components/contactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cynosylix Technology | Best project centre in kochi",
  description: "Explore Kerala's premier embedded and IoT project centre, where creativity meets technology. Get expert support for your next innovative project!",
  icons: {
    icon: '/logow.png',
  
  },
};

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
