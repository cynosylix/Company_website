"use client"

import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const baseUrl = ''

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus('Sending...');
        try {
            const res = await fetch(baseUrl + '/api/contactUs/SendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await res.json();

            if (result.success) {
                setStatus('Email sent successfully!');
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send email.');
        }
    };

    return (
        <section id="contact-us" className="bg-[#FAFFF3] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-1xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                    Contact Us
                    <br className="block sm:hidden" />
                </h2>

                <div className="grid md:grid-cols-3 gap-16 items-center relative overflow-hidden p-0 rounded-xl max-w-6xl mx-auto mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] max-md:before:hidden">
                    <div className="md:col-span-2">
                        <div className="h-[600px] w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.197386877395!2d76.3042171!3d9.9921131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d46ac2229c5%3A0xa8b80a3643be4f37!2sCynosylix%20Technology!5e0!3m2!1sen!2sin!4v1727201635791!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                frameBorder="0"
                                style={{ border: '0' }}
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4 mt-8">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                    required
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone No."
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Write Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-green-700 hover:bg-green-500 text-white"
                            >
                                Send Message
                            </button>
                        </form>

                        <p className="mt-4 text-sm text-center text-green-700">{status}</p>

                        <ul className="mt-4 flex flex-wrap justify-center gap-6">
                            <li className="flex items-center text-green-700">
                                <a href="mailto:cynosylixtechnology@gmail.com" className="text-sm ml-4">
                                    <strong>cynosylixtechnology@gmail.com</strong>
                                </a>
                            </li>
                            <li className="flex items-center text-green-700">
                                <a href="tel:+91 8891909301" className="text-sm ml-4">
                                    <strong>+91 8891909301</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
