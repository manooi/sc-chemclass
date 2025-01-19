"use client";

import { FaUserGraduate } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { LogOut } from "@/app/lib/action";
import { useSession } from "next-auth/react";

export default function NavBar({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const name = session.data?.user?.name ?? "-";
  const username = session.data?.user?.email ?? "-";
  const isAdmin = username === "Adminsc";

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={"bg-green-800 text-white shadow-lg" + ` ${className}`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Medium screen */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex gap-x-4">
            <div
              className="block cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GiHamburgerMenu size={27} />
            </div>
            <div className="flex items-center">
              <a
                href="/my-lessons"
                className="hidden md:block text-xl font-bold"
              >
                เคมีสดชื่น
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 font-bold">
            <a
              href="/my-lessons"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-md"
            >
              บทเรียน
            </a>
            {isAdmin && (
              <a
                href="/report"
                className="hover:bg-green-700 px-3 py-2 rounded-md text-md"
              >
                Report
              </a>
            )}
            <a
              href="https://padlet.com/663183/sc-class-mjwdafr4koddgau3"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-md"
              target="_blank"
            >
              Padlet
            </a>
          </div>

          <div className="flex items-center">
            <p className="font-bold">
              <span>
                <FaUserGraduate size={20} className="inline-block mr-2" />
              </span>
              {name == username && <>{name}</>}
              {name != username && (
                <>
                  {name}, {username}
                </>
              )}
            </p>
            <p className="ml-1">|</p>
            <form action={LogOut}>
              <button type="submit" className="ml-1 font-bold">
                ออกจากระบบ
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Small screen */}
      {isOpen && (
        <div className="bg-green-700 block md:hidden relative z-50">
          <a
            href="/my-lessons"
            className="block px-4 py-2 text-sm hover:bg-green-600"
          >
            บทเรียน
          </a>
          <a
            href="https://padlet.com/663183/sc-class-mjwdafr4koddgau3"
            className="block px-4 py-2 text-sm hover:bg-green-600"
            target="_blank"
          >
            Padlet
          </a>
        </div>
      )}
    </nav>
  );
}
