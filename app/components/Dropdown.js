import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const Dropdown = () => {
  
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
      setIsOpen(!isOpen)
    }
  return (

    <>
    <div className="dropdpwn">
        <button
        onClick={toggleDropdown}

        >Dropdown</button>

        {isOpen && (
        <div className="absolute mt-2 w-40 bg-white shadow-lg rounded z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link href="/home">Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link href="/about">About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}

    </div>
    
    </>
  )
}

export default Dropdown