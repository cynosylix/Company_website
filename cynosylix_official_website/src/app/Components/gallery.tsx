"use client"

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
        <section id='gallery' className="pt-4 pb-20 bg-[#FAFFF3] relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-1xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                    Gallery<br className="block sm:hidden" />
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="grid gap-4">
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="Image 1" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="Image 2" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="Image 3" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="Image 4" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="Image 5" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="Image 6" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="Image 7" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="Image 8" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="Image 9" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="Image 10" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="Image 11" />
                        </div>
                        <div onClick={() => openModal("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="Image 12" />
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
                            <button onClick={closeModal} className="absolute top-2 right-2 text-green-700 hover:text-green-800 focus:outline-none text-4xl p-2">
                                &times; {/* This is the 'X' symbol */}
                            </button>
                            <img className="w-full h-auto max-h-[75vh] rounded-lg object-contain" src={selectedImage || ""} alt="Selected" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
