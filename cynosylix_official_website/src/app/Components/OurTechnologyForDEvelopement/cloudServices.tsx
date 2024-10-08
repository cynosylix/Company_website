"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TechnologyIcon: React.FC<{ imgSrc: string; alt: string }> = ({ imgSrc, alt }) => {
    return (
        <div className="flex-shrink-0 mx-2 sm:mx-4">
            <img className="w-12 h-auto sm:w-16" src={imgSrc} alt={alt} />
        </div>
    );
};

const CloudServices = () => {
    const technologies = [
        { imgSrc: '/TechnologyIcons/amazon-web-services.png', alt: 'Amazon Web Services' },
        { imgSrc: '/TechnologyIcons/microsoft-azure.png', alt: 'Microsoft Azure' },
        { imgSrc: '/TechnologyIcons/docker.png', alt: 'Docker' },
        { imgSrc: '/TechnologyIcons/amazone-dynamo-db.png', alt: 'Amazon Dynamo' },
        { imgSrc: '/TechnologyIcons/elastic-search.png', alt: 'Elastic Search' },
        { imgSrc: '/TechnologyIcons/github.png', alt: 'Github' },
        { imgSrc: '/TechnologyIcons/google-cloud.png', alt: 'Google Cloud' },
        { imgSrc: '/TechnologyIcons/gitlab.png', alt: 'Gitlab' },
        { imgSrc: '/TechnologyIcons/jenkins.png', alt: 'Jenkins' },
        { imgSrc: '/TechnologyIcons/mongo-db.png', alt: 'MongoDB' },
        { imgSrc: '/TechnologyIcons/mysql.png', alt: 'MySQL' },
        { imgSrc: '/TechnologyIcons/netlify.png', alt: 'Netlify' },
        { imgSrc: '/TechnologyIcons/postgresql.png', alt: 'Postgresql' },
        { imgSrc: '/TechnologyIcons/vercel.png', alt: 'Vercel' },
        { imgSrc: '/TechnologyIcons/aws-lambda.png', alt: 'AWS Lambda' },
        { imgSrc: '/TechnologyIcons/sql-server.png', alt: 'SQL Server' },
    ];

    // Duplicate the array to create a smooth looping effect
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <div className="w-full overflow-hidden">
            <div className="flex items-center animate-scroll whitespace-nowrap">
                {duplicatedTechnologies.map((tech, index) => (
                    <TechnologyIcon key={index} imgSrc={tech.imgSrc} alt={tech.alt} />
                ))}
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                /* Default scroll speed (30s for desktop and larger devices) */
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }

                /* Faster scroll speed (5s) for tablets */
                @media (max-width: 1024px) {
                    .animate-scroll {
                        animation-duration: 7s;
                    }
                }

                /* Fastest scroll speed (3s) for mobile devices */
                @media (max-width: 640px) {
                    .animate-scroll {
                        animation-duration: 3s;
                    }
                }
            `}</style>
        </div>
    );
};

export default CloudServices;
