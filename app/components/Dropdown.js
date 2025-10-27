import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
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
                <button className='flex items-center hover:bg-blue-100 hover:rounded-3xl px-14 py-1 '
                    onClick={toggleDropdown}>Your type<span><HugeiconsIcon icon={ArrowDown01Icon} /></span></button>

                {isOpen && (
                    <div className="absolute mt-2 w-40 rounded-lg bg-white shadow-lg  z-10">
                        <ul className="py-2">
                            <li className="px-4 py-2 hover:bg-blue-100 ">
                                <Link href="/">Motivational</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-blue-100">
                                <Link href="/">Daily speech</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-blue-100">
                                <Link href="/">Technical</Link>
                            </li>
                        </ul>
                    </div>
                )}

            </div>

        </>
    )
}

export default Dropdown