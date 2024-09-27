import React from 'react'

const ContactUs = () => {
    return (
        <section id="contact-us" className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-1xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                    Contact Us
                    <br className="block sm:hidden" />
                </h2>

                <div className="grid md:grid-cols-3 gap-16 items-center relative overflow-hidden p-0 rounded-xl max-w-6xl mx-auto mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] max-md:before:hidden">

                    {/* Google Map Embed (Taking up 2/3 of the grid) */}
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

                    {/* Contact Form (Taking up 1/3 of the grid) */}
                    <div className="md:col-span-1">
                        <form>
                            <div className="space-y-4 mt-8">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                />
                                <input
                                    type="number"
                                    placeholder="Phone No."
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                />
                                <textarea
                                    placeholder="Write Message"
                                    className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-green-700 hover:bg-green-500 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="#fff"
                                    className="mr-2"
                                    viewBox="0 0 548.244 548.244"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                        clipRule="evenodd"
                                        data-original="#000000"
                                    />
                                </svg>
                                Send Message
                            </button>
                        </form>

                        <ul className="mt-4 flex flex-wrap justify-center gap-6">
                            <li className="flex items-center text-green-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="currentColor"
                                    viewBox="0 0 479.058 479.058"
                                >
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000"
                                    />
                                </svg>
                                <a href="mailto:cynosylixtechnology@gmail.com" className="text-sm ml-4">
                                    <strong>cynosylixtechnology@gmail.com</strong>
                                </a>
                            </li>
                            <li className="flex items-center text-green-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="currentColor"
                                    viewBox="0 0 482.6 482.6"
                                >
                                    <path
                                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-14.6-14.6-32.8-14.3-47.3 0-2.6 2.6-5.3 5.2-7.9 7.8-10.2 10.1-20.8 20.7-31.1 30.6-9.4 8.7-18.2 9.1-28.4.6-11.7-9.7-24.4-18.3-37-27.1-22.6-15-43.5-32.1-61.5-53.7-6-7.2-6.5-13.2-1.7-21.1 10.3-16.7 21.1-33.2 31.4-50.1 10.3-16.8 8.7-31.4-5.5-45.3-20.4-20.3-40.6-40.8-60.8-61.2-16.7-16.7-31.6-20.5-49.3-11.4-1.1.6-2.3 1.2-3.4 1.9-6.2 3.8-12.1 7.8-17.5 12.7-21.2 18.6-41 38.6-39.2 68.7.8 15.5 5.4 31.5 11.2 46.2 20.4 51.5 50.9 95.2 91.4 134.7z"
                                        data-original="#000000"
                                    />
                                </svg>
                                <a href="tel:+91 8891909301" className="text-sm ml-4">
                                    <strong>+91 8891909301</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs
