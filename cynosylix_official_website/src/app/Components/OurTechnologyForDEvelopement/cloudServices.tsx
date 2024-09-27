"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TechnologyIcon: React.FC<{ imgSrc: string; alt: string }> = ({ imgSrc, alt }) => {
    return (
        <div className="flex-shrink-0 m-0 ml-5">
            <img className="w-16 h-auto" src={imgSrc} alt={alt} />
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
            <div className="flex items-center  animate-scroll whitespace-nowrap">
                {duplicatedTechnologies.map((tech, index) => (
                    <TechnologyIcon   key={index} imgSrc={tech.imgSrc} alt={tech.alt} />
                ))}
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0); /* Start with the first image in view */
                    }
                    100% {
                        transform: translateX(-50%); /* Scroll half of the total length (one set of images) */
                    }
                }
                .animate-scroll {
                    animation: scroll 60s linear infinite; /* Adjust time for smoothness */
                }
            `}</style>
        </div>
    );
};

export default CloudServices;
