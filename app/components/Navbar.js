"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const openAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="navbar flex items-center gap-4 p-3 bg-sky-100 max-sm:gap-2">
          <div className="hamburger cursor-pointer" onClick={openAside}>
            <Image src="/menu.svg" alt="menu-icon" width="25" height="25" />
          </div>
          <div className="logo">
            <h1 className="font-bold text-2xl flex items-center ">
              <span className="text-green-700">&lt;</span>{" "}
              <Link href="/">QUOTES/</Link>
              <span className="text-green-700">&gt;</span>
            </h1>
          </div>
        </div>
      </nav>

      {/* navigationn aside area */}
      <aside
        className={`max-sm:w-fit  fixed  top-14 left-0 h-full w-64 bg-blue-50 shadow-lg z-50 transform transition-transform duration-300 ${
          isAsideOpen ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        <ul className="p-4 flex flex-col gap-2 text-lg">
          <li>
            <Link
              className="text-center flex rounded-4xl   hover:bg-blue-700/30 hover:backdrop-blur-md transition-all duration-300 h-10 justify-center items-center"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-center flex rounded-4xl   hover:bg-blue-700/30 hover:backdrop-blur-md transition-all duration-300 h-10 justify-center items-center"
              href="/readquotes"
            >
              Read Quotes
            </Link>
          </li>
          <li className="text-center flex rounded-4xl   hover:bg-blue-700/30 hover:backdrop-blur-md transition-all duration-300 h-10 justify-center items-center">
            <Dropdown />
          </li>
          <li>
            <Link
              className="text-center flex rounded-4xl    hover:bg-blue-700/30 hover:backdrop-blur-md transition-all duration-300 h-10 justify-center items-center"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
