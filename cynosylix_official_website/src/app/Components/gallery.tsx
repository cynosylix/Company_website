"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <section id='gallery' className="pt-4 pb-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-1xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                    Gallery<br className="block sm:hidden" />
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="grid gap-4">
                        <div onClick={() => openModal("galary/Image 1.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 1.png" alt="Image 1" />
                        </div>
                        <div onClick={() => openModal("galary/Image 2.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 2.png" alt="Image 2" />
                        </div>
                        <div onClick={() => openModal("galary/Image 3.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 3.png" alt="Image 3" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div onClick={() => openModal("galary/Image 4.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 4.png" alt="Image 4" />
                        </div>
                        <div onClick={() => openModal("galary/Image 5.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 5.png" alt="Image 5" />
                        </div>
                        <div onClick={() => openModal("galary/Image 6.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 6.png" alt="Image 6" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div onClick={() => openModal("galary/Image 7.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 7.png" alt="Image 7" />
                        </div>
                        <div onClick={() => openModal("galary/Image 8.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 8.png" alt="Image 8" />
                        </div>
                        <div onClick={() => openModal("galary/Image 9.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 9.png" alt="Image 9" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div onClick={() => openModal("galary/Image 10.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 10.png" alt="Image 10" />
                        </div>
                        <div onClick={() => openModal("galary/Image 11.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 11.png" alt="Image 11" />
                        </div>
                        <div onClick={() => openModal("galary/Image 12.png")} className="hover-effect">
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="galary/Image 12.png" alt="Image 12" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button type="button" className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-3 text-center mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        View All
                    </button>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
                        <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full md:w-2/3 lg:w-1/2">
                            {/* Close Button */}
                            <button onClick={closeModal} className="absolute top-2 right-2 text-[#6abf52] hover:text-[#6abf52] focus:outline-none text-4xl p-2">
                                &times; {/* This is the 'X' symbol */}
                            </button>
                            <img className="w-full h-auto max-h-[75vh] rounded-lg object-contain" src={selectedImage || ""} alt="Selected" />
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .hover-effect img {
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                }

                .hover-effect:hover img {
                    transform: scale(1.05);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </section>
    );
};

export default Gallery;
