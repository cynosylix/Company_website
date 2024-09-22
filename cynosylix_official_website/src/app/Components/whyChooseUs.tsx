/* eslint-disable @next/next/no-img-element */
import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="pt-10 pb-20 bg-[#FAFFF3] relative overflow-hidden">

            <div className="container  mx-auto px-4 sm:px-6 lg:px-2">
                <h2 className="text-2xl text-left font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl mb-4">
                    Services<br className="block sm:hidden" />
                </h2>
                <div className="relative mx-auto h-full pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12 lg:mt-5 relative">
                        <div className="transition-all duration-1000 bg-white hover:bg-[#345635] hover:shadow-xl p-4 rounded-lg group">
                            <div className="py-2 px-2">
                                <img
                                    className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    src={'/icons/iot.jpg'}
                                    alt="Cynosylix technology"
                                />
                                <h3 className="mt-2 text-lg font-semibold text-black group-hover:text-white">Experienced Developer</h3>
                                <p className="mt-2 text-sm text-gray-600 group-hover:text-white">Our distinctiveness at Cynosylix Technology is presenting top-notch software program solutions. Our group contains experienced Python, Angular, and Android developers similarly to senior experts in Machine learning and Artificial Intelligence,.NET, and embedded systems.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-1000 bg-white hover:bg-[#345635] hover:shadow-xl p-4 rounded-lg group">
                            {/* <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div> */}
                            <div className="py-2 px-2">
                                <img
                                    className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    src={'/icons/iot.jpg'}
                                    alt="Cynosylix technology"
                                />
                                <h3 className="mt-2 text-lg font-semibold text-black group-hover:text-white">New Technology</h3>
                                <p className="mt-2 text-sm text-gray-600 group-hover:text-white">Cynosylix Technology is a forward-looking IT company that specialises in AI solutions, app development and new technology adoption. Our expertise promotes technological innovation and advancements.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-1000 bg-white hover:bg-[#345635] hover:shadow-xl p-4 rounded-lg group">
                            {/* <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div> */}
                            <div className="py-2 px-2">
                                <img
                                    className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    src={'/icons/iot.jpg'}
                                    alt="Cynosylix technology"
                                />
                                <h3 className="mt-2 text-lg font-semibold text-black group-hover:text-white">Customer Satisfaction</h3>
                                <p className="mt-2 text-sm text-gray-600 group-hover:text-white">Cynosylix Technologies prioritizes extraordinary customer support for increasing patron satisfaction and loyalty. We aim to build lasting relationships by exceeding expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
