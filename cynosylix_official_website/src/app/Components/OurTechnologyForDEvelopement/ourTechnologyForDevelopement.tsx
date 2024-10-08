import React from 'react';
import CloudServices from './cloudServices';

const OurTechnologyForDEvelopement = () => {
  return (
    <section className="pt-4 pb-4 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive heading */}
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-left font-bold leading-tight text-black dark:text-white mb-3">
          Our Technologies
          <br className="block sm:hidden" />
        </h2>

        {/* CloudServices component */}
        <CloudServices />
      </div>
    </section>
  );
};

export default OurTechnologyForDEvelopement;
