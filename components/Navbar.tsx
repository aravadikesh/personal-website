"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Education",
    page: "education",
  },
  {
    label: "Work Experience",
    page: "experience",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Resume",
    page: "/resume.pdf",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-stone-900/80 border-b border-gray-200/50 dark:border-stone-700/50 shadow-sm">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home" className="cursor-pointer">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent hover:from-teal-700 hover:to-cyan-600 transition-all">
                  Arav Adikesh Ramakrishnan
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 dark:text-gray-300 rounded-lg outline-none hover:bg-gray-100 dark:hover:bg-stone-800 transition-colors"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return item.label === "Resume" ? (
                  <a
                    key={idx}
                    href={item.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block lg:inline-block text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 font-medium cursor-pointer transition-colors"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    to={item.page}
                    className="block lg:inline-block text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 font-medium cursor-pointer transition-colors"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-gradient-to-br from-yellow-100 to-orange-100 p-2 rounded-xl hover:scale-110 transition-transform shadow-md hover:shadow-lg"
                >
                  <RiSunLine size={25} color="#f59e0b" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-gradient-to-br from-slate-700 to-slate-900 p-2 rounded-xl hover:scale-110 transition-transform shadow-md hover:shadow-lg"
                >
                  <RiMoonFill size={25} color="#cbd5e1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
