"use client"
import React from 'react'
import Fade  from 'react-reveal/Fade'
export default function HomePage3() {
    return (
        <div>

            <section className="bg-gray-700 w-full h-full lg:p-48 py-24 px-5 mx-auto break-all">
                <Fade bottom>
                    <span className="bg-white w-12 h-3 border px-6 text-xs"></span>
                    <h1 className="text-4xl lg:text-6xl sm:text-5xl mt-3 text-white font-extrabold">Our community</h1>
                </Fade>
                <br />
                <Fade bottom>
                    <p className="text-xl text-white">
                        The Programming Club aims to develop a positive programming culture in the IITI community. We try our best to help students explore all programming disciplines and choose what they like the most. We organize workshops, provide mentorship, share resources, and arrange alumni talks to aid their journey.</p></Fade>
                <br />
                <Fade bottom>
                    <p className="text-xl text-white">For students to gain experience by working on real-life projects, we take on good projects and organise various events and hackathons by collaborating with institutes, professors, clubs and industries.</p>
                </Fade>
                <br />
                <Fade bottom>
                    <p className="text-xl text-white">Most importantly, we stand by our motto by enabling students to unlock their true potential and become their best selves.</p>
                </Fade>
            </section>
        </div>
    )
}
