/* eslint-disable @next/next/no-img-element */
import React from 'react';

const BlogSuggestion = () => {
    // Blog data array
    const blogs = [
        {
            id: 1,
            date: "Jan 01, 2023",
            title: "Clever ways to invest in product to organize your portfolio",
            description: "Discover smart investment strategies to streamline and organize your portfolio.",
            imgSrc: "https://pagedone.io/asset/uploads/1696244317.png",
        },
        {
            id: 2,
            date: "Feb 01, 2023",
            title: "How to grow your profit through systematic investment with us",
            description: "Unlock the power of systematic investment with us and watch your profits soar.",
            imgSrc: "https://pagedone.io/asset/uploads/1696244340.png",
        },
        {
            id: 3,
            date: "Mar 01, 2023",
            title: "How to analyze every holding of your portfolio",
            description: "Our comprehensive guide will equip you with the tools and insights needed to analyze your portfolio.",
            imgSrc: "https://pagedone.io/asset/uploads/1696244356.png",
        },
    ];

    return (
        <section id="blog-section" className="pt-1 pb-4 overflow-hidden bg-[#2b3a2e] dark:bg-gray-900 md:pt-2 sm:pt-6 2xl:pt-2">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-2xl font-bold leading-tight text-[#d1e8d5] mt-4 dark:text-white sm:text-4xl lg:text-5xl mb-5">
                        Our Latest Blog<br className="block sm:hidden" />
                    </h2>
                    <div className="flex flex-wrap justify-center gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-x-8">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/3 border border-transparent rounded-2xl bg-[#ffffff] hover:bg-[#edfed6] shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                                <div className="flex items-center">
                                    <img src={blog.imgSrc} alt="blog image" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 rounded-b-2xl">
                                    <span className="text-gray-500 group-hover:text-[#2b3a2e] font-medium mb-3 block transition-colors duration-300">{blog.date}</span>
                                    <h4 className="text-xl text-gray-800 group-hover:text-[#2b3a2e] font-semibold leading-8 mb-5 transition-colors duration-300">{blog.title}</h4>
                                    <p className="text-gray-600 group-hover:text-[#2b3a2e] leading-6 mb-10 transition-colors duration-300">{blog.description}</p>
                                    <a href="#" className="cursor-pointer text-lg text-indigo-600 group-hover:text-indigo-800 font-semibold transition-colors duration-300">Read more..</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSuggestion;
