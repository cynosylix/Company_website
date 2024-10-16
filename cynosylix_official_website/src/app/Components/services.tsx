"use client";
import React from 'react';

const Services = () => {
  return (
    <section className="pt-10 pb-20 bg-[#345635] relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-2xl font-bold leading-tight text-[#d1e8d5] dark:text-white sm:text-4xl lg:text-5xl mb-5">
          Services
          <br className="block sm:hidden" />
        </h2>
        <div className="hero-section">
          <div className="card-grid gap-4 mt-5 mb-3">
            {[
              { title: 'Web Development', categories: ['Python', 'JavaScript', 'Java'], image: '/service-images/web-development.png' },
              { title: 'Android App Development', categories: ['Java', 'Flutter', 'Kotlin'], image: '/service-images/android-app-developement.png' },
              { title: 'iOS App Development', categories: ['Flutter', 'Swift', 'C#'], image: '/service-images/ios-app-development.png' },
              { title: 'Desktop App Development', categories: ['Python', 'Flutter', 'Java'], image: '/service-images/desktop-application-developement.png' },
              { title: 'Artificial Intelligence Services', categories: ['Machine Learning', 'NLP', 'Computer Vision'], image: '/service-images/artificial-intelligence-and-machine-learning.png' },
              { title: 'UI / UX Design', categories: ['Wireframe', 'Prototyping', 'Visual Design'], image: '/service-images/ui-ux-design.png' },
              { title: 'Hybrid App Development', categories: ['Flutter', 'Angular', 'React Native'], image: '/service-images/hybrid-app-development.png' },
              { title: 'API Development', categories: ['Python', 'NodeJs', 'Java'], image: '/service-images/api-services.png' },
              { title: 'Cloud Services', categories: ['AWS', 'Microsoft Azure', 'Google Cloud'], image: '/service-images/cloud-services.png' },

              { title: 'Embedded & IoT Applications', categories: ['Automation', 'Cloud Integration', 'AI / ML'], image: '/service-images/iot-services.png' },
              { title: 'ERP & CRM Softwares', categories: ['Automate / Manual', 'Efficient Tasks', 'Cloud-Based'], image: '/service-images/erp-and-crm.png' },
              { title: 'Billing Software Development', categories: ['Custom Billing', 'CRM Billing', 'Automated Billing'], image: '/service-images/billing-software-development.png' }
            ].map((service, index) => (
              <a className="card" href="#" key={index}>
                <div className="card__background" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="card__content">
                  <h3 className="card__heading">{service.title}</h3>
                  <ul className="card__category-list">
                    {service.categories.map((category, idx) => (
                      <li className="card__category" key={idx}>{category}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style jsx>{`
          :root {
            --background-dark: #2d3548;
            --text-light: rgba(255, 255, 255, 0.6);
            --text-lighter: rgba(255, 255, 255, 0.8); /* Slightly less bright */
            --spacing-s: 8px;
            --spacing-m: 16px;
            --spacing-l: 24px;
            --spacing-xl: 32px;
            --spacing-xxl: 64px;
            --width-container: 1200px;
          }

          .hero-section {
            display: flex;
            justify-content: center;
            padding: var(--spacing-xxl) var(--spacing-l);
            align-items: center;
            flex-direction: column;
          }

          .card-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: var(--spacing-m);
            max-width: var(--width-container);
            width: 100%;
            margin-top: 20px; /* Add space above the cards */
          }

          /* Medium screens */
          @media (min-width: 640px) {
            .card-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px; /* Space between cards */
            }
          }

          /* Large screens */
          @media (min-width: 960px) {
            .card-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 30px; /* Space between cards */
            }
          }

          /* Extra-large screens */
          @media (min-width: 1200px) {
            .card-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 40px; /* Space between cards */
            }
          }

          .card {
            position: relative;
            text-align: center;
            border-radius: 16px; /* Add rounded corners */
            overflow: hidden; /* Hide overflow for rounded corners */
            transition: transform 200ms ease; /* Add transition effect */
          }

          .card:hover {
            transform: scale(1.02); /* Scale effect on hover */
          }

          .card:before {
            content: '';
            display: block;
            padding-bottom: 130%;
            width: 100%;
          }

          .card__background {
            border-radius: 16px;
            background-size: cover;
            background-position: center;
            bottom: 0;
            filter: brightness(0.75) saturate(1.2) contrast(0.85);
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transform-origin: center;
            transform: scale(1);
            transition: filter 200ms linear, transform 200ms linear;
          }

          .card:hover .card__background {
            transform: scale(1.05);
            opacity: 0.4;
            brightness-200;
          }

          .card-grid:hover > .card:not(:hover) .card__background {
            filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
          }

          .card__content {
            left: 0;
            padding: 20px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            // color:#0eff00;
            color:#FFFFFF
          }

          .card__category {
            color: var(--text-light);
            font-size: 1.1rem;
            margin-bottom: var(--spacing-s);
            text-transform: capitalize;
          }

          .card__heading {
            color: var(--text-lighter);
            font-size: 1.4rem;
            /* Reduced text shadow for less brightness */
            text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
            line-height: 1.4;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          .card-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: var(--spacing-m);
            max-width: var(--width-container);
            width: 100%;
            margin-top: 20px; /* Add space above the cards */
          }

          /* Medium screens */
          @media (min-width: 640px) {
            .card-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px; /* Space between cards */
              margin-top: 30px; /* Increase space on medium screens */
            }
          }

          /* Large screens */
          @media (min-width: 960px) {
            .card-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 30px; /* Space between cards */
              margin-top: 40px; /* Increase space on large screens */
            }
          }

          /* Extra-large screens */
          @media (min-width: 1200px) {
            .card-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 40px; /* Space between cards */
              margin-top: 50px; /* Increase space on extra-large screens */
            }
          }

          /* Mobile screens */
          @media (max-width: 639px) {
            .card-grid {
              gap: 15px; /* Add smaller gap for mobile */
              margin-top: 25px; /* Add extra margin on top for mobile */
            }
          }

          .card__category-list {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }

          .card__category-list li {
            margin-bottom: 5px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Services;
