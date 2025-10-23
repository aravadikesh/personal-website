import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-gradient-to-r from-transparent via-teal-500 to-transparent border-0"></hr>
      <div className="mx-auto p-6 flex flex-col text-center md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
          <span>© 2025 Arav Adikesh Ramakrishnan</span>
          <span className="mx-2">•</span>
          <span className="text-sm">Built with Next.js & Tailwind</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <a
            href="mailto:aravadikesh@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="group"
            aria-label="Email"
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-all cursor-pointer text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              size={30}
            />
          </a>
          <a
            href="https://github.com/aravadikesh"
            rel="noreferrer"
            target="_blank"
            className="group"
            aria-label="GitHub"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-all cursor-pointer text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aravadikesh/"
            rel="noreferrer"
            target="_blank"
            className="group"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-all cursor-pointer text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
