/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';





const Hero = () => {
  return (
    <>
     
      <section id="home" className="  overflow-hidden bg-[#FAFFF3] dark:bg-gray-800 ">
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/hero-background.jpg"
              alt="Cynosylix technology"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 md:px-6 lg:px-10">
            <div className="flex flex-col items-center justify-center md:flex-row">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-2">
                Welcome to
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:ml-3 text-[#51f761]">
                Cynosylix Technology
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6">
              Pioneering Tomorrow's Solutions, Today!
            </p>

            {/* Button */}
            <a
              href="#"
              className="bg-transparent text-[#FAFFF3] hover:bg-[#6B8F71] hover:text-white py-2 px-4 md:px-6 lg:px-8 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-100 hover:shadow-lg border border-[#FAFFF3]"
            >
              Academic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
