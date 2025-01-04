"use client";

import { FaReact, FaUserGraduate } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavBar({ className }: { className: string }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className={"bg-green-800 text-white shadow-lg" + ` ${className}`}
      onMouseLeave={handleMouseLeave}>
      {/* Medium screen */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex gap-x-4">
            <div className="block cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu size={27} />
            </div>
            <div className="flex items-center">
              <a href="/home" className="text-lg font-semibold">
                {/* <FaReact className="inline-block mr-3" size={27} /> */}
                SC Chemclass
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 font-bold">
            <a
              href="/home"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-sm"
            >
              Home
            </a>
            <a
              href="/my-lessons"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-sm"
            >
              My Lessons
            </a>
            <a
              href="#"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-sm"
            >
              Assignments
            </a>
            <a
              href="#"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-sm"
            >
              Forum
            </a>
          </div>

          <div className="flex items-center">
            <p className="font-bold">
              <span>
                <FaUserGraduate size={20} className="inline-block mr-2" />
              </span>
              Jay, 3600{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Small screen */}
      {isOpen &&
        <div className="bg-green-700 block relative z-50" >
          <a href="/home" className="block px-4 py-2 text-sm hover:bg-green-600">
            Home
          </a>
          <a href="/my-lessons" className="block px-4 py-2 text-sm hover:bg-green-600">
            My Lessons
          </a>
        </div>
      }
    </nav>
  );
}
