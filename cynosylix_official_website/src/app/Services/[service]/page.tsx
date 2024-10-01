/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from 'next/navigation';
import { serviceContent, ServiceKeys } from '../../Services/serviceContent';



const SingleService = () => {
  const pathname = usePathname();
  const lastPath = pathname?.split('/').filter(Boolean).pop();

  // Ensure 'service' is typed correctly
  const service = lastPath as ServiceKeys;

  // Access content safely
  const content = serviceContent[service];

  return (
    <div className="max-w-screen-lg mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {content.title} {/* Display service title */}
            </h2>
            <a href="#" className="py-2   text-black inline-flex items-center justify-center mb-2">
              {content.smallDescription}
            </a>
          </div>

          <img
            src={content.imageSrc}
            className="w-full h-auto object-cover lg:rounded"
          />
        </div>

        <div className="flex flex-col  lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-[calc(100%-3rem)] overflow-hidden">
            <p className="pb-6 first-letter:text-5xl lg:first-letter:text-7xl break-words">{content.description}</p>
          </div>
        </div>



      </main>
    </div>
  );
};

export default SingleService;
