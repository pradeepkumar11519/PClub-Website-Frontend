"use client"
import React from 'react'
import blog1 from '../public/blog1.jpg'
import blog2 from '../public/blog2.jpg'
import blog3 from '../public/blog3.png'
import Image from 'next/image'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
export default function HomePage2() {
    return (
        <div>
            <section className="bg-gray-800 w-full h-full lg:p-24 py-24 px-5 mx-auto overflow-hidden">
                <Fade big>
                <span className="bg-white w-12 h-3 border px-6 text-xs"></span>
                <h1 className="mt-3 text-4xl lg:text-6xl sm:text-5xl text-white font-extrabold">From The Blogs</h1>
                </Fade>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 ">
                        <Slide left>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 bg-gray-900 border-gray-600 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                                <div className="lg:h-48 md:h-36 w-full object-cover object-center nav-links">
                                <Image className="lg:h-48 md:h-36 w-full object-cover object-center nav-links" src={blog1} alt="blog"/>
                                </div>
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">Backend Guide for Beginners</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-300 mb-3">Databases</h1>
                                        <p className="leading-relaxed mb-3 text-gray-400">Database is a structured system to store data with rules, conditions and constraints based on one’s needs.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 nav-links">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div className="p-4 md:w-1/3 hidden md:block">
                            <div className="h-full border-2 bg-gray-900 border-gray-600 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <div className="lg:h-48 md:h-36 w-full object-cover object-center nav-links">
                                <Image className="lg:h-48 md:h-36 w-full object-cover object-center nav-links" src={blog2} alt="blog"/>
                                </div>
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">Networking and Web Basics for Cybersecurity</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-300 mb-3">Network Basis</h1>
                                        <p className="leading-relaxed mb-3 text-gray-400">In 2022, where the digital world is progressing rapidly, the interaction between people over the internet is almost inevitable.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 nav-links">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </Slide>
                        
                        <Slide right>
                        <div className="p-4 md:w-1/3 md:hidden">
                            <div className="h-full border-2 bg-gray-900 border-gray-600 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <div className="lg:h-48 md:h-36 w-full object-cover object-center nav-links">
                                <Image className="lg:h-48 md:h-36 w-full object-cover object-center nav-links" src={blog2} alt="blog"/>
                                </div>
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">Networking and Web Basics for Cybersecurity</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-300 mb-3">Network Basis</h1>
                                        <p className="leading-relaxed mb-3 text-gray-400">In 2022, where the digital world is progressing rapidly, the interaction between people over the internet is almost inevitable.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 nav-links">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </Slide>

                        <Slide right>
                        <div className="p-4 md:w-1/3 hidden md:block">
                            <div className="h-full border-2 bg-gray-900 border-gray-600 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <div className="lg:h-48 md:h-36 w-full object-cover object-center nav-links">
                                <Image className="lg:h-48 md:h-36 w-full object-cover object-center nav-links" src={blog3} alt="blog"/>
                                </div>
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">Merge Sort for Linked Lists and Arrays</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-300 mb-3">Linked List</h1>
                                        <p className="leading-relaxed mb-3 text-gray-400">The Merge Sort algorithm’s division, comparison, and combination processes are depicted in the diagram above. </p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 nav-links">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </Slide>

                        <Slide left>
                        <div className="p-4 md:w-1/3 md:hidden">
                            <div className="h-full border-2 bg-gray-900 border-gray-600 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <div className="lg:h-48 md:h-36 w-full object-cover object-center nav-links">
                                <Image className="lg:h-48 md:h-36 w-full object-cover object-center nav-links" src={blog3} alt="blog"/>
                                </div>
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">Merge Sort for Linked Lists and Arrays</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-300 mb-3">Linked List</h1>
                                        <p className="leading-relaxed mb-3 text-gray-400">The Merge Sort algorithm’s division, comparison, and combination processes are depicted in the diagram above. </p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 nav-links">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </Slide>

                    </div>
                </div>
            </section>
        </div>
    )
}
