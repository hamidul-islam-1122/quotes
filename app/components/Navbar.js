"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
const Navbar = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const openAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  return (

    <>



      {/* Navbar */}
      <nav>
        <div className="navbar flex items-center gap-4 p-3 bg-sky-100">
          <div className="hamburger cursor-pointer" onClick={openAside}>
            <Image
              src="/menu.svg"
              alt='menu-icon'
              width="25"
              height="25"
            />
          </div>
          <div className="logo">
            <h1 className='font-bold text-2xl flex items-center '>
              <span className='text-green-700'>&lt;</span>QUOTES/<span className='text-green-700'>&gt;</span>
            </h1>
          </div>
        </div>
      </nav>
      {/* navigationn aside area */}
      <aside
        className={`fixed  top-14 left-0 h-full w-64 bg-blue-50 shadow-lg z-50 transform transition-transform duration-300 ${isAsideOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul className="p-4">
          <li className='text-center flex rounded-4xl hover:bg-blue-700/30 hover:backdrop-blur-md transition-all duration-300 h-10 justify-center items-center'><Link href="/home" ></Link>Home</li>
          <li className='text-center flex rounded-4xl hover:bg-blue-700/30 hover:backdrop-blur-md transition-all duration-300 h-10 justify-center items-center'><Dropdown/> </li>
        </ul>
      </aside>

    </>
  )
}

export default Navbar