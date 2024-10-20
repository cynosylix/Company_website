"use client";
import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import TestimonialAnimation from '../Animations/TestimonialAnimation';

const TestimonialsSlider: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            content: "I have done my final-year internship in cynosylix technology. The faculties were well trained. Best ever training institute in Kochi, Kerala.",
            author: "Jijo Jacob",
            rating: 5,
        },
        {
            id: 2,
            content: "Sessions were handled greatly, and concepts were made clear. Great with time management!",
            author: "Naseef PT",
            rating: 5,
        },
        {
            id: 3,
            content: "Good faculty and they also provide good service to clients, overall satisfied with their performance",
            author: "Ashik Joshy",
            rating: 5,
        },
        {
            id: 4,
            content: "Here i have done my B.Tech final Year Project in embedded system. Faculties are very experienced and polite. I got so much idea regarding embedded technologies, thanks",
            author: "Narayanadas K P",
            rating: 5,
        },
        {
            id: 5,
            content: "The phython 3 days session is very useful for us.. It make us to understand the basics of phython.",
            author: "SANJANA K",
            rating: 4,
        },
    ];

    useEffect(() => {
        const keenSlider = new KeenSlider('#keen-slider', {
            loop: true,
            slides: {
                origin: 'center',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 768px)': {
                    slides: { perView: 1.75, spacing: 20 },
                },
                '(min-width: 1024px)': {
                    slides: { perView: 2.5, spacing: 32 },
                },
            },
        });

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');

        keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
        keenSliderNext?.addEventListener('click', () => keenSlider.next());

        return () => {
            keenSlider.destroy();
        };
    }, []);

    return (
        <section className="bg-[@FAFFF3] pt-6 pb-8 sm:pt-10 sm:pb-12">
            <div className="mx-auto max-w-[1340px] px-4 py-6 sm:px-6 lg:px-8 xl:py-10">
                <h2 className="text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl ">
                    Testimonials<br className="block sm:hidden" />
                </h2>
                <TestimonialAnimation>
                <div className="mt-6">
                    <div id="keen-slider" className="keen-slider flex">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="keen-slider__slide flex justify-center">
                                <blockquote className="flex flex-col justify-between bg-white border-2 border-[#28ef28] p-6 shadow-xl rounded-xl sm:p-8 lg:p-10 max-w-lg mx-auto transform transition duration-300 hover:scale-105">
                                    <div>
                                        <div className="flex gap-1 text-yellow-500">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <p className="mt-4 text-[#003300] leading-relaxed">{testimonial.content}</p>
                                        </div>
                                    </div>

                                    <footer className="mt-5 text-lg font-semibold text-[#003300]">
                                        &mdash; {testimonial.author}
                                    </footer>
                                </blockquote>

                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center gap-4 lg:gap-6 lg:mt-8">
                        <button
                            aria-label="Previous slide"
                            id="keen-slider-previous"
                            className="rounded-full bg-[#66cc66] p-4 text-white hover:bg-[#4caf50] transition-colors duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button
                            aria-label="Next slide"
                            id="keen-slider-next"
                            className="rounded-full bg-[#66cc66] p-4 text-white hover:bg-[#4caf50] transition-colors duration-300"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                </div>
                </TestimonialAnimation>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
