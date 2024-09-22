// import Image from "next/image";

import AboutUs from "./Components/aboutUs";
import { Footer } from "./Components/footer";
import Hero from "./Components/hero";
import Services from "./Components/services";
import WhyChooseUs from "./Components/whyChooseUs";

export default function Home() {
  return (
    <div >
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />



      <Footer />
      
    </div>
  );
}
