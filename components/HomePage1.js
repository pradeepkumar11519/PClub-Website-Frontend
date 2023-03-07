"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Particles from "react-particles";
import particleConfig from './ParticleConfig';
import { loadFull } from "tsparticles";
export default function HomePage1() {
  const particlesInit = async engine => {
    
    await loadFull(engine);
  }
  const particlesLoaded = container => {
     console.log(container);
  }
  return (
    <div className='text-white relative h-screen'>
      <div className=''>
        <Particles init={particlesInit}
           id="tsparticles" options={{
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            style: {
              
              position:"absolute"
            },
            detectRetina: true,
        }} />
      </div>
      <div className=' flex items-center justify-center absolute h-full w-full'>

        <div className=' text-white font-bold  w-full text-center   justify-center items-center xl:text-6xl md:text-3xl sm:text-2xl text-xl '>
          <div className=' text-center ' >
            <TypeAnimation
              cursor={true}
              sequence={[
              'The Programming Club',
              1000,
              'IIT INDORE',
              1000,
               ]}
               
              speed={60}
              wrapper="h2"
              style={{ fontSize: '1.5em' }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}
