"use client"

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { IconButtonCustomStyles } from "./footerIcons";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of scrolling in milliseconds
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress); // Custom easing function
        window.scrollTo(0, startPosition + distance * easing);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      requestAnimationFrame(animation);
    }
  };

  // List of useful links with corresponding section IDs
  const usefulLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "Services", id: "services" },
    { label: "Courses", id: "courses" },
    { label: "Gallery", id: "gallery" },
    { label: "Blogs", id: "blogs" },
    { label: "Terms & Conditions", id: "terms" },
    { label: "Privacy Policy", id: "privacy-policy" },
    { label: "Contact Us", id: "contact-us" },
  ];

  return (
    <footer className="relative bg-black pt-8 pb-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Contact Information */}
          <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Let's keep in touch!</h4>
            <h5 className="text-xs sm:text-sm lg:text-base mt-0 mb-2 text-gray-400">
              Cynosylix Technology
            </h5>
            <h6 className="text-xs sm:text-sm lg:text-base mt-0 mb-2 text-gray-400">
              Ernakulam, Kerala, India, 682011
            </h6>
            <h6 className="text-xs sm:text-sm lg:text-base mt-0 mb-2 text-gray-400">
              Phone: +91 8891909301
            </h6>
            <h6 className="text-xs sm:text-sm lg:text-base mt-0 mb-2 text-gray-400">
              Email: cynosylixtechnology@gmail.com
            </h6>
            <div className="mt-6">
              <IconButtonCustomStyles />
            </div>
          </div>

          {/* Useful Links & Our Services */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap justify-between">
              {/* Useful Links */}
              <div className="w-full sm:w-6/12 lg:w-5/12 mb-6 lg:mb-0">
                <span className="block uppercase text-xs sm:text-sm text-gray-400 font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled space-y-2">
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-400 hover:text-gray-200 font-semibold block text-xxs sm:text-xs"
                        href="#"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div className="w-full sm:w-6/12 lg:w-6/12">
                <span className="block uppercase text-xs sm:text-sm text-gray-400 font-semibold mb-2">Our Services</span>
                <ul className="list-unstyled space-y-2">
                  {["Web App Development", "UI / UX Design", "iOS App Development", "ERP Softwares", "Android App Development", "Hybrid App Development", "Billing Software Development", "Windows App Development", "Artificial Intelligence Services", "Embedded Solutions", "IoT Applications"].map((service, index) => (
                    <li key={index}>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block text-xxs sm:text-xs"
                        href="#"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <hr className="my-2 border-gray-500 w-full" />
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full px-4 text-center">
            <div className="text-xxs sm:text-xs text-gray-400 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}
              <a href="https://cynosylix.com/" className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                Cynosylix Technology
              </a>{" "}
              | Designed by{" "}
              <a href="https://cynosylix.com/" className="text-gray-400 hover:text-gray-200">
                Cynosylix Technology
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
