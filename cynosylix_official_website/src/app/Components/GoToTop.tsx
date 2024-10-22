/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-50 cursor-pointer "
          title="Go to top"
        >
          <IconButton className="p-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-black text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <i className="fas fa-arrow-up text-3xl" /> {/* Increased icon size */}
          </IconButton>
        </div>
      )}
    </>
  );
}
