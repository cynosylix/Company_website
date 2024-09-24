"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const WhyChooseUs = () => {
    // Card data for each service
    const services = [
        {
            title: 'Experienced Developer',
            imgSrc: 'whyChooseIcon/experiencedDevelopes.jpg',
            content: `Our distinctiveness at Cynosylix Technology is presenting top-notch software program solutions. Our group contains experienced Python, Angular, and Android developers similarly to senior experts in Machine learning and Artificial Intelligence,.NET, and embedded systems. Our regions of knowledge are challenge deployment and database administration. As a developer in an engineer-driven agency, Cynosylix Technology offers super customer support that is tailor-made for your wishes and wonderful project execution.`,
        },
        {
            title: 'New Technology',
            imgSrc: 'whyChooseIcon/newTechnology.jpg',
            content: `Cynosylix Technology is a forward-looking IT company that specialises in AI solutions, app development and new technology adoption. Globally, we are at the forefront of IT and business development. We have a strong presence in India and beyond, and our expertise promotes technological innovation, tools and advancements. We provide programs and products that help people and businesses thrive in the digital age.`,
        },
        {
            title: 'Customer Satisfaction',
            imgSrc: 'whyChooseIcon/customerSatisfaction.jpg',
            content: `Cynosylix Technologies stands for, presenting extraordinary customer support is our pinnacle precedence for increasing patron delight and loyalty. Our purpose is to connect with e-consumers via sharing private testimonies from clients. To make sure efficiency, we prioritise new client acquisition and decrease acquisition prices. We construct lasting relationships with happy customers with the aid of exceeding their expectations.`,
        }
    ];

    return (
        <section className="pt-10 pb-20 bg-[#FAFFF3] relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl text-left font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl mb-1">
                    Why Choose Us<br className="block sm:hidden" />
                </h2>

                <div className="relative mx-auto h-full pb-10">
                    {/* Service Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                imgSrc={service.imgSrc}
                                content={service.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ServiceCardProps {
    title: string;
    imgSrc: string;
    content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imgSrc, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Default truncated content plus an additional sentence
    const truncatedContent = `${content.slice(0, 100)}. We provide excellent services to ensure quality and satisfaction.`;

    return (
        <div className="transition-all duration-500 bg-[#edfed6] hover:bg-[#345635] hover:shadow-xl p-6 rounded-lg group">
            <div className="py-2 px-2">
                <img className="group-hover:fill-white" src={imgSrc} alt={title} />
                <h3 className="mt-2 text-lg font-semibold text-black group-hover:text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-900 group-hover:text-white leading-relaxed">
                    {isExpanded ? content : `${truncatedContent}...`}
                </p>
                <button
                    className="mt-2 text-sm font-semibold text-blue-500 hover:underline"
                    onClick={toggleReadMore}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
};


export default WhyChooseUs;
