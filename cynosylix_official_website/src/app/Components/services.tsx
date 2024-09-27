/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id='services-cards' className="pt-6 pb-6 overflow-hidden bg-[#345635] dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-left font-bold leading-tight text-white dark:text-white sm:text-4xl lg:text-5xl mb-4">
          Services<br className="block sm:hidden" />
        </h2>
        <div className="w-full">
          <div className="flex flex-wrap justify-between">
            {[
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/web devlopment.png',
                title: 'Web Development',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/ui-ux.png',
                title: 'UI / UX Design',
              },
             
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/apple.png',
                title: 'IOS App Development',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/android.jpg',
                title: 'Android App Development',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/hybrid.png',

                title: 'Hybrid App Development',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/artificial-intelligence.png',
                title: 'Artificial Intelligence Services',
              },
           
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/windows-app-devlopment.png',
                title: 'Windows App Development',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/api.svg',
                title: 'API Development',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/embeded-system.jpg',
                title: 'Embedded Solutions',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/iot.jpg',
                title: 'IOT Applications',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/billing-softwares.png',
                title: 'Billing Software Development',
              },
              {
                color: 'bg-[#FAFFF3]',
                imgSrc: '/icons/erp-softwares.png',
                title: 'ERP Softwares',
              },
             
            ].map((service, index) => (
              <div
                key={index}
                className={`flex-shrink-0 m-2 relative overflow-hidden ${service.color} rounded-lg shadow-lg h-48 flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/5 transition-all duration-300 hover:scale-105`}
              >
                <div className="relative flex-grow flex items-center justify-center">
                  <img
                    className="relative w-32 h-32 transition-all duration-300 hover:scale-100"
                    src={service.imgSrc}
                    alt="Cynosylix technology"
                  />
                </div>
                <div className="relative text-white px-4 pb-4 text-center">
                  <div className="flex justify-center items-center mt-1">
                    <span className="block font-semibold text-lg text-black mb-1 text-center">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
