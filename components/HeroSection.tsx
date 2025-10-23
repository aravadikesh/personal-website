"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-8 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/headshot.png"
              alt="Arav Adikesh Ramakrishnan"
              width={325}
              height={325}
              className="relative rounded-full shadow-2xl ring-4 ring-teal-500/20"
            />
          </div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl bg-gradient-to-r from-gray-900 via-teal-700 to-teal-600 dark:from-white dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
            Hi, I&#39;m Arav!
          </h1>
          <p className="text-lg mt-4 mb-2 md:text-xl font-medium text-teal-600 dark:text-teal-400">
            MS Computer Science Student | AI/ML Engineer | Healthcare NLP Researcher
          </p>
          <p className="text-base mt-2 mb-6 md:text-lg text-gray-700 dark:text-gray-300">
            Graduate student at UMass Amherst (May 2026) specializing in AI/ML and Natural Language Processing.
            Building innovative solutions at the intersection of healthcare and artificial intelligence to make
            medical care more accessible across languages and cultures.
          </p>

          {/* Social Links */}
          <div className="flex flex-row items-center justify-center md:justify-start space-x-4 mb-6">
            <a
              href="mailto:aravadikesh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <AiOutlineMail size={28} />
            </a>
            <a
              href="https://linkedin.com/in/aravadikesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <AiOutlineLinkedin size={28} />
            </a>
            <a
              href="https://github.com/aravadikesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <AiOutlineGithub size={28} />
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fadeIn animation-delay-4">
            <Link
              to="experience"
              className="inline-block text-white font-semibold px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ animationDelay: '0.5s' }}
            >
              Work Experience
            </Link>
            <Link
              to="experience"
              className="inline-block text-teal-600 dark:text-teal-400 font-semibold px-6 py-3 border-2 border-teal-600 dark:border-teal-400 rounded-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 hover:scale-105 transition-all duration-300"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ animationDelay: '0.6s' }}
            >
              Research
            </Link>
            <Link
              to="projects"
              className="inline-block text-teal-600 dark:text-teal-400 font-semibold px-6 py-3 border-2 border-teal-600 dark:border-teal-400 rounded-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 hover:scale-105 transition-all duration-300"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ animationDelay: '0.7s' }}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
