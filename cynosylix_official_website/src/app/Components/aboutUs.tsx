/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section className="pt-1 pb-4 overflow-hidden bg-[#FAFFF3] dark:bg-gray-800 md:pt-2 sm:pt-6 2xl:pt-2">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-1xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                            About Us<br className="block sm:hidden" />
                        </h2>
                        <p className="max-w-lg mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:mt-4">
                            Welcome to Cynosylix Technologies, where innovation meets excellence!
                            Our passion for era and our commitment to turning ideas into fact power our work at Cynosylix. We are a dynamic start-up centred on turning in modern solutions, mainly for educational differentiation projects.
                            Cynosylix is a modern technology pioneer with a passion for creating modern answers that push the bounds of what is feasible.
                            Turning your mind into specific results is a collective win.
                            Cynosylix embraces fast technological advances with an eye in the direction of  destiny.

                        </p>

                        <p className="mt-2 text-xl text-gray-600 dark:text-gray-300 md:mt-4">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full  dark:bg-gray-900"></span>
                                <span className="relative"> Have a question? </span>
                            </span>
                            <br className="block sm:hidden " />
                            <span className="ml-2 "> Ask me on</span>{" "}
                            <a
                                href="#"
                                title="Ask me on WhatssApp"
                                className="transition-all duration-200 text-[#51f761] dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                            >
                                WhatsApp
                            </a>
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            className="relative w-full xl:max-w-md xl:mx-auto 2xl:origin-bottom 2xl:scale-100"
                            src={"/Desktop - 1.png"}
                            alt="Business Woman"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
