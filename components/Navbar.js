"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo.png'
import Link from 'next/link'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useState } from 'react'
export default function Navbar() {
  const [darkmode, setdarkmode] = useState(true)
  return (
    <div>
      <nav className="flex px-[5%] mx-auto bg-black  text-gray-300 justify-between nav-links">
        <div className="flex px-4 justify-between items-center ">
          <a href="index.html" className="w-16 py-2"><Image placeholder="blur" src={logo} alt="logo" /></a>
          <div className='hidden lg:flex'>
            <Link href="/" className="pr-2 pl-6 hover:text-white">Home</Link>
            <Link href="/Events" className="px-2 hover:text-white">Events</Link>
            <Link href="/Projects" className="px-2 hover:text-white">Projects</Link>
            <Link href="#" className="px-2 hover:text-white">Team</Link>
          </div>
        </div>
        <div className="lg:flex hidden items-center justify-center">
          <form method="GET">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </span>
              <input type="search" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 border-gray-800 focus:outline-none 
              focus:bg-gray-50 focus:text-white border" placeholder="Search..." autoComplete="off" />
            </div>
          </form>
          {/* <div className='cursor-pointer' onClick={()=>{
            if(darkmode){
              setdarkmode(false)
            }
            else{
              setdarkmode(true)
            }
          }}>
          {darkmode ? (
            <BsFillSunFill className='w-7 h-7'/>
          ) : (
            <BsFillMoonFill className='w-7 h-7' />
          )}
          </div> */}


        </div>
      </nav>
    </div>
  )
}
