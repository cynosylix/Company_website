/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

import AboutUs from "./Components/aboutUs";
import Gallery from "./Components/gallery";
import Hero from "./Components/hero";
import Services from "./Components/services";
import WhyChooseUs from "./Components/whyChooseUs";
import OurTechnologyForDevelopement from "./Components/OurTechnologyForDEvelopement/ourTechnologyForDevelopement";
import ContactUs from "./Components/contactUs";
import type { Metadata } from "next";
// import BlogSuggestion from "./Components/blog/blogSuggestion";
import TestimonialView from "./Components/testmonial/testmonialView";
import Transition from "./Components/Animations/Transition";
import GoToTop from "./Components/GoToTop"; // Import the GoToTop component

export const metadata: Metadata = {
  title: "Cynosylix Technology | Best project centre in kochi",
  description:
    "Explore Kerala's premier embedded and IoT project centre, where creativity meets technology. Get expert support for your next innovative project!",
  icons: {
    icon: '/logow.png',
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <OurTechnologyForDevelopement />
      <Transition>
        <AboutUs />
      </Transition>
      <Services />
      <WhyChooseUs />
      <Gallery />
      {/* <BlogSuggestion/> */}
      <TestimonialView />
      <ContactUs />

      {/* Sticky WhatsApp Icon */}
      <a
        href="https://wa.me/+918891909301"
        title="Ask me on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50"
      >
        <img
          src={"/whatsappImage.png"}
          alt="WhatsApp"
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        />
      </a>

     
      <GoToTop /> 
    </div>
  );
}

