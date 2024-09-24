/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TechnologyIcon: React.FC<{ imgSrc: string; alt: string }> = ({ imgSrc, alt }) => {
    return (
        <div className="flex justify-center m-4">
            <img className="w-32 h-auto" src={imgSrc} alt={alt} />
        </div>
    );
};

const CloudServices = () => {
    const technologies = [
        {
            imgSrc: '/TechnologyIcons/amazon-web-services.png',
            alt: 'Amazon Web Services'
        },
        {
            imgSrc: '/TechnologyIcons/azure.png',
            alt: 'Microsoft Azure'
        },
        {
            imgSrc: '/TechnologyIcons/docker.png',
            alt: 'Docker'
        },
        {
            imgSrc: '/TechnologyIcons/amazon-dynamoDB.png',
            alt: 'Amazon Dynamo'
        },
        {
            imgSrc: '/TechnologyIcons/elastic-search.png',
            alt: 'Elastic Search'
        },
        {
            imgSrc: '/TechnologyIcons/github.png',
            alt: 'Github'
        },
        {
            imgSrc: '/TechnologyIcons/google-cloud.png',
            alt: 'Google Cloud'
        },
        {
            imgSrc: '/TechnologyIcons/gitlab.png',
            alt: 'Gitlab'
        },
        {
            imgSrc: '/TechnologyIcons/jenkins.png',
            alt: 'Jenkins'
        },
        {
            imgSrc: '/TechnologyIcons/mongodb.png',
            alt: 'MongoDB'
        },
        {
            imgSrc: '/TechnologyIcons/my-sql.png',
            alt: 'MySQL'
        },
        {
            imgSrc: '/TechnologyIcons/netlify.png',
            alt: 'Netlify'
        },
        {
            imgSrc: '/TechnologyIcons/postgresql.png',
            alt: 'Postgresql'
        },
        {
            imgSrc: '/TechnologyIcons/vercel.png',
            alt: 'Vercel'
        },
        {
            imgSrc: '/TechnologyIcons/aws-lambda.png',
            alt: 'AWS Lambda'
        },
    ];

    return (
        <div className="mt-4 flex flex-wrap justify-center">
            {technologies.map((tech, index) => (
                <TechnologyIcon
                    key={index}
                    imgSrc={tech.imgSrc}
                    alt={tech.alt}
                />
            ))}
        </div>
    );
};

export default CloudServices;
